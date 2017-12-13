'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    var data =[];
    var photos = [
      'https://static.pexels.com/photos/450271/pexels-photo-450271.jpeg',
      'https://static.pexels.com/photos/324658/pexels-photo-324658.jpeg',
      'https://static.pexels.com/photos/91227/pexels-photo-91227.jpeg',
      'https://static.pexels.com/photos/428339/pexels-photo-428339.jpeg',
      'https://static.pexels.com/photos/462680/pexels-photo-462680.jpeg',
      'https://static.pexels.com/photos/253758/pexels-photo-253758.jpeg',
      'https://static.pexels.com/photos/407237/pexels-photo-407237.jpeg',
      'https://static.pexels.com/photos/372042/pexels-photo-372042.jpeg',
      'https://static.pexels.com/photos/35537/child-children-girl-happy.jpg',
      'https://static.pexels.com/photos/428341/pexels-photo-428341.jpeg',
      'https://static.pexels.com/photos/567459/pexels-photo-567459.jpeg',
      'https://static.pexels.com/photos/157023/pexels-photo-157023.jpeg',
      'https://static.pexels.com/photos/156921/pexels-photo-156921.jpeg',
      'https://static.pexels.com/photos/325682/pexels-photo-325682.jpeg',
      'https://static.pexels.com/photos/160914/smile-man-worker-vertical-160914.jpeg',
    ]

    for (var i = 0; i < 50; i++) {
      data.push({
        age : Math.floor((Math.random() * 115) + 1),
        image : photos[Math.floor(Math.random() * 15)],
        story : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.',
        user_id : Math.floor((Math.random() * 8) + 1),
        createdAt : new Date(),
        updatedAt : new Date()
      })
    }

    return queryInterface.bulkInsert('folks', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('folks', null, {})
  }
};
