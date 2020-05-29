'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Ranks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
      }
    }).then(function() {
      queryInterface.bulkInsert('Ranks', [
        {name: "admin"},
        {name: "modérateur"},
        {name: "utilisateur"}
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Ranks');
  }
};