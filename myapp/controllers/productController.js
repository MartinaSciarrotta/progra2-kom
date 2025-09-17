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
            return res.render("product", {producto : producto, user: req.session ? req.session.user : null})
        })
    },

    productAdd: function(req, res) {
        res.render('product-add');
    },

    productEdit: function(req, res) {
        res.render('product-edit');
    }
};

module.exports = productController;