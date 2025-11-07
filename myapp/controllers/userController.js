const db = require("../database/models");
const op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');

const userController = {

    login: function (req, res) {

        return res.render("login", {
            usuarioExiste: req.session.usuarioLogueado
        });
    },

    register: function (req, res) {
        if (req.session.usuarioLogueado)
            return res.redirect('/user/profile/' + req.session.usuarioLogueado.id);
        return res.render('register', {
            usuarioExiste: req.session.usuarioLogueado,
        }
        );
    },


    processLogin: function (req, res) {
        let userInfo = {
            email: req.body.email,
            password: req.body.password,
            recordarme: req.body.recordarme,
        }

        db.Usuario.findOne({ where: { email: userInfo.email } })
            .then(function (usuarioExiste) {
                if (!usuarioExiste) {
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


                } else {
                    return res.render("login", {
                        usuarioExiste: req.session.usuarioLogueado,
                        error: "error"
                    });
                }
            })
            .catch(function () {
                return res.send("error")
            })
    },

    logout: function (req, res) {
        req.session.destroy();
        res.clearCookie("recordarme");

        return res.redirect('/')
    },

    create: function (req, res) {
        const formulario = req.body;

        if (formulario.usuario == "") {
            return res.render("register", {
                error: "El campo no puede estar vacio",
                usuarioExiste: req.session.usuarioLogueado,
            });
        }
        if (formulario.email == "") {
            return res.render("register", {
                error: "El campo no puede estar vacio",
                usuarioExiste: req.session.usuarioLogueado,
            });
        }
        if (formulario.contrasena == "") {
            return res.render("register", {
                error: "El campo no puede estar vacio",
                usuarioExiste: req.session.usuarioLogueado,
            });
        }
        if (formulario.contrasena.length < 3) {
            return res.render("register", {
                error: "El contraseña debe tener al menos 3 caracteres",
                usuarioExiste: req.session.usuarioLogueado,
            });
        }

        //verifica si el email no esta registrado en la db
        db.Usuario.findOne({ where: { email: formulario.email } })
            .then(function (usuarioExiste) {
                if (usuarioExiste) {
                    return res.render("register", {
                        usuarioExiste: req.session.usuarioLogueado,
                        error: "El email ya se encuentra registrado."
                    });
                }

                const contrasenaHasheada = bcrypt.hashSync(formulario.contrasena, 10);

                db.Usuario.create({ //si el email no esta registrado, podemos creear el usuario, y hashear la contrasena

                    nombre: formulario.usuario,
                    email: formulario.email,
                    contrasena: contrasenaHasheada,
                    fotoPerfil: formulario.fotoPerfil,
                })
                    .then(function () {
                        return res.redirect("/user/login"); //redirigimos a la pagina de login para que el usuario pueda ingresar con su nueva cuenta
                    })
                    .catch(function (err) {
                        return res.render("register", {
                            usuarioExiste: req.session.usuarioLogueado,
                            error: "Error. Intenta nuevamente."
                        });
                    });
            })
            .catch(function (err) {
                return res.render("register", {
                    usuarioExiste: req.session.usuarioLogueado,
                    error: "Error. Intenta nuevamente."
                });
            });
    },

    profile: function (req, res) {
        const id = req.params.id;

        db.Usuario.findByPk(id, {
            include: [
                { association: "productos" }
            ]
        })
            .then(function (usuario) {
                if (usuario) {
                    return res.render("profile", {
                        proddd: usuario.productos,
                        usuariooo: usuario,
                        usuarioExiste: req.session.usuarioLogueado
                    });
                } else {
                    return res.send("Usuario no encontrado");
                }
            })
            .catch(function (error) {
                return res.send(error);
            });
    },

};


module.exports = userController;