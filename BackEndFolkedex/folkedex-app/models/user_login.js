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

  user_login.beforeCreate(function (createdUser, options) {
    if (!createdUser.password) { return null; }
    // var hash = bcrypt.hashSync(createdUser.password, 10);
    var hash = Buffer.from(createdUser.password).toString('base64')
    createdUser.password = hash;
    return createdUser;
  });

  user_login.prototype.validPassword = function (password) {
    return Buffer.from(password).toString('base64') === this.password
    // return bcrypt.compareSync(password, this.password);
  };


  return user_login;
};
