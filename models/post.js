'use strict';
module.exports = (sequelize, DataTypes) => {
  const post = sequelize.define('post', {
    titre:DataTypes.STRING,
    message: DataTypes.STRING,
    type: DataTypes.INTEGER
  }, {});
  post.associate = function(models) {
    // associations can be defined here
    post.belongsTo(models.User);

    post.belongsTo(models.ville);
  };
  return post;
};
