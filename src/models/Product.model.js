const product = (sequelize, DataTypes) => {
    const Produts = sequelize.define('products', {
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
        cantidadProduct: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        precioProduct: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
    }, {
        modelName: "products",
    });
    return Product;
};

module.exports = products;