const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('beep')
		.setDescription('Beeps!'),
	async execute(interaction) {
		return interaction.reply('Boops!');
	},
};