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
        modelName: "breed",
    });
    Rol.associate = models =>{
        Rol.hasmany(models.User)
    }
    return Rol;
};

module.exports = rol;
