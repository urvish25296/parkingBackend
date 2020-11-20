const Sequelize = require("sequelize");

const sequalize = new Sequelize("parking", "root", "root", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequalize;
