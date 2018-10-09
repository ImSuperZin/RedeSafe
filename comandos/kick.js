module.exports.run = async(client, message, args) =>{
  message.delete();  
  if(!message.member.roles.some(r=>["🌐┇ Staffers"].includes(r.name)) )
      return message.reply("Você precisa do cargo `🌐┇ Staffers` para poder kickar alguém.");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Mencione um membro para poder kickar.");
    if(!member.kickable) 
      return message.reply("Eu não posso kickar quem tem o mesmo cargo que eu.");
    
    // slice(1) removes the first part, which here should be the user mention!
    let reason = args.slice(1).join(' ');
    if(!reason)
      return message.reply("Coloque o motivo do expulsamento.");
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Desculpe, ${message.author} eu não consegui mutar por causa de: ${error}`));
    message.channel.send(`s${member.user.tag} foi expulso por: ${message.author.tag} |  motivo: ${reason}`);

  }
