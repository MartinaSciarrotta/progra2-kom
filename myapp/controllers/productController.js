const db = require ('../localData/localData');

const productController = {
    productDetail: function (req, res) {
        let id = req.params.id; 
        let autoEncontrado = null;
    
        for (let i = 0; i < db.productos.length; i++) {
          if (db.productos[i].id == id) {
            autoEncontrado = db.productos[i];
            break;
          }
        }
    
        return res.render("product", { 
            product: autoEncontrado
        });
    },


    productAdd: function(req, res) {
        res.render('product-add');
    },

    productEdit: function(req, res) {
        let id = req.params.id;
        let autoEncontrado = null;

        

        return res.render("product-edit", { 
            product: autoEncontrado
        });
    }
};

module.exports = productController;