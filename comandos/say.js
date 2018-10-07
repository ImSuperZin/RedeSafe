const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

      if(!message.member.hasPermission("ADMINISTRATOR")) return;
      const embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setAuthor('SAY', "https://discordapp.com/assets/37721a3154785c9557e97172b60c6ce7.svg")
      .setFooter(`Por: ${message.author.username}`, message.author.avatarURL)
      .setDescription("" + args.join(" "));
      message.channel.send("SAY").then(a=>a.delete(1));
      message.channel.send({embed})
      message.delete().catch();
      message.channel.send(sayMessage);
      

}

module.exports.help = {
  name: "say"
}
