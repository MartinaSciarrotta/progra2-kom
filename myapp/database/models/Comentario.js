module.exports = function (sequelize, dataTypes ) {

    let alias = "Comentario"; 

    let columnas = { 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        textoComentario: {
            type: dataTypes.TEXT,
        },
        createdAt: {
            type: dataTypes.DATE,
        },
        updatedAt: {
            type: dataTypes.DATE,
        },
        deletedAt: {
            type: dataTypes.DATE,
        },
        idPost: {
            type: dataTypes.INTEGER,
        },
        idUsuario: {
            type: dataTypes.INTEGER,
        },
    };

    let config = { 
        tableName: "comentarios",
        timestamps: true, 
        underscored: false, 
    };

    const Comentario= sequelize.define (alias, columnas, config);

    Comentario.associate = function (models) {

        Comentario.belongsTo(models.Producto, {
            foreignKey: "idPost", 
            as: "producto"});
        
        Comentario.belongsTo(models.Usuario, {
            foreignKey: "idUsuario", 
            as: "usuario"});
    };

    return Comentario;
}