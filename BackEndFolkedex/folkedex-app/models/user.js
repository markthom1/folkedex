'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    region: DataTypes.STRING,
    score: DataTypes.INTEGER,
    age_group: DataTypes.STRING,
    number_friends: DataTypes.INTEGER,
    number_folks: DataTypes.INTEGER,
    image: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return user;
};
