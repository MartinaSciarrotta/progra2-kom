let express = require('express');
let router = express.Router();
let indexController = require('../controllers/indexController');



router.get('/', indexController.index);
router.get('/search-results', indexController.searchResults);


module.exports = router;
