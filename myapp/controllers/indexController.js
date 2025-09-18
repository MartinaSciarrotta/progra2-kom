var db = require('../localData/localData');

const indexController = {
  index: function(req, res) {
    res.render('index', { proddd: db.productos , usuariooo: db.usuario, commm: db.comentarios});
  },

  login: function(req, res) {
    res.render('login');
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
    res.render("index", { proddd: db.productos });
  }
};

module.exports = indexController;


