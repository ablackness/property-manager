'use strict';
module.exports = (sequelize, DataTypes) => {
  var Favorite = sequelize.define('Favorite', {
    userId: DataTypes.INTEGER,
    propertyId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        models.Favorite.belongsTo(models.User, {
          as: 'user',
          foreignKey: 'userId'
        });
        models.Favorite.belongsTo(models.Property, {
          as: 'property',
          foreignKey: 'propertyId'
        });
      }
    }
  });
  return Favorite;
};