'use strict';
module.exports = (sequelize, DataTypes) => {
  var like = sequelize.define('like', {
    folk_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return like;
};