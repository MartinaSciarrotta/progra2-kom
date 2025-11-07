module.exports = function (sequelize, dataTypes ) {

    let alias = "Usuario";

    let columnas = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        email: {
            type: dataTypes.STRING,
        },
        contrasena: {
            type: dataTypes.STRING,
        },
        fotoPerfil: {
            type: dataTypes.STRING,
        },
        idUsuario: {
            type: dataTypes.INTEGER,
        },
        fotoPerfil: {
            type: dataTypes.STRING,
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
        tableName: "usuarios",
        timestamps: true, 
        underscored: false, 
    };

    const Usuario= sequelize.define (alias, columnas, config);

    Usuario.associate = function (models) { 
        
        Usuario.hasMany(models.Producto, {
            foreignKey: "usuarioId",
            as: "productos"}); //chequear el AS de las relaciones
        
        Usuario.hasMany(models.Comentario, {
            foreignKey: "idUsuario",
            as: "comentarios"});
    };

    return Usuario;
}