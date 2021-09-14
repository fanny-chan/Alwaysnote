'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Notebooks', [
        {
        
        userId: 1,
        title: 'Travel',
        createdAt: new Date(),
				updatedAt: new Date(),

      },
      {
        userId: 1,
        title: 'Recipes',
        createdAt: new Date(),
				updatedAt: new Date(),
      },
      {
       
        userId: 1,
        title: 'Stonks',
        createdAt: new Date(),
				updatedAt: new Date(),
      },
      {
       
        userId: 1,
        title: 'Groceries for the week',
        createdAt: new Date(),
				updatedAt: new Date(),
      },

      {
      
        userId: 1,
        title: 'App Academy',
        createdAt: new Date(),
				updatedAt: new Date(),
      },
      {
       
        userId: 1,
        title: 'Colleges',
        createdAt: new Date(),
				updatedAt: new Date(),
      },
    
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Notebooks", null, );
  }
};
