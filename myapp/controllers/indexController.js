var db = require('../localData/localData');

const indexController = {
  index: function(req, res) {
    res.render('index', {
      proddd: db.productos ,
      usuariooo: db.usuario,
      commm: db.comentarios
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

    const user = db.usuario;

  
    if (user.email !== email) {
      return res.render('login', { error: 'El usuario no está registrado' });
    }


    if (user.contrasenia !== contrasenia) {
      return res.render('login', { error: 'La contraseña está incorrecta' });
    }

    return res.render('index', {
      proddd: db.productos,
      usuariooo: user,
      commm: db.comentarios
    });
  },

  register: function(req, res) {
    res.render('register');
  },

  
  searchResults: function (req, res) {
               
    db.Producto.findAll({
        where: [
            {nombre: { [op.like]: `%${req.query.search}%`} }
        ],
        include : [
            {association : "comentarios"},
            {association : "usuario"}
        ]
    })
    .then(function(productosEncontrados) {
        if (productosEncontrados.length > 0) {
            return res.render('searchResults', {proddd: productosEncontrados, mensaje: null})
        } else {
            return res.render('searchResults', {proddd: [], mensaje: "No hay resultados para su criterio de búsqueda"})
        }
    })
    .catch(function(error) {
        console.log(error)
        return res.send('Ocurrió un error al buscar el producto.');
    })
},


  profile: function(req, res) {
    const user = db.usuario; 
    const productosUsuario = [];

    for (let i = 0; i < db.productos.length; i++) {
      const p = db.productos[i];
      if (p.usuario_id === user.id) {  
        productosUsuario.push(p);
      }
    }

    res.render('profile', { proddd: productosUsuario, usuariooo: user });
  },

  logout: function(req,res){
    res.render("index", { 
      proddd: db.productos, 
      usuariooo: null,
      commm: db.comentarios
    });
  }
};

module.exports = indexController;


