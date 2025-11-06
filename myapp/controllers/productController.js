const db = require("../database/models");
const op = db.Sequelize.Op;

const productController = {
  productDetail: function (req, res) {
    let id = req.params.id;

    let relaciones = {
      include: [
        { association: "usuario" },
        { association: "comentarios", include: [{ association: "usuario" }] }
      ],
      where: { id: id }
    };

    db.Producto.findByPk(id, relaciones)
      .then(function (product) {
        if (!product) {
          return res.send("Producto no encontrado" );
        }
        return res.render("product", { product: product });
      })

      .catch(function (error) {
        console.error(error);
      });
  },


    productAdd: function(req, res) {
      // Verificar si el usuario está logueado
      if (!req.session.usuariooo) {  // Asumiendo que 'usuariooo' es el objeto de sesión del usuario
        return res.redirect('/login');  // Redirigir a la página de login si no está logueado
      }

      res.render('product-add');
    },

    productEdit: function(req, res) {
        let id = req.params.id;
        let autoEncontrado = null;

        for (let i = 0; i < db.productos.length; i++) {
            if (db.productos[i].id == id) {
              autoEncontrado = db.productos[i];
              break;
            }
          }
      
          return res.render("product-edit", { 
              product: autoEncontrado
          });
      }
};

module.exports = productController;