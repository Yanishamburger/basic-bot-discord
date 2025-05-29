const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    // The command's metadata
    data: new SlashCommandBuilder()
        .setName('ping') // The name of the slash command (triggered with /ping)
        .setDescription('Check the bot\'s latency.'),

    /**
     * The function that runs when the command is used.
     * @param {Client} client - The Discord bot client
     * @param {CommandInteraction} interaction - The interaction object
     */
    async run(client, interaction) {
        // Calculate the latency
        const apiLatency = client.ws.ping;
        const botLatency = Date.now() - interaction.createdTimestamp;

        // Respond to the user with a simple message
        return await interaction.reply(`🏓 Pong ! API Latency: ${apiLatency} ms, Bot Latency: ${botLatency} ms`);
    },
};
