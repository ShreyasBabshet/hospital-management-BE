import { DataTypes } from "sequelize";
import { sequelizeConnection } from "../../config/dbConfig";
import { User } from "../user/models/user.model";
import { Nurse } from "../nurse/nurse.model";
const Sequelize = require("sequelize");

export const Doctor = sequelizeConnection.define("doctors", {
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
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mobileNumber: {
        type: Sequelize.STRING,
        allowNull: false
    },
    specialization: {
        type: Sequelize.STRING,
        allowNull: false
    },
    yearsOfExperience: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.UUID,
        references: {
            model: User,
            key: "id"
        }
    }
})

Doctor.belongsTo(User);
Doctor.hasMany(Nurse)