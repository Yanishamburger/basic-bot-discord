const { Events, InteractionType, MessageFlags } = require('discord.js');

module.exports = {
    name: Events.InteractionCreate, // This listens for the 'interactionCreate' event (for commands, buttons, selects, modals, etc.)
    once: false, // Set to false to allow the listener to fire multiple times (for each interaction)

    /**
     * @param {Client} client - The Discord bot client
     * @param {Interaction} interaction - The interaction object (command, button, etc.)
     */
    async run(client, interaction) {
        if (!client.isReady()) return; // Ensure the client is fully connected before handling the interaction

        try {
            // Switch on interaction type to handle different interaction cases
            switch (interaction.type) {
                case InteractionType.ApplicationCommand: // Slash commands
                    const command = client.commands.get(interaction.commandName); // Get the command by name

                    if (command) {
                        // Execute the command's run method
                        await command.run(client, interaction);
                    } else {
                        // If the command is not found, send an ephemeral message
                        return await interaction.followUp({
                            content: 'Command not found', // Replace with your fallback message
                            flags: MessageFlags.Ephemeral // Makes the reply visible only to the user
                        });
                    };
                    break;

                case InteractionType.ApplicationCommandAutocomplete: // Autocomplete interactions (not handled here)
                    break;

                case InteractionType.ModalSubmit: // Modal submissions (not handled here)
                    break;

                default:
                    // This handles interactions like buttons and select menus
                    if (!interaction.customId) return; // Skip if there's no customId

                    const [name, ...args] = interaction.customId.split('_'); // Split customId into name and optional args
                    const file = client.interactions.get(name); // Find the corresponding interaction handler

                    if (!file) return; // Skip if no matching handler found

                    // Execute the interaction's run method with client, interaction, lang, and optional args
                    await file.run(client, interaction, ...args);
                    break;
            };
        } catch (err) {
            // Catch and log errors in a readable format
            console.error(`[Interaction] => ${err.stack || err}`);
        };
    },
};