const db = require("../database/models");
const op = db.Sequelize.Op;
const bcrypt = require('bcryptjs');

const userController = {
    //login: 

    //processLogin:


    logout: function (req, res) {
       req.session.destroy();
  
       if (req.cookies.recordarme) {
           res.clearCookie('recordarme');
       }
  
       return res.redirect('/'); 
   },

   //register:

   //create:






}

module.exports = userController;