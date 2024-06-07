const { EmbedBuilder } = require('discord.js');
const anime = require('anime-actions');
const db = require("../mongodb");
module.exports = {
  name: 'kill',
  description: 'Uh...Oh',
  async execute(message, args) {
    const sender = message.author;
    const targetUser = message.mentions.users.first();
    const kissGif = await anime.kill();

    const embed = new EmbedBuilder()
      .setColor('#ff3399')
      .setDescription(`${sender} kills ${targetUser || 'dead'}! 💀`)
      .setImage(killGif);

    message.reply({ embeds: [embed] });
  },
};