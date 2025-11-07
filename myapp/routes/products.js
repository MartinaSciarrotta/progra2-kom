let express = require('express');
let router = express.Router();
let productController = require('../controllers/productController');

router.get('/product-add', productController.productAdd);
router.post('/product-add', productController.agregarProducto);
router.get('/product/detalle/:id', productController.productDetail);
router.post('/product/detalle/:id', productController.agregarComentario);
//router.get('/product-edit/:id', productController.productEdit);

module.exports = router;