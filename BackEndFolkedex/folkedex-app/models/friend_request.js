'use strict';
module.exports = (sequelize, DataTypes) => {
  var friend_request = sequelize.define('friend_request', {
    user_id: DataTypes.INTEGER,
    requestee_id: DataTypes.INTEGER
  });

  friend_request.associate = function (models) {
    friend_request.belongsTo(models.user, { foreignKey: 'user_id' });
  };

  return friend_request;
};
