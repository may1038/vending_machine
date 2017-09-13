"use strict"

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.dropTable("machines")
  },

  down: function(queryInterface, Sequelize) {}
}
