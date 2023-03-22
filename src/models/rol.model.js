const Rol = (sequelize, DataTypes) => {
    const Rol = sequelize.define('Rol', {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      tableName: "rol"
    });
  
    Rol.associate = models => {
        Rol.belongsTo(models.Rol, {as:'rol',foreignKey:'user'})
      }
    ;
  
    return Rol;
  };
  
  module.exports = Rol;
  