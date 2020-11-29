const express = require('express');
const router = express.Router();
const CheckAuth = require('../auth/auth');


router.get('/', CheckAuth, async(req, res) => {
    let datoServidores = req.user.guilds.filter(p => (p.permissions & 2146958591) === 2146958591);
    
    let base = req.db;
    let idusuario = req.user.id;
    let datosdb;
  
                      res.render("perfil.ejs", {
                      status: (req.isAuthenticated() ? `${req.user.username}#${req.user.discriminator}` : "login"),
                      client: req.bot,
                      user: req.user,
                      servidores: datoServidores,
                      login: (req.isAuthenticated() ? "si" : "no"),
                      avatarURL:`https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png`,
                      iconURL:`https://cdn.discordapp.com/avatars/${req.user.id}/${req.user.avatar}.png?size=32`
                    });  
  
})
module.exports = router;
