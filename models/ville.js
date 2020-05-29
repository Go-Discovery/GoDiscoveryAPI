'use strict';
module.exports = (sequelize, DataTypes) => {
  const ville = sequelize.define('ville', {
    nom: DataTypes.STRING,
    population: DataTypes.INTEGER,
    departement: DataTypes.STRING,
    region: DataTypes.STRING
  }, {});
  ville.associate = function(models) {
    // associations can be defined here

    ville.hasOne(models.post,{foreignKey:'villeId'});
  };
  return ville;
};
