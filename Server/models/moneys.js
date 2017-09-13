'use strict';
module.exports = function(sequelize, DataTypes) {
  var moneys = sequelize.define('moneys', {
    totalmoney: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return moneys;
};