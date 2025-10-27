let express = require('express');
let router = express.Router();
let indexController = require('../controllers/indexController');


router.get('/', indexController.index);
router.get('/login', indexController.login);
router.get('/register', indexController.register);
router.get('/profile/:id', indexController.profile);
router.get('/logout', indexController.logout);
router.get('/search-results', indexController.searchResults);

module.exports = router;
