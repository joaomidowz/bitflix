'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    try {
      await queryInterface.bulkInsert('categories', [
        { name: 'Tecnologias Back-end', position: 1, created_at: new Date(), updated_at: new Date() },
        { name: 'Tecnologias Front-end', position: 2, created_at: new Date(), updated_at: new Date() },
        { name: 'Ferramentas de Desenvolvimento', position: 3, created_at: new Date(), updated_at: new Date() },
        { name: 'Soft-skills', position: 4, created_at: new Date(), updated_at: new Date() },
        { name: 'Carreira', position: 5, created_at: new Date(), updated_at: new Date() },
      ], {});
    } catch (error) {
      console.error('Error seeding categories:', error);
      throw error; // Propagar o erro para cima
    }
  },

  async down(queryInterface, Sequelize) {
    try {
      await queryInterface.bulkDelete('categories', null, {});
    } catch (error) {
      console.error('Error reverting seed for categories:', error);
      throw error; // Propagar o erro para cima
    }
  }
};
