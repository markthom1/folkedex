var express = require('express');
var router = express.Router();
var db = require('../models');
var passport = require('../config/ppConfig');
var jwt = require('jsonwebtoken');
var jwtCheck = require('express-jwt');
var Sequelize = require('sequelize');
var rp = require('request-promise');

// Get all user folks
router.get('/', jwtCheck({secret: process.env.SESSION_SECRET }),
(req, res, next) => {
  db.folk.findAll({
    where: {
      user_id: req.user.id
    }
  })
  .then(folks => {
    res.json(folks)
  });
});

router.get('/slides', jwtCheck({secret: process.env.SESSION_SECRET }),
(req, res, next) => {
  db.folk.findAll({
    limit: 8
  })
  .then(folks => {
    res.json(folks)
  });
});

// add folk
router.post('/add', jwtCheck({secret: process.env.SESSION_SECRET }),
(req, res, next) => {
  db.folk.findOrCreate({
    where: {
      age: req.body.folkAge,
      user_id: req.user.id
    }
  })
  .spread((folk, created) => {
    if (created) {
      folk.update({
        image: req.body.imageUrl,
        story: req.body.folkStory,
        number_likes: 0
      })
      .then(createdFolk => {
        res.json(createdFolk)
      });
    } else {
      res.json({message: 'You already have a folk of this age'})
    }
  });
});

// edit folk
router.put('/edit', jwtCheck({secret: process.env.SESSION_SECRET }),
(req, res, next) => {
  db.folk.findById(req.body.folkId)
  .then(folk => {
    folk.update({
      story: req.body.folkStory
    })
    .then(updatedFolk => {
      res.json(updatedFolk)
    });
  });
});

// delete folk
router.delete('/delete', jwtCheck({secret: process.env.SESSION_SECRET }),
(req, res, next) => {
  db.folk.findById(req.body.folkId)
  .then(folk => {
    folk.destroy()
    .then(() => {
      res.json({message: 'Folk is now forgotten'})
    });
  });
});

router.post('/check', (req, res, next) => {
  var url = 'https://westcentralus.api.cognitive.microsoft.com/vision/v1.0/analyze?'
  var options = {
    method: 'POST',
    uri: url + 'visualFeatures=Faces&language=en',
    headers: {
      "Content-Type": "application/json",
      "Ocp-Apim-Subscription-Key": process.env.API_KEY,
    },
    body: '{"url": "' +req.body.imageUrl+ '"}'
  }

  rp(options)
  .then(response => {

    var resNew = JSON.parse(response)
    console.log();
    db.folk.create({
      age: resNew.faces[0].age,
      image: req.body.imageUrl,
      story: req.body.imageUrl,
      user_id: req.user.id
    })
    .then(folk => {
      res.json(folk)
    })
  })

})

module.exports = router;
