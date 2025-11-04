const db = require("../database/models");
const op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');

let userController = {
    show: function(req, res) {
      
            return res.render("register");     
    },

    create: function(req, res){
        let email = req.body.email;
        let contrasena = req.body.contrasena;
        let usuario = req.body.usuario;

        // guardar el usuario
        let infoUsuario = {
            usuario: usuario,
            email: email,
            contrasena: bcryptjs.hashSync(contrasena, 10)
        }

        db.User.create(usuario)
            .then(function(resultados) {
                return res.redirect("/", {infoUsuario: resultados})
            })
            .catch(function(err) {
                return res.send(err)
            })

    },

    login: function(req, res){
       
        return res.render('login');
    },

    processLogin: function(req,res){
        let userInfo = {
            email: req.body.email,
            password: req.body.password,
            recordarme: req.body.recordarme,
        }
  
        req.session.user = userInfo;

        //checkear si recordarme esta tildado

        if (userInfo.recordarme != undefined) {
            res.cookie("user", userInfo, {maxAge: 600000}) // En milisegundos
        }

        res.redirect ("/")
    },

    logout: function(req,res){
        req.session.destroy();
        res.clearCookie("userData");

        return res.redirect('/')
    }
  };


module.exports = userController;