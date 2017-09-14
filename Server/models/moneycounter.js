'use strict';
module.exports = function(sequelize, DataTypes) {
  var moneycounter = sequelize.define('moneycounter', {
    currentmoney: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return moneycounter;
};