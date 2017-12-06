'use strict';
module.exports = (sequelize, DataTypes) => {
  var feed = sequelize.define('feed', {
    user_id: DataTypes.INTEGER,
    event: DataTypes.STRING,
    other_user_id: DataTypes.INTEGER,
    folk_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return feed;
};