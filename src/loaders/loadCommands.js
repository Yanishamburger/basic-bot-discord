// Import the 'readdirSync' function from the built-in 'fs' (file system) module
const { readdirSync } = require('fs');

// Export a function that takes 'client' as a parameter (the bot client instance)
module.exports = (client) => {
    let count = 0; // Initialize a counter to track the number of loaded commands

    // Read all directories inside the './src/commands/' folder
    const dirsCommands = readdirSync('./src/commands/');

    // Loop through each directory found
    for (const dirs of dirsCommands) {
        // Read all JavaScript files inside the current directory
        const filesDirs = readdirSync(`./src/commands/${dirs}/`).filter((f) => f.endsWith('.js'));

        // Loop through each command file in the directory
        for (const files of filesDirs) {
            // Dynamically require (import) the command module
            const command = require(`../commands/${dirs}/${files}`);

            // Add the command to the client's commands collection, using the command's name as the key
            client.commands.set(command.data.name, command);

            // Increment the count of loaded commands
            count++;
        };
    };

    // Log the total number of loaded commands using the client's logger
    console.log(`[Commandes] => ${count} loaded commands`);
};
