'use strict';
const faker = require('faker');

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Notes', [
      {
        userId: 1,
        notebookId: 5,
        title: 'React-Redux',
        content:'123',
        createdAt: new Date(),
				updatedAt: new Date(),
      },
      {

        userId: 1,
        notebookId: 5,
        title: 'Functions',
        content:'123',
        createdAt: new Date(),
				updatedAt: new Date(),
      },
      {
        
        userId: 1,
        notebookId: 5,
        title: 'Recursion',
        content:'123',
        createdAt: new Date(),
				updatedAt: new Date(),
      },
      {
        
        userId: 1,
        notebookId: 5,
        title: 'Sequelize',
        content:'123',
        createdAt: new Date(),
				updatedAt: new Date(),
      },
      {
        
        userId: 1,
        notebookId: 1,
        title: 'Places I want to visit',
        content:'123',
        createdAt: new Date(),
				updatedAt: new Date(),
      },
      {
        
        userId: 1,
        notebookId: 6,
        title: 'Deserts',
        content:'123',
        createdAt: new Date(),
				updatedAt: new Date(),
      },
      {
        
        userId: 1,
        notebookId: 6,
        title: 'Salads',
        content:'123',
        createdAt: new Date(),
				updatedAt: new Date(),
      },
      {
        
        userId: 1,
        notebookId: 6,
        title: 'Pasta',
        content:'123',
        createdAt: new Date(),
				updatedAt: new Date(),
      },
      {   
        userId: 1,
        notebookId: 4,
        title: 'Groceries for 9/12',
        content:'123',
        createdAt: new Date(),
				updatedAt: new Date(),
      },
      {      
        userId: 1,
        notebookId: 4,
        title: 'Groceries for 9/19',
        content:'123',
        createdAt: new Date(),
				updatedAt: new Date(),
      },
      {
        userId: 1,
        notebookId: 4,
        title: 'Groceries for 9/26',
        content:'123',
        createdAt: new Date(),
				updatedAt: new Date(),
      }
    
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkDelete('Notes', null, {});
    
  }
};
