module.exports = function (sequelize, dataTypes ) {

    let alias = "Producto";

    let columnas = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        textoComentario: {
            type: dataTypes.TEXT,
        },
        usuarioId: {
            type: dataTypes.INTEGER,
        },
        createdAt: {
            type: dataTypes.DATE,
        },
        updatedAt: {
            type: dataTypes.DATE,
        },
        deletedAt: {
            type: dataTypes.DATE,
        }
    };

    let config = {
        tableName: "productos",
        timestamps: true, 
        underscored: false, 
    };

    const Producto= sequelize.define (alias, columnas, config);

    Producto.associate = function (models) { 
        
        Producto.belongsTo(models.Usuario, {
            foreignKey: "usuarioId", 
            as: "usuario"});
        
        Producto.hasMany(models.Comentario, {
            foreignKey: "idPost", 
            as: "comentarios" });
    };
    
    return Producto;

}