const { Events } = require('discord.js');

module.exports = {
    // The name of the event to handle (in this case, the "ready" event triggered when the client is fully connected)
    name: Events.ClientReady,

    // Specify if this event should be handled only once (true) or multiple times (false)
    once: true,

    /**
     * This function is executed when the 'ready' event is triggered.
     * @param {Client} client - The Discord bot client
     */
    async run(client) {
        // Register all slash commands globally
        client.application.commands.set(client.commands.map((command) => command.data));

        // Log a message to the console indicating the bot is connected and ready
        console.log(`${client.user.tag} is now connected and ready!`);
    },
};