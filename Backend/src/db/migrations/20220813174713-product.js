'use strict';

module.exports = {
  up: async (queryInterface, DataTypes) => {
     await queryInterface.createTable('products', {
        product_id: {
          primaryKey: true,
          type: DataTypes.STRING(40)
        },
        user_id: {
          type: DataTypes.STRING(40),
          references: {
            model: "users",
            key: "user_id"
          },
          onDelete: "CASCADE"
        },
        product_name: {
          allowNull: false,
          type: DataTypes.STRING(60)
        },
        short_desc: {
          type: DataTypes.TEXT
        },
        long_desc: {
          type: DataTypes.TEXT
        },
        video_url: {
          type: DataTypes.TEXT
        },
        vote_count: {
          type: DataTypes.INTEGER,
          defaultValue: 0
        },
        created_at: {
          type: DataTypes.DATE,
          defaultValue: Date.now,
        },
        updated_at: {
          type: DataTypes.DATE,
          defaultValue: Date.now,
        },
      },
    );
  },

  down: async (queryInterface, DataTypes) => {
     await queryInterface.dropTable('products');
  }
};
