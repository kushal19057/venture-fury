/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");

const basename = path.basename(__filename);
// const env = process.env.NODE_ENV || "development";
const { DB_NAME, DB_HOST, DB_PASSWORD, DB_USER } = process.env;
const db = {};

// let config = require('../../../db.json')[env];
// const sequelize = new Sequelize(
//   config.database,
//   config.username,
//   config.password,
//   config
// )

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
  operatorsAliases: false,
  port: 3308,
  pool: {
    max: 10,
    min: 0,
    idle: 10000,
  },
});

fs
  .readdirSync(__dirname)
  .filter((file) => (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js"))
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
