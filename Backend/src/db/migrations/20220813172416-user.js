'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('users', { 
      user_id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(40),
      },
      user_email: {
        type: Sequelize.STRING(60),
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING(60),
        allowNull: false,
      },
      role: {
        type: Sequelize.ENUM,
        values: ["admin", "vc", "creator"],
        defaultValue: "creator"
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: Date.now,
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: Date.now,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('users');
  }
};
