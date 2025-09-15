const db = require ('../localData/localData');

const productController = {
    productDetail: function(req, res) {
        productos = localData.productos;
        const idEncontrado = req.params.id;
      
        let idprod = req.params.id;

        db.Producto.findByPk(idprod, {
            include : [
                {association : "comentarios", include: [{association: "usuario"}]},
                {association : "usuario"}
            ]
        })
        .then(function(producto){
            //return res.send(producto)
            return res.render("product", {producto : db.productos, user: req.session.user})
        })
    },

    productAdd: function(req, res) {
        res.render('partials/product-add');
    },

    productEdit: function(req, res) {
        res.render('partials/product-edit');
    }
};

module.exports = productController;