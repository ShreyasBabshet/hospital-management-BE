import { DataTypes } from "sequelize";
import { sequelizeConnection } from "../../../config/dbConfig";

const Sequelize = require("sequelize");

export const User = sequelizeConnection.define("users", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        autoIncreament: true,
        allowNull: false,
        primaryKey: true,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

