var products = require('../models/products');

const indexController = {
  index: function(req, res) {
    res.render('partials/index', { proddd: products });
  },

  login: function(req, res) {
    res.render('partials/login');
  },

  register: function(req, res) {
    res.render('partials/register');
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
    res.render('partials/profile');
  },

  logout: function(req,res){
    res.render("partials/index", { proddd: products });
  }
};

module.exports = indexController;


