'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rank = sequelize.define('Rank', {
    name: DataTypes.STRING
  }, {});
  Rank.associate = function(models) {
    models.Rank.belongsTo(models.User)
    // associations can be defined here
  };
  return Rank;
};
