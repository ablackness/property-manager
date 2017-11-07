'use strict';
module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    type: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        models.User.hasMany( models.Favorite, {
          as: 'favorites',
          foreignKey: 'userId'
        })
      }
    }
  });
  return User;
};