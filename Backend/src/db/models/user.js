/* eslint-disable camelcase */
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class User extends Model {}
  User.init({
    user_id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.STRING(40),
    },
    user_email: {
      type: DataTypes.STRING(60),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    first_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    last_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM,
      values: ["admin", "vc", "creator"],
      defaultValue: "creator"
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
    modelName: "User",
    tableName: "user",
    createdAt: "created_at",
    updatedAt: "updated_at"
  });
  return User;
};
