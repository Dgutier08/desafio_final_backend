//importar los modelos
const Sequelize = require('sequelize')

const User = require('./user.model')
const Rol = require('./rol.model')
const Product = require('./product.model')

//crear conexion con la base de datos
const sequelize = new Sequelize (
    process.env.PGDATABASE,
    process.env.PGUSER,
    process.env.PGPASSWORD,
    {
        host: process.env.PGHOST,
        dialect: 'postgres'
    }
)

//crear objeto con modelos
const models = {
    User: User(sequelize, Sequelize.DataTypes),
    Rol: Rol(sequelize, Sequelize.DataTypes),
    Product: Product(sequelize, Sequelize.DataTypes)
};

//crear las relaciones entre los modelos
Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
        models[key].associate(models)
    }
});

//exportar
module.exports = {
    sequelize,
    models,
}
