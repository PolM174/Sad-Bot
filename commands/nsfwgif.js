const Discord = require("discord.js");
const sqlite3 = require("better-sqlite3");
  const db = new sqlite3('./sadbot.sqlite3');

module.exports = {
    ayuda: `Muestra gif's +18.`,
    ejemplo: "nsfwgif",
    permiso : "Ninguno",

    run: async (client, message, args) => {
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
let x = Math.floor(Math.random() * (1999 - 1699) + 1699);
  let b =(`https://cdn.boob.bot/Gifs/${x}.gif`);
      const embed = new Discord.MessageEmbed()
 .setColor(cembed)
.setImage(b)
message.channel.send(embed)
}};