const user = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
      // ...
    });
  
    User.associate = models => {
      User.belongsTo(models.Rol, {as:'rol',foreignKey:'rolId'})
    }
  
    
      return User;
  };
  
  module.exports = user;
  