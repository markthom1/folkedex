var express = require('express');
var router = express.Router();
var db = require('../models');
var passport = require('../config/ppConfig');
var jwt = require('jsonwebtoken');
var jwtCheck = require('express-jwt');
var Sequelize = require('sequelize');


/* GET users listing. */
router.get('/', jwtCheck({secret: process.env.SESSION_SECRET }), function(req, res, next) {
  db.user.findAll({
    where: {
      id: { [Sequelize.Op.ne]:req.user.id }
    }
  })
  .then(users =>{
    res.json({users: users, user: req.user});
  })
});

 /*POST /users/signup */
router.post('/signup', function (req, res, next) {
  var createdLogin = null;

  db.user_login.findOrCreate({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    })
    .spread((login, created) => {
      if (created) {

        createdLogin = login
        db.user.create({
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            region: req.body.region,
            score: 0,
            age_group: req.body.age_group,
            number_friends: 0,
            number_folks: 0
          })
          .then(createdUser => {

            //user has authenticated correctly thus we create a JWT token
            const claims = {
              id: createdUser.id,
              first_name: createdUser.first_name,
              last_name: createdUser.last_name,
              score: createdUser.score,
              age_group: createdUser.age_group,
              region: createdUser.region,
              custom: 'User logged in.'
            };
            const options = {
              expiresIn: '2d'
            };

            const token = jwt.sign(claims, process.env.SESSION_SECRET, options);

            db.user_login.findById(createdLogin.id)
            .then(loginAgain => {
              loginAgain.update({user_id: createdUser.id})
              res.json({
                token: token,
                user: claims
              });
            })
            .catch(err => {
              res.json(err)
            });
          })
          .catch(err => {
            res.json(err)
          });
      } else {
        res.json({ message: 'Username already exists.' });
      }
    })
    .catch(err => {
      console.log(err);
      res.json(err)
    });
});


// GET /user/profile
router.get('/profile', jwtCheck({secret: process.env.SESSION_SECRET }), function (req, res, next) {
  db.user.findById(req.user.id)
  .then(user => {
    res.json(user);
  });
});


// PUT /users/profile
router.put('/profile', jwtCheck({secret: process.env.SESSION_SECRET }), function (req, res, next) {
  db.user.findById(req.user.id)
  .then(user => {
    user.update(req.body)
      .then(user => {
        res.json(user);
      });
  })
});

module.exports = router;
