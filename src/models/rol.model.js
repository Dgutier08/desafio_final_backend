const rol = (sequelize, DataTypes) => {
    const Rol = sequelize.define('rol', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: false
        },
        obey: {
            type: DataTypes.STRING,
            allowNull: true
        },
    }, {
        modelName: "rol",
    });
    Rol.hasMany(models.User, {
        foreignKey: 'rolId',
        as: 'users'
      });
      
    }
    return Rol;
;

module.exports = rol;
