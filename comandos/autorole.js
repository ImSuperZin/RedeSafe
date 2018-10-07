client.on('guildMemberAdd', member => {
const role = message.guild.roles.find(r => r.name === "{👨🏻‍🎓} Membros");
member.addRole(role);
});
