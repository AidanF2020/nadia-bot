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

		let downloadInfo = await ytdl.getInfo(youtubeLink);
		await lib.discord.voice['@0.0.1'].tracks.play({
		  channel_id: `${VOICE_CHANNEL}`,
		  guild_id: `${context.params.event.guild_id}`,
		  download_info: downloadInfo
		});
		return lib.discord.channels['@0.3.0'].messages.create({
		  channel_id: `${context.params.event.channel_id}`,
		  content: `Now playing **${downloadInfo.videoDetails.title}**`,
		});
	},
};