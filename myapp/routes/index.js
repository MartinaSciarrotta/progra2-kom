let express = require('express');
let router = express.Router();
let indexController = require('../controllers/indexController');



router.get('/', indexController.index);
router.get('/login', indexController.login);
router.get('/register', indexController.register);
router.get('/profile/:id', indexController.profile);
router.post('/logout', indexController.logout);
router.get('/search-results', indexController.searchResults);

//router.post('/processLogin', userController.processLogin);
//router.post('/nuevoUsuario', userController.create);

module.exports = router;
