const Sequelize = require("sequelize");

export const sequelizeConnection = new Sequelize("hospital_management", "root", "admin", {
    dialect: "mysql",
    host: "localhost"
})