module.exports = {
    ayuda: `Expulsa del servidor al usuario mencionado. `,
    ejemplo: "kick @User#0001",
    permiso : "KICK_MEMBERS",

    run: async (client, message, args) => {
      
  const Discord = require("discord.js")
  

  const embednoper = new Discord.MessageEmbed() 
  embednoper.setColor("RED")
  embednoper.setDescription("🚫 || No tienes el permiso ``KICK_MEMBERS`` para utilizar este comando.")

  const embednoperbot = new Discord.MessageEmbed() 
  embednoperbot.setColor("RED")
  embednoperbot.setDescription("🚫 || No tengo el permiso ``KICK_MEMBERS`` para utilizar este comando.")

  const embednomotivo = new Discord.MessageEmbed() 
  embednomotivo.setColor("ORANGE")
  embednomotivo.setDescription("⚠️ || Introduzca el motivo de baneo del usuario.")

  const embednouser = new Discord.MessageEmbed() 
  embednouser.setColor("ORANGE")
  embednouser.setDescription("⚠️ || Tiene que mencionar el usuario que desea banear.")


   if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(embednoper);  
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(embednoperbot);  
    let user = message.mentions.users.first();
    if(!user) return message.channel.send(embednouser);
    let motivo = args.slice(1).join(" ");
    if(!motivo) return message.channel.send(embednomotivo);
  
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.kick({  
          reason: motivo,
        }).then(() => {
  
          const embedkick = new Discord.MessageEmbed() 
          embedkick.setColor("GREEN")
          embedkick.setDescription(`<:tick:613820461675053066> || El usuario ${user} ha sido expulsado.`)
  
          message.channel.send(embedkick);
        }).catch(err => {
          const embedgerarquia = new Discord.MessageEmbed() 
          embedgerarquia.setColor("ORANGE")
          embedgerarquia.setDescription("⚠️ || No he podido expulsar a ese usuario, compruebe la gerarquia del bot.")
          message.channel.send(embedgerarquia);
        });
      };
    };
}};