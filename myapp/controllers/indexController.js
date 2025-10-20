const db = require("../database/models");
const op = db.Sequelize.Op;

const indexController = {
  index: function (req, res) {
    res.render('index', {
      proddd: db.productos,
      usuariooo: true
    });
  },

  login: function (req, res) {
    res.render('login');
  },

  register: function(req, res) {
    res.render('register');
  },

  
  searchResults: function (req, res) {
    res.render('searchResults', {
      proddd: db.productos,
      usuariooo: true
    });
  },

  profile: function(req, res) {
    const carlos = {
      id: 1,
      nombre: "Carlos López",
      email: "carlos.lopez@gmail.com",
      fotoPerfil: "carlos.jpg"
    };

    // Buscar productos del usuario
    const productosCarlos = [];
    for (let i = 0; i < db.productos.length; i++) {
      const p = db.productos[i];
      if (p.usuario_id === db.usuario.id) {  
        productosCarlos.push(p);
      }
    }

    res.render('profile', { proddd: productosCarlos, usuariooo: carlos });
  },

  logout: function(req,res){
    res.render("index", { 
      proddd: db.productos, 
      usuariooo: null
    });
  }
};

module.exports = indexController;


