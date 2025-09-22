var db = require('../localData/localData');

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
    var palabraBuscada = "";
    if (req.query.search) {
      palabraBuscada = req.query.search.toLowerCase();
    }
  
    var productosEncontrados = [];
    var listaProductos = db.productos;
  
    for (var i = 0; i < listaProductos.length; i++) {
      var producto = listaProductos[i];
  
      var nombre = "";
      var descripcion = "";
      var usuario = "";
  
      if (producto.nombreProducto) {
        nombre = producto.nombreProducto.toLowerCase();
      }
      if (producto.nombre) {
        nombre = producto.nombre.toLowerCase();
      }
      if (producto.descripcion) {
        descripcion = producto.descripcion.toLowerCase();
      }
      if (producto.usuario_nombre) {
        usuario = producto.usuario_nombre.toLowerCase();
      }
      if (producto.usuario && producto.usuario.nombre) {
        usuario = producto.usuario.nombre.toLowerCase();
      }
  
      if (palabraBuscada && nombre.includes(palabraBuscada)) {
        productosEncontrados.push(producto);
      } 
      else {
        if (palabraBuscada && descripcion.includes(palabraBuscada)) {
          productosEncontrados.push(producto);
        } else {
          if (palabraBuscada && usuario.includes(palabraBuscada)) {
            productosEncontrados.push(producto);
          }
        }
      }
    }
  
    if (productosEncontrados.length > 0) {
      return res.render('searchResults', { proddd: productosEncontrados, mensaje: null });
    } else {
      return res.render('searchResults', { proddd: [], mensaje: 'No hay resultados para su criterio de búsqueda' });
    }
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


