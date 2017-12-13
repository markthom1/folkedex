'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      first_name : 'John',
      last_name : 'Doe',
      image : 'https://api.adorable.io/avatars/3324/',
      region : 'United States',
      score : 0,
      age_group : '21-30',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      first_name : 'Jane',
      last_name : 'Doe',
      image : 'https://api.adorable.io/avatars/253/',
      region : 'United States',
      score : 0,
      age_group : '21-30',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      first_name : 'Fred',
      last_name : 'Miller',
      image : 'https://api.adorable.io/avatars/123/',
      region : 'United States',
      score : 0,
      age_group : '18-20',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      first_name : 'Chelsea',
      last_name : 'May',
      image : 'https://api.adorable.io/avatars/378/',
      region : 'United States',
      score : 0,
      age_group : '18-20',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      first_name : 'Fredda',
      last_name : 'Wilson',
      image : 'https://api.adorable.io/avatars/1028/',
      region : 'Japan',
      score : 0,
      age_group : '41-50',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      first_name : 'Jesse',
      last_name : 'Smith',
      image : 'https://api.adorable.io/avatars/1020/',
      region : 'Japan',
      score : 0,
      age_group : '31-40',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      first_name : 'Ashley',
      last_name : 'Mason',
      image : 'https://api.adorable.io/avatars/1290/',
      region : 'Caribbean',
      score : 0,
      age_group : '21-30',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      first_name : 'James',
      last_name : 'Elton',
      image : 'https://api.adorable.io/avatars/1249/',
      region : 'Caribbean',
      score : 0,
      age_group : '18-20',
      createdAt : new Date(),
      updatedAt : new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
};
