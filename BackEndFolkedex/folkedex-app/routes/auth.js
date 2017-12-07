var express = require('express');
var db = require('../models');
var passport = require('../config/ppConfig');
var router = express.Router();
var jwt = require('jsonwebtoken');
var jwtCheck = require('express-jwt');

router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err) }
    if (!user) {
      return res.json(401, { error: 'Invalid email and/or password' });
    }

    //user has authenticated correctly thus we create a JWT token
      db.user.findById(user.user_id)
      .then(details => {
        const claims = {
          id: details.id,
          first_name: details.first_name,
          last_name: details.last_name,
          score: details.score,
          age_group: details.age_group,
          region: details.region,
          custom: 'User logged in.'
        };
        const options = { expiresIn: '2d' };

        var token = jwt.sign(claims, process.env.SESSION_SECRET, options);
        res.status(200).json({ token : token, user: claims });
      });
  }) (req, res, next);
});

router.get('/logout', function(req, res) {
  req.logout();
  res.status(200).redirect('/');
});

module.exports = router;
