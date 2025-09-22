const db = require('../localData/localData');

const indexController = {
  index: function (req, res) {
    res.render('index', {
      proddd: db.productos,
      usuariooo: null
    });
  },

  login: function (req, res) {
    return res.render('index', {
      proddd: db.productos,
      usuariooo: mail
    });
  },

  register: function(req, res) {
    res.render('register');
  },

  
  searchResults: function (req, res) {
    res.render('searchResults');
  },

  profile: function(req, res) {
    const userId = req.params.id;

    // Buscar productos del usuario
    const productosUsuario = [];
    for (let i = 0; i < db.productos.length; i++) {
      const p = db.productos[i];
      if (p.usuario_id === db.usuario.id) {  
        productosUsuario.push(p);
      }
    }

    res.render('profile', { proddd: productosUsuario, usuariooo: db.usuario });
  },

  logout: function(req,res){
    res.render("index", { 
      proddd: db.productos, 
      usuariooo: null
    });
  }
};

module.exports = indexController;


