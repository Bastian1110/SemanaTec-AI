const Sequelize = require("sequelize");
const sequelize = new Sequelize("semanatec", "admin", "chikimiau", {
  dialect: "mysql",
  host: "database-1.cqcsi0najb8u.us-east-1.rds.amazonaws.com",
  define: {
    timestamps: false,
    freezeTableName: true,
  },
});

module.exports = sequelize;
