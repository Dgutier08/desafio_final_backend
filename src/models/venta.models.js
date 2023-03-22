const product = (sequelize, DataTypes) => {
    const products = sequelize.define('products', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, //no puede ser vacui
            autoIncrement: true, //autoincremental
            primaryKey: true //llave primary
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false //no puede ser nulo
        },
        nameProduct: {
            type: DataTypes.STRING,
            allowNull: true
        },
        cantidadvendidaProduct: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        valorventaProduct: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
    }, {
        modelName: "products",
    });
    return product;
};

module.exports = product;
