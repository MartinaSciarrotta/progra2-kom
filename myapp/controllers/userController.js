const db = require("../database/models");
const op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');

const userController = {

    login: function (req, res) {
        if (req.session.user) {
            return res.redirect('/');
        } else {
            return res.render("login", { error: null });
        }
    },

    register: function (req, res) {
        if (req.session.user) {
            return res.redirect('/');
        } else {
            return res.render("register", { error: null });
        }
    },

    processLogin: function (req, res) {
        let email = req.body.email;
        let contrasena = req.body.contrasena;
        let recordarme = req.body.recordarme;
    
        // 1) Validar campos vacíos
        if (email == "") {
            return res.render("login", { error: "Debés completar el email." });
        }
    
        if (contrasena == "") {
            return res.render("login", { error: "Debés completar la contraseña." });
        }
    
        // 2) Buscar usuario por email
        db.Usuario.findOne({
            where: { email: email }
        })
        .then(function (user) {
            if (!user) {
                return res.render("login", { error: "Ese email no está registrado." });
            } else {
                // 3) Comparar contraseñas
                let passwordValida = bcrypt.compareSync(contrasena, user.contrasena);
    
                if (!passwordValida) {
                    return res.render("login", { error: "Contraseña incorrecta." });
                } else {
                    // 4) Guardar el usuario en sesión
                    req.session.user = {
                        id: user.id,
                        nombre: user.nombre,
                        email: user.email,
                        fotoPerfil: user.fotoPerfil
                    };
    
                    // 5) Crear cookie si marcó “recordarme”
                    if (recordarme) {
                        res.cookie("emailUser", user.email, { maxAge: 1000 * 60 * 60 * 24 * 7 });
                    }
    
                    // 6) Redirigir al inicio
                    return res.redirect("/");
                }
            }
        })
        .catch(function (error) {
            console.log(error);
            return res.render("login", { error: "Ocurrió un error al procesar el login." });
        });
    },
        

    logout: function (req, res) {
        req.session.destroy();
        res.clearCookie('emailUser');

        return res.redirect('/');
    },

    create: function (req, res) {
        if (req.body.contrasena.length < 3) {
            return res.render("register", { error: "La contraseña debe tener al menos 3 caracteres" });
        }

        db.Usuario.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(function (usuarioExistente) {
            if (usuarioExistente) {
                return res.render("register", { error: "Ese email ya está registrado" });
            }

            const passEncriptada = bcrypt.hashSync(req.body.contrasena, 10);

            db.Usuario.create({
                nombre: req.body.usuario,
                email: req.body.email,
                contrasena: passEncriptada,
                fotoPerfil: req.body.fotoPerfil ? req.body.fotoPerfil : "default-image.png"
            })
            .then(function (usuarioCreado) {
                req.session.user = usuarioCreado;
                return res.redirect('/');
            })
            .catch(function (error) {
                console.error(error);
                return res.render("register", { error: "Error al crear el usuario. Intenta nuevamente." });
            });
        })
        .catch(function (error) {
            console.error(error);
            return res.render("register", { error: "Error al verificar el email. Intenta nuevamente." });
        });
    },

    profile: function (req, res) {
        if (!req.session.user) {
            return res.redirect("/user/login");
        }

        let id = req.params.id;

        if (!id) {
            if (req.session.user) {
                id = req.session.user.id;
            } else {
                return res.redirect("/user/login");
            }
        }

        db.Usuario.findByPk(id, {
            include: [
                { association: "productos", include: [{ association: "comentarios" }] },
                { association: "comentarios" }
            ]
        })
        .then(function (usuario) {
            if (!usuario) {
                return res.send("Usuario no encontrado");
            }

            let perfilPropio = false;
            let verPerfil = false;

            if (req.session.user) {
                perfilPropio = req.session.user.id === usuario.id;
                verPerfil = !perfilPropio;
            }

            return res.render('profile', {
                usuariooo: usuario, 
                proddd: usuario.productos,
                verPerfil: verPerfil,
                perfilPropio: perfilPropio,
                user: req.session.user
            });
        })
        .catch(function (error) {
            console.error(error);
            return res.send("Error al cargar el perfil");
        });
    }

};

module.exports = userController;
