// Import necessary modules from the discord.js library
const { Client, Partials, Collection, GatewayIntentBits } = require('discord.js');

// Import the configuration file (contains important settings like the token, prefixes, etc.)
const config = require('../config');

// Create a new Discord client (the bot)
const client = new Client({
	// Specify the "partials" to use, allowing the bot to handle incomplete data for certain objects
	partials: [
		Partials.Channel, // Enables handling of events for channels even if all data isn’t available
		Partials.User     // Enables handling of events for users with incomplete data
	],
	// Define the intents (permissions to access various types of events and server data)
	intents: [
		GatewayIntentBits.Guilds,         // Allows the bot to access server (guild) information
		GatewayIntentBits.GuildMembers,   // Allows the bot to access information about server members
		GatewayIntentBits.GuildMessages,  // Allows the bot to read and send messages in text channels
	],
});

// Load modules to dynamically import commands, events, and interactions for the bot
const loadCommands = require('./loaders/loadCommands');       // Loads the bot’s commands
const loadEvents = require('./loaders/loadEvents');           // Loads event handlers (e.g., on message, on join)
const loadInteractions = require('./loaders/loadInteractions'); // Loads interactions (e.g., buttons, menus, etc.)

// Attach the configuration to the client so it’s accessible throughout the bot
client.config = config;

// Create two collections (like Maps) to store commands and interactions
client.commands = new Collection();      // Stores the bot’s commands
client.interactions = new Collection();  // Stores the bot’s interactions

// Use an Immediately Invoked Async Function Expression (IIFE) to load everything and start the bot
(async () => {
	loadCommands(client);      // Calls the function to load all commands into client.commands
	loadEvents(client);        // Calls the function to load all events
	loadInteractions(client);  // Calls the function to load all interactions (buttons, menus, etc.)

	// Log in to Discord using the token set in environment variables (process.env.TOKEN)
	client.login(process.env.TOKEN);
})();