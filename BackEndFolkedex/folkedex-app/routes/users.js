var express = require('express');
var router = express.Router();
var db = require('../models');
var passport = require('../config/ppConfig');
var jwt = require('jsonwebtoken');
var jwtCheck = require('express-jwt');
var Sequelize = require('sequelize');


/* GET users listing. */
router.get('/', jwtCheck({secret: process.env.SESSION_SECRET }), function(req, res, next) {
  var holdUsers, holdFriends, holdOutgoing;
  var queryParams = {id: { [Sequelize.Op.ne]:req.user.id }};
  console.log(req.query);

  db.user.findAll({
    where: queryParams
  })
  .then(users =>{
    holdUsers = users
    db.friend.findAll({
      where: {user_id: req.user.id}
    })
    .then(relations => {
      holdFriends = relations
      db.friend_request.findAll({
        where: {user_id: req.user.id}
      })
      .then(outgoing => {
        holdOutgoing = outgoing
        db.friend_request.findAll({
          where: {requestee_id: req.user.id}
        })
        .then(incoming => {
          var finalArray = []
          holdUsers.forEach((heldUser, index) => {
            finalArray.push({
              user: heldUser,
              isFriend: false,
              friendRequested: false,
              incomingReq: false
            })
          holdFriends.forEach(relation => {
           var friendId = relation.friend_id
           if (friendId === heldUser.id ) {
             finalArray[index].isFriend = true;
            }
          });

          holdOutgoing.forEach(outgoingReq => {
            var requesteeId = outgoingReq.requestee_id
            if (requesteeId === heldUser.id ) {
              finalArray[index].friendRequested = true;
             }
           });

           incoming.forEach(incomingReq => {
             var requesterId = incomingReq.user_id
             if (requesterId === heldUser.id ) {
               finalArray[index].incomingReq = true;
              }
            });
          })
          res.json({users: finalArray})
        });
      });
    });
  })
  .catch(error => {
    console.log(error);
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
            image: `https://api.adorable.io/avatars/${Math.floor(Math.random()*9999)}/`,
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
              image: createdUser.image,
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


// GET /users/profile
router.get('/profile/:id', function (req, res, next) {
  db.user.findById(req.params.id)
  .then(user => {
    res.json(user);
  });
});


// PUT /users/profile
router.put('/profile/:id', jwtCheck({secret: process.env.SESSION_SECRET }), function (req, res, next) {
  db.user.findById(req.params.id)
  .then(user => {
    user.update(req.body)
      .then(user => {
        res.json(user);
      });
  })
});

// delete /users/profile
router.delete('/profile/:id', function (req, res, next) {
  db.user.findById(req.params.id)
  .then(user => {
    user.destroy()
    .then(() => {
      res.json({processStatus: 'done'});
    });
  });
});

module.exports = router;
