'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    models.User.hasOne(models.Rank);
    User.hasOne(models.post,{foreignKey:'UserId'});
    // associations can be defined here
  };
  return User;
};
