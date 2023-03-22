//importar los modelos
const  Sequelize = require('sequelize')

const User = require('./user.model')
const Rol = require('./rol.model')
const Products = require('./Product.model')


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
    Products: Products(sequelize, Sequelize.DataTypes)
};

//crear las realciones entre los modelos
Object.keys(models).forEach(key => {
    if ('associate' in models[key]) {
        models[key].associate(models);
    }
});


//exportar
module.exports={
    sequelize,
    models,
    }