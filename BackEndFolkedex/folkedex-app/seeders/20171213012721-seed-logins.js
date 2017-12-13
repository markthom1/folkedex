'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('user_logins', [{
      email : 'test1@test.com',
      password : 'MTIzNDU2Nzg=',
      user_id : 1,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      email : 'test2@test.com',
      password : 'MTIzNDU2Nzg=',
      user_id : 2,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      email : 'test3@test.com',
      password : 'MTIzNDU2Nzg=',
      user_id : 3,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      email : 'test4@test.com',
      password : 'MTIzNDU2Nzg=',
      user_id : 4,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      email : 'test5@test.com',
      password : 'MTIzNDU2Nzg=',
      user_id : 5,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      email : 'test6@test.com',
      password : 'MTIzNDU2Nzg=',
      user_id : 6,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      email : 'test7@test.com',
      password : 'MTIzNDU2Nzg=',
      user_id : 7,
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      email : 'test8@test.com',
      password : 'MTIzNDU2Nzg=',
      user_id : 8,
      createdAt : new Date(),
      updatedAt : new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('user_logins', null, {})
  }
};
