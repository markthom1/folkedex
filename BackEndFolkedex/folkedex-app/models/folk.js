'use strict';
module.exports = (sequelize, DataTypes) => {
  var folk = sequelize.define('folk', {
    age: DataTypes.INTEGER,
    image: DataTypes.STRING,
    story: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    number_likes: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return folk;
};
