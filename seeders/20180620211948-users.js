'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('users', [
      {email: "abctest1@gmail.com", password: "test1", createdAt: new Date(), updatedAt: new Date()},
      {email: "abctest2@gmail.com", password: "test2", createdAt: new Date(), updatedAt: new Date()},
      {email: "abctest3@gmail.com", password: "test3", createdAt: new Date(), updatedAt: new Date()},
      {email: "abctest4@gmail.com", password: "test4", createdAt: new Date(), updatedAt: new Date()},
      {email: "abctest5@gmail.com", password: "test5", createdAt: new Date(), updatedAt: new Date()}
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('users', null, {truncate:true})
  }
};
