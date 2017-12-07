'use strict';
module.exports = (sequelize, DataTypes) => {
  var friend = sequelize.define('friend', {
    user_id: DataTypes.INTEGER,
    friend_id: DataTypes.INTEGER
  });

  friend.associate = function (models) {
      friend.belongsTo(models.user, { foreignKey: 'friend_id' });
    };

  return friend;
};
