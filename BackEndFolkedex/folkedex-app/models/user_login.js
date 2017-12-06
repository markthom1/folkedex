'use strict';
module.exports = (sequelize, DataTypes) => {
  var user_login = sequelize.define('user_login', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return user_login;
};