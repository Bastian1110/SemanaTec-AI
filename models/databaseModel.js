const Sequelize = require("sequelize");

const sequelize = require("../utils/database");

const Usuario = sequelize.define("usuario", {
  usuario: {
    type: Sequelize.STRING(40),
    allowNull: false,
    primarykey: true,
  },
  password: {
    type: Sequelize.STRING(20),
    allowNull: false,
  },
});

module.exports = Usuario;
