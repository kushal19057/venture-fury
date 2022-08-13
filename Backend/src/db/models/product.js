/* eslint-disable camelcase */
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.User, { foreignKey: "user_id", });
    }
  }
  Product.init({
    product_id: {
      primaryKey: true,
      type: DataTypes.STRING(40)
    },
    user_id: {
      type: DataTypes.STRING(40),
      reference: {
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
      type: DataTypes.INTEGER
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: Date.now,
    },
    updated_at: {
      type: DataTypes.DATE,
      defaultValue: Date.now,
    },
  }, {
    sequelize,
    modelName: "Product",
    tableName: "products",
    createdAt: "created_at",
    updatedAt: "updated_at"
  });
  return Product;
};
