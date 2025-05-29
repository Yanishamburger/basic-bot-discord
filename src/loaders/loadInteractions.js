const { readdirSync } = require('fs');

// Export a function that takes 'client' (the Discord bot instance) as an argument
module.exports = (client) => {
    let count = 0; // Initialize a counter to track how many interactions are loaded

    // Read all directories inside the './src/interactions/' folder
    const dirsInteractions = readdirSync('./src/interactions/');

    // Loop through each directory (e.g., 'buttons', 'selects', etc.)
    for (const dirs of dirsInteractions) {
        // Read all JavaScript files in the current directory
        const filesDirs = readdirSync(`./src/interactions/${dirs}/`).filter((f) => f.endsWith('.js'));

        // Loop through each interaction file
        for (const files of filesDirs) {
            // Dynamically import the interaction module
            const interaction = require(`../interactions/${dirs}/${files}`);

            // Add the interaction to the client's interactions collection, using its 'name' as the key
            client.interactions.set(interaction.name, interaction);

            // Increment the count of loaded interactions
            count++;
        };
    };

    // Log the total number of loaded interactions
    console.log(`[Interactions] => ${count} loaded interactions`);
};