'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {

    return queryInterface.addColumn(
      'folks', 'age', {
        type: Sequelize.INTEGER
      }
    )
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn(
      'age', 'folks', {
        type: Sequelize.INTEGER
      }
    )
  }
};
