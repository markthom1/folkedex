var express = require('express');
var router = express.Router();
var db = require('../models');
var passport = require('../config/ppConfig');
var jwt = require('jsonwebtoken');
var jwtCheck = require('express-jwt');
var Sequelize = require('sequelize');

/* GET to see friend request*/
router.get('/requests', jwtCheck({secret: process.env.SESSION_SECRET }), function(req, res, next) {
  db.friend_request.findAll({
    where: {
      requestee_id: req.user.id
    },
    include: [{
      model: db.user
    }]
  })
  .then((users) =>{
    res.json({ users: users, id: req.user.id});
  });
});


/* POST to accept friend request*/
router.post('/requests', jwtCheck({secret: process.env.SESSION_SECRET }), function(req, res, next) {
  db.friend_request.findAll({
    where: {
      user_id: req.body.requester_id,
      requestee_id: req.user.id
    }
  })
  .then((fRequest) => {
    console.log(fRequest);
    return fRequest[0].destroy()
    .then(() => {
      db.friend.create({
        user_id: req.user.id,
        friend_id: req.body.requester_id
      })
      .then(() => {
        db.friend.create({
          user_id: req.body.requester_id,
          friend_id: req.user.id
        })
        .then(() => {
          db.user.findById(req.body.requester_id)
          .then(addedUser => {
            res.json({addedUser: addedUser, user: req.user})
          })
        });
      });
    });
  });
});



/* POST for friend request*/
router.post('/add', jwtCheck({secret: process.env.SESSION_SECRET }), function(req, res, next) {
  db.friend_request.findOrCreate({
    where: {
      user_id: req.user.id,
      requestee_id: req.body.requestee_id
    }
  })
  .then(() =>{
    db.user.findById(req.body.requestee_id)
    .then(requestedUser => {
      res.json({requestedUser: requestedUser, user: req.user})
    });
  });
});


/* GET list of friends*/
router.get('/', jwtCheck({secret: process.env.SESSION_SECRET }), function(req, res, next) {
  db.relationship.findAll({
    where: {
      user_id: req.user.id
    },
    include: [{
      model: db.user
    }]
  })
  .then((users) =>{
    res.json({ users: users, user: req.user});
  });
});

module.exports = router;
