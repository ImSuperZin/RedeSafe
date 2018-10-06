const Discord = require('discord.js');
const client = new Discord.Client();
const ownerID = `272419543601643520`;
const prefix = `-`;

client.login(process.env.BOT_TOKEN);

client.on("ready", () => {
  console.log("Ativado.");
   let gameloop = require('./comando_dono/loop.js'); // Ativaidae de status!!!!!!!!!!
    gameloop.run(client);
})


    console.log('O Bot foi iniciado com sucesso.'.green);
    console.log(`O meu prefixo Ã© ${prefix}`);

client.on('message', message => {
    if(message.content == '-criador'){
      var embed = new Discord.RichEmbed()
      .setDescription(`**${message.author}**, Quer um bot, twitter para pedir um: \n [Clique Aqui](https://twitter.com/Super_Inscritos).`)
      message.channel.send(embed)
    }
  });
client.on('message', message => {
    if(message.content == 'RedeSafe'){
      var embed = new Discord.RichEmbed()
      .setDescription(`**${message.author}**, melhor servidor de factions , quer entrar?  \`jogar.redesafe.com\`.`)
      message.channel.send(embed)
    }
  });

client.on('message', message => {

    var autor = message.author;
    var msg = message.content.toUpperCase();
    var cont = message.content.slice(prefix.lenght).split('');

    if (!message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    try {
        let commandFile = require(`./comandos/${command}.js`);
        commandFile.run(client, message, args);
    } catch (err) {
        console.error(err);
    }
    message.delete();

});


