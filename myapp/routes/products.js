let express = require('express');
let router = express.Router();
let productController = require('../controllers/productController');

router.get('/product-add', productController.productAdd);
router.get('/product/detalle/:id', productController.productDetail);
router.get('/product-edit/:id', productController.productEdit);

module.exports = router;