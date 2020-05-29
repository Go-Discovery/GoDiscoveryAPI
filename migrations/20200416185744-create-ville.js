'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('villes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nom: {
        type: Sequelize.STRING
      },
      population: {
        type: Sequelize.INTEGER
      },
      departement: {
        type: Sequelize.STRING
      },
      region: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(function () {
      queryInterface.bulkInsert('villes', [
        {nom: "Maubeuge",population: 30100,region: 'Hauts De France',departement: 'Nord'},
        {nom: "Valenciennes",population: 44043,region: 'Hauts De France',departement: 'Nord'},
        {nom: "Lille",population: 232741,region: 'Hauts De France',departement: 'Nord'},
      ]);

    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('villes');
  }
};
