"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (t) => {
      return Promise.all([
        await queryInterface.addColumn(
          "users",
          "first_name",
          {
            type: Sequelize.STRING(50),
          },
          { transaction: t }
        ),
        await queryInterface.addColumn(
          "users",
          "last_name",
          {
            type: Sequelize.STRING(50),
          },
          { transaction: t }
        ),
      ]);
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.sequelize.transaction(async (t) => {
      return Promise.all([
        await queryInterface.removeColumn("users",
        "first_name", {
          transaction: t,
        }),
        await queryInterface.removeColumn("users",
        "last_name", {
          transaction: t,
        }),
      ]);
    });
  },
};
