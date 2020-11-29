module.exports = {
    ayuda: "Te dice todos los comandos del bot.",
    ejemplo: "ayuda",
    uso : "ayuda pag-(NumDePagina)",
    permiso : "Ninguno",

    run: async (client, message, args) => {

  const Discord = require("discord.js")    
  const sqlite3 = require("better-sqlite3");
  const db = new sqlite3('./sadbot.sqlite3');
  

let estadoeconomia = db.prepare(`SELECT economia FROM activar_desactivar WHERE idserver = ${message.guild.id}`).get();
let estadoautomod = db.prepare(`SELECT automod FROM activar_desactivar WHERE idserver = ${message.guild.id}`).get();
let estadoniveles = db.prepare(`SELECT niveles FROM activar_desactivar WHERE idserver = ${message.guild.id}`).get();

if(!estadoeconomia || estadoeconomia.economia == null || estadoeconomia.economia == 0){
  var modoecon = "<:134:710904299974033459>";
}else{
  var modoecon = "<:123:710904299542020188>";
};

if(!estadoautomod || estadoautomod.automod == null || estadoautomod.automod == 0){
  var modomod = "<:134:710904299974033459>";
}else{
  var modomod = "<:123:710904299542020188>";
};

if(!estadoniveles || estadoniveles.niveles == null || estadoniveles.niveles == 0){
  var modoniv = "<:134:710904299974033459>";
}else{
  var modoniv = "<:123:710904299542020188>";
};

var color = db.prepare(`SELECT * FROM personalizar_comandos WHERE idserver = ${message.guild.id}`).get();
if(!color || color.colorembed == null) {
   var cembed = "#7289D9";
}else{
   var cembed = color.colorembed;
};

let numpag = args[0];
if(!numpag) {
let embed0 = new Discord.MessageEmbed()
.setColor(cembed)
.setTitle("**Sad Bot**")
.setDescription("**Escribe** ``??ayuda pag-(número)`` **para ir a otra página. ** \n \n **Página 1 | "+modomod+" Moderación** \n Categoría con comandos para vetar, silenciar, auto-moderación, etc. \n **Página 2 | Diversión** \n Categoría que contiene muchos juegos divertidos y entretenidos. \n **Página 3 | Entradas - Salidas** \n Categoría para configurar el sistema de entradas y salidas. \n **Página 4 | Utilidad** \n Categoría que puede resultar de utilidad en configuración u otros eventos. \n **Página 5 | Imagenes** \n Categoría con comandos con edición de imágenes divertidos, art, memes etc. \n **Página 6 | "+modoniv+" Sistema de niveles** \n Categoría con comandos para añadir al servidor un sistema de niveles personalizable. \n **Página 7 | Videojuegos** \n Categoría útil para buscar la IP de un servidor, nombres de jugadores etc. \n **Página 8 | "+modoecon+"Economía** \n Categoría que contiene una gran variedad de comandos para impulsar la economía. \n **Página 9 | NSFW** \n Categoría con contenido explícito, solo podrás ejecutar los comandos en una sala NSFW.")
//.addField("**Página 1 | "+modomod+" Moderación**", "Categoría con comandos para vetar, silenciar, auto-moderación, etc.")
//.addField("**Página 2 | Diversión**", "Categoría que contiene muchos juegos divertidos y entretenidos.")
//.addField("**Página 3 | Entradas - Salidas**", "Categoría para configurar el sistema de entradas y salidas.")
//.addField("**Página 4 | Utilidad**", "Categoría que puede resultar de utilidad en configuración u otros eventos.")
//.addField("**Página 5 | Imagenes**", "Categoría con comandos con edición de imágenes divertidos, art, memes etc.")
//.addField("**Página 6 | "+modoniv+" Sistema de niveles**", "Categoría con comandos para añadir al servidor un sistema de niveles personalizable.")
//.addField("**Página 7 | Videojuegos**", "Categoría útil para buscar la IP de un servidor, nombres de jugadores etc.")
//.addField("**Página 8 | "+modoecon+"Economía** ", "Categoría que contiene una gran variedad de comandos para impulsar la economía.")
//.addField("**Página 9 | NSFW**", "Categoría con contenido explícito, solo podrás ejecutar los comandos en una sala NSFW.")
.addField("**Utiliza ``??info-comando <comando>`` para resolver tus dudas.**", "**Preguntas? ** \n Entra [aquí](https://sad-bot1.glitch.me/) si necesitas ayuda.",  true)

message.channel.send(embed0);
}else if(numpag == "pag-"+1) {
let embed1 = new Discord.MessageEmbed()
.setColor(cembed)
.setTitle("**__Moderación__**")

//.setDescription("``` ban \n kick \n mute \n unmute \n warn \n warn-list \n elimiar-warn \n tempban \n clear \n auto-modOn/Off \n auto-mod-log \n lista-blanca \n eliminar-lista-blanca```  ",true)

.setDescription("**:hammer: |    Apartado de Moderación** \n `` ban | kick \n mute | unmute \n warn | warn-list \n eliminar-warn | clear`` \n \n **:hammer_pick: |    Apartado de Automoderación** "+modomod+" \n `` auto-mod | auto-mod-log \n lista-blanca | eliminar-lista-blanca``" )
//  .setTitle("**_Economia ("+econ+")_**")
//    .setDescription("``` economia On/Off \n dinero \n trabajar \n crime \n daily \n dar \n tienda \n añadir-tienda \n eliminar-tienda \n agregar-dinero \n eliminar-dinero \n comprar \n ruleta \n top \n reiniciar-economia``` ",true) 
message.channel.send(embed1);
}else if(numpag == "pag-"+2) {
let embed2 = new Discord.MessageEmbed()
.setColor(cembed)
.setTitle("**__Diversión__**")

 // .setDescription("``` 8ball \n moneda \n love \n meme \n di \n hack \n ruleta-rusa \n buscaminas \n akinator \n pacman \n top-pacman \n ahorcado \n top-ahorcado```  ", true)
.setDescription("**:game_die: |    Apartado de Juegos ** \n `` 8ball | ahorcado \n akinator | buscaminas \n pacman | ruleta-rusa`` \n \n **<a:diversion:618554146269823007> |    Apartado de Diversión ** \n `` love | meme \n di | hack `` \n \n **:top: |    Apartado de Top ** \n `` top-pacman | top-ahorcado`` ")

 message.channel.send(embed2);
}else if(numpag == "pag-"+3) {
let embed3 = new Discord.MessageEmbed()
.setColor(cembed)
.setTitle("**__Entrada - Salida__**")
.setDescription("**:chart_with_upwards_trend: | Apartado de Entrada** \n `` entrada1 | entrada2 \n entrada3 | entrada4 \n personalizar-entrada1 \n personalizar-entrada3 \n personalizar-entrada4`` \n \n **:chart_with_downwards_trend: |    Apartado de Salida** \n \n`` salida1 | salida2 \n salida3 | salida4 \n personalizar-salida1 \n personalizar-salida3 \n personalizar-salida4``")

//.setDescription("**:chart_with_upwards_trend: | Apartado de Entrada** \n ``entrada1   entrada2 \n entrada3   entrada4 \n personalizar-entrada3   personalizar-entrada4`` \n \n **:chart_with_downwards_trend: |    Apartado de Salida** \n ``salida1   salida2 \n salida3   salida4 \n personalizar-salida3   personalizar-salida4``")
 // .setDescription("``` entrada1 \n entrada2 \n entrada3 \n entrada4 \n salida1 \n salida2 \n salida3 \n salida4 \n personalizar-entrada3 personalizar-salida3 \n personalizar-entrada4 \n personalizar-salida4```  ",true) 
message.channel.send(embed3);
}else if(numpag == "pag-"+4) {
let embed4 = new Discord.MessageEmbed()
.setColor(cembed)
.setTitle("**__Utilidad__**")
.setDescription("**<a:utilidad:618786370382594048> | Apartado de Utilidad** \n `` afk | ascii \n avatar | bot-info \n canales | canal-log \n canal-sugerencias | color-embed \n config-nombre | contestar-sugerencia \n cowsay emoji \n encuesta | info \n info-comando | invitacion \n jumbo | prefix \n reportar-bug-bot | server-info \n sugerir | sugerir-bot \n traducir``")


 // .setDescription("``` invitación \n avatar \n prefix \n afk \n log \n encuesta \n cowsay \n ascii \n emoji \n reportarbug \n bot-info \n serverinfo \n info \n @Sad Bot prefix \n canales \n nombre On/Off \n config-nombre \n sugerencia \n jumbo \n canal-sugerencias \n sugerir \n contestar-sugerencia \n traducir \n sorteo \n editar-sorteo \n eliminar-sorteo \n reroll``` ",true)
message.channel.send(embed4);
}else if(numpag == "pag-"+5) {
let embed5 = new Discord.MessageEmbed()
.setColor(cembed)
.setTitle("**__Imágenes__**")
.setDescription("**:tongue: | Apartado de Interacción** \n `` pegar | besar \n abrazar | llorar`` \n \n **:balloon: | Apartado de Diversión** \n `` trofeo | susto \n wallpapers``  \n \n **:horse: | Apartado de Animales** \n `` perro | gato``")
 // .setDescription("``` pegar \n matar \n llorar \n trump \n basura \n drake \n wallpapers \n arte \n raimbow \n coche \n besar \n abrazar \n logro \n eyes \n gru \n trofeo \n cerebro \n triggered \n sadbot_logo \n perro \n animales \n conejo \n tortuga``` ",true) 
message.channel.send(embed5);
}else if(numpag == "pag-"+6) {
let embed5 = new Discord.MessageEmbed()
.setColor(cembed)
.setTitle("**__Niveles__**")  
  .setDescription("**<a:niveles:618791576805572608> | Apartado de Niveles** "+modoniv+" \n `` niveles | nivel \n top-niveles | añadir-recompensa \n recompensas | set-nivel \n eliminar-recompensa | personalizar-niveles``",true)
message.channel.send(embed5);
}else if(numpag == "pag-"+7) {
let embed5 = new Discord.MessageEmbed()
.setColor(cembed)
.setTitle("**__Videojuegos__**")
  .setDescription("**:video_game: | Apartado de Videojuegos** \n `` minecraft-info \n fortnite-stats`` ",true)
message.channel.send(embed5);
}else if(numpag == "pag-"+8) {
let embed5 = new Discord.MessageEmbed()
.setColor(cembed)
.setTitle("**__Economía__**")
.setDescription("**<a:economia:618554146450047009> | Apartado de Economía** "+modoecon+" \n `` economia | dinero \n trabajar | crime | daily \n dar | reclamar-daily | tienda \n añadir-tienda | eliminar-tienda | agregar-dinero \n eliminar-dinero | comprar | ruleta \n top | reiniciar-economia``")
  //.setDescription("``` economia On/Off \n dinero \n trabajar \n crime \n daily \n dar \n tienda \n añadir-tienda \n eliminar-tienda \n agregar-dinero \n eliminar-dinero \n comprar \n ruleta \n top \n reiniciar-economia ``` ",true)
message.channel.send(embed5);
}else if(numpag == "pag-"+9) {
let embed5 = new Discord.MessageEmbed()
.setColor(cembed)
.setTitle("**__NSFW__**")
.setDescription("**:underage: | Apartado de NSFW** \n `` nsfwporno | nsfwgif \n nsfw4k``",true)
message.channel.send(embed5);
}else{
let embed0 = new Discord.MessageEmbed()
.setColor(cembed)
.setTitle("**Sad Bot**")
.setDescription("**Escribe** ``??ayuda pag-(número)`` **para ir a otra página. ** \n ")
.addField("**Página 1 | Moderación**", "Categoría con comandos para vetar, silenciar, auto-moderación, etc.")
.addField("**Página 2 | Diversión**", "Categoría que contiene muchos juegos divertidos y entretenidos.")
.addField("**Página 3 | Entradas - Salidas**", "Categoría para configurar el sistema de entradas y salidas.")
.addField("**Página 4 | Utilidad**", "Categoría que puede resultar de utilidad en configuración u otros eventos.")
.addField("**Página 5 | Imagenes**", "Categoría con comandos con edición de imágenes divertidos, art, memes etc.")
.addField("**Página 6 | Sistema de niveles**", "Categoría con comandos para añadir al servidor un sistema de niveles personalizable.")
.addField("**Página 7 | Videojuegos**", "Categoría útil para buscar la IP de un servidor, nombres de jugadores etc.")
.addField("**Página 8 | Economía**", "Categoría que contiene una gran variedad de comandos para impulsar la economía.")
.addField("**Página 9 | NSFW**", "Categoría con contenido explícito, solo podrás ejecutar los comandos en una sala NSFW.")
.addField("**Utiliza ``??info-comando <comando>`` para resolver tus dudas.**", "**Preguntas? ** \n Entra [aquí](https://sad-bot1.glitch.me/) si necesitas ayuda.",  true)

message.channel.send(embed0);
};

















/*
    let embed = new Discord.RichEmbed()
     .setColor("#7289D9")
  	 .setAuthor('Sad Bot',"https://cdn.discordapp.com/avatars/512185944451973123/26d758c5b30472a58a17a371138b8af8.png")
	   .setDescription(`**Hola ${message.author}** este es el comando de ayuda, aqui podras ver todos los comandos disponibles.`)
     .addField("<a:economia:618554146450047009> **_Economia ("+econ+")_** ","``` economia On/Off \n dinero \n trabajar \n crime \n daily \n dar \n tienda \n añadir-tienda \n eliminar-tienda \n agregar-dinero \n eliminar-dinero \n comprar \n ruleta \n top \n reiniciar-economia``` ",true) 
     .addField(" <a:diversion:618554146269823007> **_Diversión_**  \n  ","``` 8ball \n moneda \n love \n meme \n di \n hack \n ruleta-rusa \n buscaminas \n akinator \n pacman \n top-pacman \n ahorcado \n top-ahorcado```  ", true)
     .addField("<a:entradassalidas:618554148434214940> **_Entradas-Salidas_**  \n  ","``` entrada1 \n entrada2 \n entrada3 \n entrada4 \n salida1 \n salida2 \n salida3 \n salida4 \n personalizar-entrada3 personalizar-salida3 \n personalizar-entrada4 \n personalizar-salida4```  ",true) 
 .addField(" <a:utilidad:618786370382594048> **_Utilidad_** ","``` invitación \n avatar \n prefix \n afk \n log \n encuesta \n cowsay \n ascii \n emoji \n reportarbug \n bot-info \n serverinfo \n info \n @Sad Bot prefix \n canales \n nombre On/Off \n config-nombre \n sugerencia \n jumbo \n canal-sugerencias \n sugerir \n contestar-sugerencia \n traducir``` ",true)
 .addField("<a:imagenes:618819673139576864> **_Imagenes_** ","``` pegar \n matar \n llorar \n trump \n basura \n drake \n wallpapers \n arte \n raimbow \n coche \n besar \n abrazar \n logro \n eyes \n gru \n trofeo \n cerebro \n triggered \n sadbot_logo``` ",true) 
.addField("<a:moderacion:618559185931730992> **_Moderación_**  \n  ","``` ban \n kick \n mute \n unmute \n warn \n warn-list \n elimiar-warn \n tempban \n clear```  ",true)
 .addField("<a:niveles:618791576805572608> **_Niveles ("+niv+")_** "," ``` niveles On/Off \n nivel \n top-niveles \n añadir-recompensa \n recompensas \n set-nivel \n eliminar-recompensa \n personalizar-niveles```  ",true)

 .addField("<a:HyperTada:618446016106201088> **_Sorteos_** ","``` sorteo \n editar-sorteo \n eliminar-sorteo \n reroll``` ",true)
 .addField("<a:infojuegos:618554148819828737> **_Videojuegos_** ","``` minecraft-info \n fortnite-stats``` ",true)
 .addField("<a:automoderacion:618754838754361344> **_Automoderación ("+automod+")_** ","``` auto-modOn/Off \n auto-mod-log \n lista-blanca \n eliminar-lista-blanca``` ",true) 

 .addField("<a:animales:618791142795771914> **_Animales_** ","``` perro \n animales \n conejo \n tortuga``` ",true)

 .addField("<a:nsfw:618554147503079446> **_Nsfw_** "," ``` nsfwporno \n nsfwgif \n nsfw4k``` ",true)
    
    
  // .setDescription("<a:economia:618554146450047009> **_Economia ("+econ+")_** \n ```economia On/Off  dinero  trabajar  crime  daily  dar  tienda  añadir-tienda  eliminar-tienda  agregar  comprar  ruleta  top reiniciar-economia``` \n <a:niveles:618791576805572608> **_Niveles ("+niv+")_** \n ```niveles On/Off   nivel  top-niveles  añadir-recompensas  recompensas  set-nivel  eliminar-recompensa  canal-niveles personalizar-niveles``` \n <a:diversion:618554146269823007>  **_Diversión_** \n ```8ball  moneda  love  meme  di  hack  ruleta-rusa  buscaminas  akinator  pacman  top-pacman  ahorcado  top-ahorcado``` \n <a:utilidad:618786370382594048> **_Utilidad_** ```invitación  avatar  prefix  afk  log  encuesta  cowsay  ascii  emoji  reportarbug  bot-info  serverinfo  info  @Sad Bot prefix canales nombre On/Off  config-nombre  sugerencia  jumbo``` <a:HyperTada:618446016106201088> **_Sorteos_** ```sorteo  editar-sorteo  eliminar-sorteo  reroll```<a:infojuegos:618554148819828737> **_Videojuegos_** ```minecraft-info  fortnite-stats``` <a:automoderacion:618754838754361344> **_Automoderación ("+automod+")_** ```auto-modOn/Off  auto-mod-log  lista-blanca  eliminar-lista-blanca``` <a:imagenes:618819673139576864> **_Imagenes_** ```pegar  matar  llorar  trump  basura  drake wallpapers arte  raimbow  coche  besar  abrazar  logro  eyes  gru  trofeo  cerebro  triggered sadbot_logo``` <a:animales:618791142795771914> **_Animales_** ```perro  animales  conejo  tortuga``` <a:entradassalidas:618554148434214940> **_Entradas-Salidas_** \n ```entrada1  entrada2  entrada3  entrada4  salida1  salida2  salida3  salida4  personalizar-entrada3 personalizar-salida3  personalizar-entrada4  personalizar-salida4``` \n <a:moderacion:618559185931730992> **_Moderación_** \n ```ban  kick  mute  unmute  warn  warn-list  elimiar-warn  tempban  clear``` \n <a:nsfw:618554147503079446> **_Nsfw_** \n```nsfwporno  nsfwgif  nsfw4k```")
    .addField("**Utiliza el comando **`"+prefix+"info-Comando ElComando`** para obtener informacion de algun comando.** ","**Recuerda que puedes usar la web oficial del bot para personalizar algunos comandos. Click [aquí](https://sad-bot1.glitch.me/) para ir a la web.** \n **Recuerda que puedes unirte al servidor oficial del bot. Click [aquí](https://discord.gg/pt2mAmZ) para entrar.**")
   // .addField("","**Recuerda que puedes unirte al servidor oficial del bot. Click [aquí](https://discord.gg/pt2mAmZ) para entrar.**")

    message.channel.send(embed)



/*
    let embed = new Discord.RichEmbed()
  .setColor("#7289D9")
 //  .addField(":musical_note: Musica (Beta)", " "+ prefix + "`` ayuda musica `` \n jola ",true)
  .addField("<a:imagenes:618819673139576864> Imagenes", "``" + nprefix +"ayuda imagenes``",true)
  .addField("<a:diversion:618554146269823007> Diversión", "``" + nprefix + "ayuda diversion``",true)
  .addField("<a:moderacion:618559185931730992> Moderación", "``" + nprefix + "ayuda moderacion``",true)
  .addField("<a:animales:618791142795771914>  Animales", "``" + nprefix + "ayuda animales``",true)
  .addField("<a:utilidad:618786370382594048> Utilidad", "``" + nprefix + "ayuda utilidad``",true)
  .addField("<a:entradassalidas:618554148434214940> Entradas/Salidas","``" + nprefix + "ayuda entradas/salidas``  ",true)
  .addField("<a:infojuegos:618554148819828737> Información videojuegos", "``" + nprefix +"ayuda info-juegos``",true)
  .addField("<a:HyperTada:618446016106201088> Sorteos", "``" + nprefix +"ayuda sorteos``",true)
  .addField("<a:nsfw:618554147503079446> NSFW", "``" + nprefix + "ayuda nsfw``",true)
  .addField("<a:economia:618554146450047009> Economia `(" + econ + ")`", "``" + nprefix + "ayuda economia`` ",true)
  .addField("<a:automoderacion:618754838754361344>  Automoderación `(" + automod +")`", "`" + nprefix + "ayuda auto-moderacion `",true)
  .addField("<a:niveles:618791576805572608> Niveles`(" + niv+")`", "`" + nprefix + "ayuda niveles`",true)

    message.channel.send(embed)
    } if(ayuda === "utilidad") {  
  let embed = new Discord.RichEmbed()
    .setTitle("<a:utilidad:618786370382594048> Utilidad") 
    .setColor("#7289D9")
    .addField("Comandos", "Comandos de utilidad disponibles")
    .addField(nprefix + "invitacion ","Crea una invitacion permanente del grupo")
    .addField(nprefix +"avatar  @persona ","Te muestra el avatar de esa persona")
    .addField(nprefix +"prefix (nuevo prefix)","Canvias el prefix del bot")
    .addField(nprefix +"afk","Avisas a las personas que te notifican , que estas acupado")
    .addField(nprefix +"log #canal","Te avisa de todo lo que pasa en el servidor")
    .addField(nprefix +"encuesta texto, opcion1, opcion2","Te avisa de todo lo que pasa en el servidor")
    .addField(nprefix +"cowsay","Digamos que tu no dices el mensaje...")
    .addField(nprefix +"ascii ","Digamos que tu no dices el mensaje...")
    .addField(nprefix +"emoji ","Te enseña todos los emojis del servidor")
    .addField(nprefix +"reportarbug","Envias un bug que has encontrado del bot al creador")
    .addField(nprefix +"bot-info","Te dice info del bot")
    .addField(nprefix +"serverinfo","Te dice informacion del servidor")
    .addField(nprefix +"info @user","Te dice informacion del usuario")
    .addField("<@512185944451973123> prefix","Te dice el prefix del bot")
    .addField(nprefix +"canales","Te dice todos los canales del servidor")
    .addField(nprefix +"nombre on/off","Para activar o desactivar el modo nombre")
    .addField(nprefix +"config-nombre 『,⚡,』","Puedes poner el emoji y signos que quieres, estos son los base ")
    .addField(nprefix +"sugerencia","Envias una sugerencia para el bot")
    .addField(nprefix +"jumbo {emoji}","Envía una imagen del emoticono que seleccionaste en el comando.")

    .addField("No disponible aun", "----------------")
      message.channel.send({embed});
 /*  } if(ayuda === "musica") {  
   let embed = new Discord.RichEmbed()
    .setTitle(":musical_note:  Musica") 
    .setColor("#7289D9")
    .addField("Commandos", "Commandos de musica disponibles")
    .addField(nprefix +"play nombre de cancion o link de Youtube","Te reproduce una cancion o video")
    .addField(nprefix +"salir","El bot abandona la sala de audio")
    .addField("No disponible aun", "----------------")
      message.channel.send({embed}); */   /*
      } if(ayuda === "animales") {  
          let embed = new Discord.RichEmbed()
    .setTitle(":dog:  Animales") 
    .setColor("#7289D9")
    .addField("Comandos", "Comandos de animales disponibles")
    .addField(nprefix +"perro ","Te pone una imagen o video de un perro")
    .addField(nprefix +"animales ","Te pone una imagen de animales")
    .addField(nprefix +"conejo ","Te pone una imagen o video de un conejo")
    .addField(nprefix +"tortuga ","Te pone una imagen o video de una tortuga")
    .addField("No disponible aun", "----------------")
      message.channel.send({embed});
    } if(ayuda === "info-juegos") {  
          let embed = new Discord.RichEmbed()
    .setTitle(":video_game:  Información videojuegos") 
    .setColor("#7289D9")
    .addField("Comandos", "Comandos de animales disponibles")
    .addField(nprefix +"minecraft-info <**IP del Servidor**> ","Te dice informacion de ese servidor")
    .addField(nprefix +"fortnite-stats **<ID>** **<PC/XBOX/PSN>** ","Te dice las estadisticas de la cuenta")
    .addField("No disponible aun", "----------------")
      message.channel.send({embed}); 
     } if(ayuda === "moderacion") {  
        let embed = new Discord.RichEmbed()
   .setTitle(":hammer: Moderación")
    .setColor("#7289D9")
    .addField("Comandos", "Comandos de moderacion disponibles")
    .addField(nprefix +"ban @usuario","Banea el usuario del servidor")
    .addField(nprefix +"kick @usuario", "Explusa al usuario del servidor")
    .addField(nprefix +"mute @usuario", "Silencia a un usuario en las salas.")
    .addField(nprefix +"unmute @usuario", "Desmutea al usuario")
        .addField(nprefix +"warn @usuario motivo", "Da un aviso a el usuario.")
        .addField(nprefix +"warn-list @usuario", "Ves los avisos que tiene el usuario.")
        .addField(nprefix +"eliminar-warn @usuario", "Elimina un aviso a un usuario.")

    .addField(nprefix +"tempban @usuario tiempo (en minutos) ", "Banea al usuario temporalmente")
    .addField(nprefix +"clear numero de mensajes", "Borra los mensajes del chat")
    .addField("No disponible aun", "----------------")
      message.channel.send({embed});
    } if(ayuda === "imagenes") {  
      let embed = new Discord.RichEmbed()
    .setTitle(":camera: Imagenes ") 
    .setColor("#7289D9")
    .addField("Comandos", "Comandos de imagenes disponibles")
    .addField(nprefix +"pegar @usuario","Le das un golpe a el usuario")
    .addField(nprefix +"matar @usuario",`"Matas" al usuario`)
    .addField(nprefix +"suicide ",`Te "suicidas"`)
    .addField(nprefix +"llorar",`Empiezas a llorar`)
    .addField(nprefix +"trump texto","Te dice la nueva ley de trump")
    .addField(nprefix +"basura @usuario","Te dice la nueva ley de trump")
    .addField(nprefix +"drake @usuario","Te dice cual es el mejor avatar")
    .addField(nprefix +"arte @usuario","Te dice cual es el mejor avatar")
    .addField(nprefix +"rainbow @usuario","Modifica el avatar del ususario")
    .addField(nprefix +"coche @usuario","Tipico meme")
    .addField(nprefix +"besar @usuario","Da un beso al usuario")
    .addField(nprefix +"abrazar @usuario","Da un abrazo al usuario")
    .addField(nprefix +"logro texto","Consigues un logro ")
    .addField(nprefix +"eyes texto1,texto2,texto3","Tipico meme")
    .addField(nprefix +"gru texto1,texto2,texto3","Tipico meme")
    .addField(nprefix +"trofeo texto","Consigues un logro ")
    .addField(nprefix +"cerebro A,B,C,D","Cambia las letras x el texto")
    .addField(nprefix +"triggered <@user>","No se como explicar esto xd")
    .addField(nprefix +"sadbot_logo ","Saca tu logo con un marco de SadBot ") 
    .addField("No disponible aun", "----------------")
      message.channel.send({embed});
  } if(ayuda === "diversion") {  
  let embed = new Discord.RichEmbed()
    .setTitle(":dart:  Diversion") 
    .setColor("#7289D9")
    .addField("Comandos", "Comandos de diversion disponibles")
    .addField(nprefix +"8ball","Le puedes preguntar algo y el te responde....")
    .addField(nprefix +"moneda","Cara o cruz")
    .addField(nprefix +"love  ","Mide el porcentaje de amor") 
    .addField(nprefix +"meme","Pone un meme en el chat")
    .addField(nprefix +"di texto","Haces que el bot diga algo por ti")
    .addField(nprefix +"hack @usuario",`"Hackea" la cuenta`)
    .addField(nprefix +"ruleta-rusa","Te salvaras...?")
    .addField(nprefix +"buscaminas","Cuidado con las bombas")
    .addField(nprefix +"hack @usuario",`"Hackea" la cuenta`)
    .addField(nprefix +"akinator","El genio adivinara la palabra?")
  
    .addField(nprefix +"pacman","Te comeran los fantasmas??...")
    .addField(nprefix +"top-pacman","Puedes ver quien es el mejor del pacman de todos los servers")
  
    .addField(nprefix +"ahorcado","Saves la palabra??...")
    .addField(nprefix +"top-ahorcado","Puedes ver quien es el mejor de ahorcado de todos los servers")
    .addField("No disponible aun", "----------------")
      message.channel.send({embed});
  } if(ayuda === "economia") {  
  let embed = new Discord.RichEmbed()
    .setTitle(":moneybag:  Economia") 
    .setColor("#7289D9")
    .setDescription("Para activar o desactivar la economia, ponga "+nprefix +"economia on / off" )
    .addField("Comandos", "Comandos de economia disponibles")
    .addField(nprefix +"economia on/off","Para activar o desactivar la economia")
    .addField(nprefix +"dinero","Te muestra la cantidad de dinero que tienes actualmente.")
    .addField(nprefix +"trabajar","Este comando te añade una cantidad extra de dinero.")
    .addField(nprefix +"crime","Puedes ganar o perder dinero....")
    .addField(nprefix +"daily","Da reputacion al bot para ganar dinero")
    .addField(nprefix +"dar","Puedes dar tu dinero a la gente")
    .addField(nprefix +"tienda","Para mirar los roles disponibles en la tienda")
    .addField(nprefix +"añadir-tienda @rol precio del rol","Para añadir un rol a la tienda")
    .addField(nprefix +"eliminar-tienda @rol","Para eliminar un rol de la tienda")
    .addField(nprefix +"agregar @usuario cantidad","Añadir dinero a un usuario")
    .addField(nprefix +"comprar nombre del rol","Para comprar un rol , es importante que solo pongas el nombre , respeta mayusculas y minusculas ")
    .addField(nprefix +"ruleta cantidad","Puedes perder el dinero o duplicar la apusta... tu decides")
    .addField(nprefix +"top","Para ver el ranking de monedas")
    .addField(nprefix +"reiniciar-economia","Reinicias la economia de todo el servidor")  
    .addField("No disponible aun", "----------------")
      message.channel.send({embed});
   } if(ayuda === "entradas/salidas") {  
  let embed = new Discord.RichEmbed()
    .setTitle("📥  Entradas/Salidas") 
    .setColor("#7289D9")
    .addField("Comandos", "Comandos de entrada/salida disponibles")
    .addField(nprefix +"entrada1 #canal","Entrada tipo log")
    .addField(nprefix +"entrada2 #canal","Entrada simple")
    .addField(nprefix +"entrada3 #canal","Imagen de entrada ")
    .addField(nprefix +"entrada4 #canal","Entrada con solo texto")
    .addField(nprefix +"salida1 #canal","Salida tipo log")
    .addField(nprefix +"salida2 #canal","Salida simple")
    .addField(nprefix +"salida3 #canal","Imagen con salida")
    .addField(nprefix +"salida4 #canal","Salida con solo texto")
    .addField(nprefix +"personalizar-entrada3 titulo,descripcion,color(blanco/negro),link del fondo","Puedes personalizar la entrada 3 (en el titulo y la descripcion si quieres poner el nombre del usuario pon {usuario} y si quieres el nombre del servidor pon {servidor})")
    .addField(nprefix +"personalizar-salida3 titulo,descripcion,color(blanco/negro),link del fondo","Puedes personalizar la salida 3 (en el titulo y la descripcion si quieres poner el nombre del usuario pon {usuario} y si quieres el nombre del servidor pon {servidor})")
    .addField(nprefix +"personalizar-entrada4 texto"," (en el titulo y la descripcion si quieres poner el nombre del usuario pon {usuario} y si quieres el nombre del servidor pon {servidor})")
    .addField(nprefix +"personalizar-salida4 texto", "(en el titulo y la descripcion si quieres poner el nombre del usuario pon {usuario} y si quieres el nombre del servidor pon {servidor})")
    .addField("No disponible aun", "----------------") 
      message.channel.send({embed});
     } if(ayuda === "sorteos") {  
  let embed = new Discord.RichEmbed()
    .setTitle("🎉 Sorteos") 
    .setColor("#7289D9")
    .addField("Comandos", "Comandos de sorteos")
    .addField(nprefix +"sorteo <Tiempo> <Ganadores> <Premio>","Puedes crear un sorteo para tu servidor")
    .addField(nprefix +"editar-sorteo <ID Mensaje> <Tiempo Añadido> <Ganadores> <Premio>","Puedes modificar el sorteo")
    .addField(nprefix +"eliminar-sorteo <ID del Sorteo>","Puedes eliminar un sorteo")
    .addField(nprefix +"reroll <id del sorteo>","Da un nuevo ganador del sorteo")
message.channel.send(embed)
   } if(ayuda === "nsfw") {  
  if(!message.channel.nsfw) return message.channel.send("Solo en canales NSFW");
  let embed = new Discord.RichEmbed()
    .setTitle(":smirk: NSFW") 
    .setColor("#7289D9")
    .addField("Comandos", "Comandos de nsfw disponibles")
    .addField(nprefix +"nsfwporno","Eres profesional en esto, no hace falta definicion")
    .addField(nprefix +"nsfwgif","Eres profesional en esto, no hace falta definicion")
    .addField(nprefix +"nsfw4k","Eres profesional en esto, no hace falta definicion")
    .addField("No disponible aun", "----------------")
      message.channel.send({embed});
        } if(ayuda === "auto-moderacion") {  
   let embed = new Discord.RichEmbed()
    .setTitle(":hammer_pick: Automoderación") 
    .setDescription("Para activar o desactivar la automoderación, ponga "+nprefix +"automoderacion on / off" )
    .setColor("#7289D9")
    .addField("Comandos", "Comandos de automoderacion disponibles")
    .addField(nprefix +"auto-mod on/off","Para activar o desactivar la automoderacion")
    .addField(nprefix +"auto-mod-log #canal","Para poner un canal donde se envien los mensajes de aviso)")
    .addField(nprefix +"lista-blanca #canal","Para poner un canal donde la automoderacion no detectara (1 canal x servidor)")
    .addField(nprefix +"eliminar-lista-blanca #canal","Para para eliminar un canal de la lista blanca")
    .addField("No disponible aun", "----------------")
      message.channel.send({embed});
  } if(ayuda === "niveles") {  
   let embed = new Discord.RichEmbed()
    .setTitle(":arrow_up: Niveles") 
    .setDescription("Para activar o desactivar los niveles , ponga "+nprefix +"niveles on / off" )
    .setColor("#7289D9")
    .addField(`🆙 Niveles **En las "explicaciones" de los comandos evita poner las paréntesis**, si tienes alguna duda dirígete al servidor de Sad Bot y el soporte te lo resolverá.`, "Comandos de niveles disponibles")
    .addField(nprefix +"niveles on/off","**Este comando sirve para activar y desactivar el sistema de niveles.**")
    .addField(nprefix +"nivel {@User}","Te manda un mensaje con el nivel del usuario que menciones.")
    .addField(nprefix +"top-niveles","Envía una lista con el top 10 usuarios con más nivel en el servidor.")
    .addField(nprefix +"añadir-recompensa {Número Nvl.} {@Rol}","Al llegar al nivel que seleccionaste te otorga el rol que elegiste de recompensa.")
    .addField(nprefix +"recompensas","Te envía una lista de todas las recompensas del servidor.")
    .addField(nprefix +"set-nivel @usuario {Número Nvl.}","Modifica el nivel de un usuario.")
    .addField(nprefix +"eliminar-recompensa {@Rol}","Elimina un rol de la lista de recompensas del servidor.")
    .addField(nprefix +"canal-niveles {#Chat-Predeterminado} ","Selecciona la sala donde se registren los mensajes de subida de nivel.")
    .addField(nprefix +"personalizar-niveles {Texto-Predeterminado} ","Personaliza el mensaje de subida de nivel.{usuario} , {servidor} , {nivel}")
    .addField("No disponible aun", "----------------")
      message.channel.send({embed});
}   */
}}