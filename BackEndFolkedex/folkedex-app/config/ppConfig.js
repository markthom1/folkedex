var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var db = require('../models');

passport.use(new LocalStrategy({ usernameField: 'email' }, function(email, password, done) {
  db.user_login.find({
    where: { email: email }
  }).then(function(user) {
    if (!user || !user.validPassword(password)) {
      done(null, false);
    } else {
      done(null, user);
    }
  }).catch(done);
}));

module.exports = passport;
