exports.run = (client, message, args) => {
  let texto = args.slice(0).join(' ')

  if (texto.length > 15) return message.channel.send('Escreva somente 15 caracteres.')
  message.channel.send({
    'embed': {
      'title': ` `,
      'description': `Minecraft Conquista`,
      'url': '',
      'color': 3553598,
      'timestamp': new Date(),
      'footer': {
        'icon_url': message.author.displayAvatarURL,
        'text': message.author.username
      },
      'image': {
        'url': `https://www.minecraftskinstealer.com/achievement/a.php?i=38&h=${encodeURIComponent('Conquista desbloqueada!')}&t=${encodeURIComponent(texto)}`
      }
    }
  })
}
