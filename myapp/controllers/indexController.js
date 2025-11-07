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
          return res.render("index", {
            proddd: resultados, 
            usuariooo: req.session.usuarioLogueado, 
            usuarioExiste: req.session.usuarioLogueado});
      })
      
      .catch(function(error){
        return res.send(error);
      });
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
      .then(function(resultados){
          return res.render("searchResults", {
            resultados, 
            palabrasBuscadas, 
            usuarioExiste: req.session.usuarioLogueado})
        
      })
      .catch(function(error){
        return res.send(error);
      });
  },
};

module.exports = indexController;


