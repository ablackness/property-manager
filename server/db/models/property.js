'use strict';
module.exports = (sequelize, DataTypes) => {
  var Property = sequelize.define('Property', {
    name: DataTypes.STRING,
    address1: DataTypes.STRING,
    address2: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zip: DataTypes.INTEGER,
    phone: DataTypes.INTEGER,
    rent: DataTypes.INTEGER,
    sqft: DataTypes.INTEGER,
    bedrooms: DataTypes.INTEGER,
    bathrooms: DataTypes.INTEGER,
    pets: DataTypes.BOOLEAN,
    leaseTerm: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        models.Property.hasMany( models.Favorite, {
          as: 'favorites',
          foreignKey: 'propertyId'
        })
      }
    }
  });
  return Property;
};