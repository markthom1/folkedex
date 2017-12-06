'use strict';
module.exports = (sequelize, DataTypes) => {
  var friend_request = sequelize.define('friend_request', {
    user_id: DataTypes.INTEGER,
    requestee_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return friend_request;
};