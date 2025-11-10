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
                user: req.session.user,
                mensaje: null
            });
        })
        .catch(function(error) {
            console.error(error);
            return res.render("product", {
                product: null,
                user: req.session.user,
                error: "Error al cargar el producto",
                mensaje: null
            });
        });
    },

    productAdd: function (req, res) {
        if (!req.session.user) {
            return res.redirect('/user/login');
        }

        return res.render('product-add', {
            user: req.session.user,
            error: null
        });
    },

    agregarProducto: function (req, res) {
        if (!req.session.user) {
            return res.redirect('/user/login');
        }

        db.Producto.create({
            usuarioId: req.session.user.id,
            imagenArchivo: req.body.imagen,
            nombreProducto: req.body.nombre,
            descripcion: req.body.descripcion
        })
        .then(function(productoCreado) {
            return res.redirect('/product/detalle/' + productoCreado.id);
        })
        .catch(function(error) {
            console.error(error);
            return res.render('product-add', {
                user: req.session.user,
                error: "Error al crear el producto. Intenta nuevamente."
            });
        });
    },

    agregarComentario: function (req, res) {
        if (!req.session.user) {
            return res.redirect('/user/login');
        }

        db.Comentario.create({
            idUsuario: req.session.user.id,
            idPost: req.params.id,
            textoComentario: req.body.comentario
        })
        .then(function(comentarioAgregado) {
            return res.redirect('/product/detalle/' + req.params.id);
        })
        .catch(function(error) {
            return res.send(error);
        });
    },

    productEdit: function (req, res) {
        if (!req.session.user) {
            return res.redirect('/user/login');
        }

        let idprod = req.params.id;

        db.Producto.findByPk(idprod, {
            include: [
                { association: "comentarios", include: [{ association: "usuario" }] },
                { association: "usuario" }
            ]
        })

        .then(function(producto) {
            if (!producto) {
                return res.send("Producto no encontrado");
            }

            if (producto.usuarioId !== req.session.user.id) {
                return res.render("product", {
                    product: producto,
                    user: req.session.user,
                    mensaje: "No tienes permiso para editar este producto"
                });
            }

            return res.render('product-edit', {
                product: producto,
                user: req.session.user,
                error: null
            });
        })
        .catch(function(error) {
            console.error(error); // Para que nosotras lo veamos
            return res.render('product-edit', {
                product: null,
                user: req.session.user,
                error: "Error al cargar el producto"
            });
        });
    },


    productUpdate: function (req, res){
        const idprod = req.params.id;

        return res.send({
            id: req.params.id ,
            nombreProducto: req.body.nombreProducto,
            descripcion: req.body.descripcion,
            imagenArchivo: req.body.imagenArchivoActual
        })
    
        db.Producto.findByPk(idprod)
            .then(function (producto) {
                if (!producto) {
                    return res.send("Producto no encontrado");
                }
    
                // Actualizar los datos del producto

               
                return db.Producto.update(
                    {
                        nombreProducto: req.body.nombreProducto,
                        descripcion: req.body.descripcion,
                        imagenArchivo: nuevaImagen
                    },
                    { where: { id: idprod } }
                )
                .then(function () {
                    return res.redirect('/product/detalle/' + idprod);
                });
            })
            .catch(function (error) {
                console.error(error);
                return res.render('product-edit', {
                    product: null,
                    user: req.session.user,
                    error: "Error al guardar los cambios del producto"
                });
            });
    }
    
};

module.exports = productController;