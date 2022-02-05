const { SlashCommandBuilder } = require('@discordjs/builders');
const ytdl = require('ytdl-core');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription('Get the avatar URL of the selected user, or your own avatar.')
		.addStringOption(option => option.setName('song').setDescription('The song to play show')),
	async execute(interaction) {
		const guild = interaction.guild_id;
		const member = guild.members.cache.get(interaction.member.user.id);
		const voiceChannel = member.voice.channel;

		if (!voiceChannel) return interaction.reply('You aren\'t in a voice channel!');

		const connection = await voiceChannel.join();
		const player = connection.play(ytdl(interaction.getString('song')));
		// eslint-disable-next-line no-unused-vars
		player.on('end', end => voiceChannel.leave);
	},
};