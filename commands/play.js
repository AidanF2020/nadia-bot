const { SlashCommandBuilder } = require('@discordjs/builders');
const ytdl = require('ytdl-core');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription('Play a song from the name or a YouTube link.')
		.addStringOption(option => option.setName('song').setDescription('The song to play.')),
	async execute(interaction) {
		const guild = interaction.guild_id;
		const member = guild.members.cache.get(interaction.member.user.id);
		const voiceChannel = member.voice.channel;

		if (!voiceChannel) return interaction.reply('You aren\'t in a voice channel!');

		const connection = await voiceChannel.join();

		// Extract the video URL from the command
		const url = interaction.options.getSting('song');
		if (url) return interaction.reply(`The requested song is: \`${url}\``);
	},
};