const db = require("../database/models");
const op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');

let userController = {
    
    login: function(req, res) {
      
            return res.render("login", {
                usuarioExiste: req.session.usuarioLogueado
            });     
    },

    register: function(req, res){
       if (req.session.usuarioLogueado) { //si el usuario ya esta logueado, redirige a la pagina de perfil
            return res.redirect('/profile');
       } else {
            return res.render('register', {
                usuarioExiste: req.session.usuarioLogueado, //si el usuario no esta logueado, renderiza la pagina de registro
            });
       }
    },

    processLogin: function (req, res) { 
        let userInfo = {
            email: req.body.email,
            password: req.body.password,
            recordarme: req.body.recordarme,
        }
  
        db.Usuario.findOne ({where: {email: userInfo.email}}) 
       .then (function (usuarioExiste){
           if (!usuarioExiste){ 
               return res.render("login", {
                   usuarioExiste: req.session.usuarioLogueado,
                   error: "error"
               }); 
           }
           
           if (bcrypt.compareSync(userInfo.password, usuarioExiste.contrasena)) { 
               req.session.usuarioLogueado = { 
                    email: usuarioExiste.email,
                    nombre: usuarioExiste.nombre,
                    id: usuarioExiste.id,
               };
               
               if (userInfo.recordarme) {       
                   res.cookie('recordame', usuarioExiste.id, { maxAge: 1000 * 60 * 5 }); 
               }
                  
               return res.redirect("/");


       } else {return res.render("login", { 
               usuarioExiste: req.session.usuarioLogueado,
               error: "error"
           });
       }
   })
        .catch(function () {
            return res.send("error")
   })
    },

    logout: function(req,res){
        req.session.destroy();
        res.clearCookie("recordarme");

        return res.redirect('/')
    },

    create: function(req, res){
        let formulario = req.body;

        if (formulario.usuario == "") {
            return res.render("register", {
                usuarioExiste: req.session.usuarioLogueado,
                error: "El campo no puede estar vacío."
            });

        if (formulario.email == "") {
            return res.render("register", {
                usuarioExiste: req.session.usuarioLogueado,
                error: "El campo no puede estar vacío."
            });
        }

        }

        if (formulario.contrasena == "") {
            return res.render("register", {
                usuarioExiste: req.session.usuarioLogueado,
                error: "El campo no puede estar vacío."
            });
        }

        if (formulario.contrasena.length < 3) {
            return res.render("register", {
                usuarioExiste: req.session.usuarioLogueado,
                error: "La contraseña debe tener al menos 3 caracteres."
            });
        }
        }


        //luego se validar los campos, nos queda verificar que el email no este registrado en la db.   
  };


module.exports = userController;