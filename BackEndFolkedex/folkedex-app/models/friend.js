'use strict';
module.exports = (sequelize, DataTypes) => {
  var friend = sequelize.define('friend', {
    user_id: DataTypes.INTEGER,
    friend_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return friend;
};