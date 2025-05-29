const { ComponentType, PermissionsBitField } = require('discord.js');

module.exports = {
    // The name of the interaction (must match the customId of the button component)
    name: 'example', // This should match the 'customId' of the button in the message

    // Required permissions (optional, can be used to check user permissions)
    permission: PermissionsBitField.Flags.SendMessages,

    // The type of component we are handling (Button in this case)
    type: ComponentType.Button,

    /**
     * This function is executed when the button interaction is received.
     * @param {Client} client - The Discord bot client
     * @param {Interaction} interaction - The button interaction
     */
    async run(client, interaction) {
        try {
            // Respond to the interaction with a message
            return await interaction.reply({ content: 'Example button clicked!', ephemeral: true });
        } catch (error) {
            console.error('Error handling button interaction:', error);
            // Handle errors gracefully
            if (interaction.replied || interaction.deferred) {
                return await interaction.followUp({ content: 'There was an error handling your button click.', ephemeral: true });
            } else {
                return await interaction.reply({ content: 'There was an error handling your button click.', ephemeral: true });
            };
        };
    },
};