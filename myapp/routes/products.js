let express = require('express');
let router = express.Router();
let productController = require('../controllers/productController');


router.get('/product-add', productController.productAdd);
router.post('/product-add', productController.agregarProducto);
router.get('/detalle/:id', productController.productDetail);
router.post('/detalle/:id', productController.agregarComentario);
router.get('/product-edit/:id', productController.productEdit);
router.post('/product-update/:id', productController.productUpdate);

module.exports = router;