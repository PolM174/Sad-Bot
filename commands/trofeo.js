module.exports = {
    ayuda: `Consigues un trofeo.`,
    ejemplo: "trofeo Sad",
    permiso : "Ninguno",

    run: async (client, message, args) => {
  const Discord = require("discord.js")
  const Weez = require('weez')
  const weez = new Weez.WeezAPI((process.env.API));
  
const sqlite3 = require("better-sqlite3");
const db = new sqlite3('./sadbot.sqlite3');
  
const embednotexto = new Discord.MessageEmbed() 
embednotexto.setColor("ORANGE")
embednotexto.setDescription("⚠️ || Tienes que añadir un texto.")

let texto = args.join(" ");
if (!texto) return message.channel.send(embednotexto);

let img = await weez.logro(texto);

var color = db.prepare(`SELECT * FROM personalizar_comandos WHERE idserver = ${message.guild.id}`).get();
if(!color || color.colorembed == null) {
var cembed = "#7289D9";
}else{
var cembed = color.colorembed;
};

const embed = new Discord.MessageEmbed() 
.setColor(cembed)
.attachFiles([{
attachment: img,
name: "trofeo.png"
}])
.setImage("attachment://trofeo.png")

return message.channel.send(embed);
}};