const Discord = require("discord.js");

module.exports.run = async (client) =>{


    const sleep = time => new Promise(resolve => {
        setTimeout(resolve, time)
    })
    var i;
    console.log("")
    console.log("Loop no status do BOT ativo!");
    console.log(" ");

    for (i=0; i<10;){
        
        client.user.setPresence({ game: { name: `Loja: redesafe.com`, url: "https://www.twitch.tv/Panda", type: 1} });
        await sleep(60000)
        client.user.setPresence({ game: { name: "Ip: Jogar.redesafe.com", type: 0 } });
        await sleep(60000)
        client.user.setPresence({ game: { name: `Twitter: @RedeSafe`, type: 3} });
        await sleep(60000)
    }
   

}
