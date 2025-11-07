const db = require("../database/models");

const productController = {
    productDetail: function (req, res) {
        let idprod = req.params.id;

        db.Producto.findByPk(idprod, {
            include: [
                { association: "comentarios", include: [{ association: "usuario" }] },
                { association: "usuario" }
            ]
        })
        .then(function(producto) {
            return res.render("product", {
                product: producto,
                usuarioExiste: req.session.usuarioLogueado
            });
        })
        .catch(function(error) {
            return res.send(error);
        });
    },

    productAdd: function (req, res) {
        if (!req.session.usuarioLogueado) {
            return res.redirect('/user/login');
        }

        return res.render('product-add', {
            usuarioExiste: req.session.usuarioLogueado
        });
    },

    agregarProducto: function (req, res) {
        if (!req.session.usuarioLogueado) {
            return res.redirect('/user/login');
        }

        db.Producto.create({
            usuarioId: req.session.usuarioLogueado.id,
            imagenArchivo: req.body.imagen,
            nombreProducto: req.body.nombre,
            descripcion: req.body.descripcion
        })
        .then(function(productoCreado) {
            return res.redirect('/product/detalle/' + productoCreado.id);
        })
        .catch(function(error) {
            return res.send(error);
        });
    },

    agregarComentario: function (req, res) {
        if (!req.session.usuarioLogueado) {
            return res.redirect('/user/login');
        }

        db.Comentario.create({
            idUsuario: req.session.usuarioLogueado.id,
            idPost: req.params.id,
            textoComentario: req.body.comentario
        })
        .then(function(comentarioAgregado) {
            return res.redirect('/product/detalle/' + req.params.id);
        })
        .catch(function(error) {
            return res.send(error);
        });
    }
};

module.exports = productController;