const { ComponentType, PermissionsBitField } = require('discord.js');

module.exports = {
    // The name of the interaction, must match the customId of the Select Menu or Button
    name: 'example', // This should match the 'customId' of the SelectMenu component in the message

    // Required permissions for the interaction to be executed (optional, but useful for checking)
    permission: PermissionsBitField.Flags.SendMessages,

    // The type of component we're handling (StringSelect means a select menu with string options)
    type: ComponentType.StringSelect,

    /**
     * The run function is executed when the interaction is received.
     * @param {Client} client - The Discord client
     * @param {Interaction} interaction - The interaction object (in this case, a StringSelectMenuInteraction)
     */
    async run(client, interaction) {
        try {
            // Example of a reply to the interaction
            return await interaction.reply({ content: 'Example response', ephemeral: true });
        } catch (error) {
            console.error('Error handling interaction:', error);
            // Handle errors gracefully
            if (interaction.replied || interaction.deferred) {
                return await interaction.followUp({ content: 'There was an error handling your interaction.', ephemeral: true });
            } else {
                return await interaction.reply({ content: 'There was an error handling your interaction.', ephemeral: true });
            };
        };
    },
};