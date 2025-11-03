const db = require("../database/models");
const op = db.Sequelize.Op;

const indexController = {
  index: function (req, res) {
    let relaciones = {
      include: [
        {association: "usuario"},
        {association: "comentarios"}
      ]
    };
    
    db.Producto.findAll(relaciones)
      .then(function(resultados){
          return res.render("index", {proddd: resultados, usuariooo: null});
      })
      
      .catch(function(error){
        return res.send(error);
      });
  },

  login: function (req, res) {
    res.render('login');
  },

  register: function(req, res) {
    res.render('register');
  },

  
  searchResults: function (req, res) {
    const palabrasBuscadas = req.query.search;
      
    let filtro = {
      where: [
        {nombreProducto: {[op.like]: "%" + palabrasBuscadas + "%"}}
      ],
      include: [
        {association: "usuario"},
        {association: "comentarios"}
      ]
    }
   
  
    db.Producto.findAll(filtro)
    //db.Producto.findAll(relaciones)
      .then(function(resultados){
        //return res.send(resultados)
     
          return res.render("searchResults", {resultados, palabrasBuscadas})
        
      })
      .catch(function(error){
        return res.send(error);
      });
  },

  profile: function(req, res) {
    const id = req.params.id;
    
    db.Usuario.findByPk(id, {
      include: [
        {association: "productos"}
      ]
    })
      .then(function(usuario){
        if (usuario) {
          return res.render("profile", {proddd: usuario.productos, usuariooo: usuario});
        } else {
          return res.send("Usuario no encontrado");
        }
      })
      .catch(function(error){
        return res.send(error);
      });
  },

  logout: function(req,res){
    let relaciones = {
      include: [
        {association: "usuario"},
        {association: "comentarios"}
      ]
    };
    
    db.Producto.findAll(relaciones)
      .then(function(resultados){
        return res.render("index", {proddd: resultados, usuariooo: null});
      })
      .catch(function(error){
        return res.send(error);
      });
  }
};

module.exports = indexController;


