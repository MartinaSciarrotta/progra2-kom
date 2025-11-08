let express = require('express');
let router = express.Router();
let userController = require('../controllers/userController');

router.get('/login', userController.login);
router.get('/register', userController.register);
router.get('/profile/:id', userController.profile);
router.get('/logout', userController.logout);

router.post('/processLogin', userController.processLogin);
router.post('/nuevoUsuario', userController.create);

module.exports = router;
