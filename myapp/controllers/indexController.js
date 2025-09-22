const db = require('../localData/localData');

const indexController = {
  index: function(req, res) {
    res.render('index', {
      proddd: db.productos ,
      usuariooo: null
    });
  },

  login: function(req, res) {
    const email = req.query.email;
    const contrasenia = req.query.contrasenia;

  
    if (!email) {
      return res.render('login', { error: null });
    }
    if (!contrasenia) {
      return res.render('login', { error: null });
    }

    // Verificar si el email coincide con el usuario registrado
    if (db.usuario.email !== email) {
      return res.render('login', { error: 'El usuario no está registrado' });
    }

    // Si el usuario existe pero la contraseña es incorrecta
    if (db.usuario.contrasenia !== contrasenia) {
      return res.render('login', { error: 'La contraseña está incorrecta' });
    }

    // Si todo está correcto, renderizar index con headerLogueado
    return res.render('index', {
      proddd: db.productos,
      usuariooo: db.usuario
    });
  },

  register: function(req, res) {
    res.render('register');
  },

  
  searchResults: function (req, res) {
    
  },

  profile: function(req, res) {
    const userId = req.params.id;
    
    // Verificar si el ID coincide con el usuario registrado
    if (db.usuario.id != userId) {
      return res.send('Usuario no encontrado');
    }

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


