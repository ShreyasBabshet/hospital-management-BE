import { DataTypes } from "sequelize";
import { sequelizeConnection } from "../../config/dbConfig";
import { User } from "../user/models/user.model";
import { Doctor } from "../doctor/doctor.model";
const Sequelize = require("sequelize");

export const Nurse = sequelizeConnection.define("nurses", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
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
    },
    doctorId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: Doctor,
            key: "id"
        }
    }
})

Nurse.belongsTo(User);



