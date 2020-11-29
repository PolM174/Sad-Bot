module.exports = {
    ayuda: `Muestra imágenes +18.`,
    ejemplo: "nsfw4k",
    permiso : "Ninguno",

    run: async (client, message, args) => {

      const Discord = require("discord.js");
      const sqlite3 = require("better-sqlite3");
    const db = new sqlite3('./sadbot.sqlite3');

      const embednonsfw = new Discord.MessageEmbed() 
      embednonsfw.setColor("RED")
      embednonsfw.setDescription("🚫 || Solo en canales NSFW.")      
    
      
if(!message.channel.nsfw) return message.channel.send(embednonsfw);

    
var color = db.prepare(`SELECT * FROM personalizar_comandos WHERE idserver = ${message.guild.id}`).get();
if(!color || color.colorembed == null) {
  var cembed = "#7289D9";
}else{
  var cembed = color.colorembed;
};

let x = Math.floor(Math.random() * (1460 - 1000) + 1000);
  let b = (`https://cdn.boob.bot/4k/4k${x}.jpg`);
    const embed = new Discord.MessageEmbed()
 .setColor(cembed)
.setImage(b)
message.channel.send(embed)
}};