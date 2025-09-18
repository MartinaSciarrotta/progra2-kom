var express = require('express');
var router = express.Router();
var indexController = require('../controllers/indexController');

router.get('/', indexController.index);
router.get('/login', indexController.login);
router.post('/login', indexController.loginPost);
router.get('/register', indexController.register);
// router.get('/search', indexController.searchResults);
router.get('/profile', indexController.profile);
router.get('/logout', indexController.logout);
router.post('/logout', indexController.logout);


module.exports = router;
