import { DataTypes } from "sequelize";
import { sequelizeConnection } from "../../config/dbConfig";
import { Doctor } from "../doctor/doctor.model";
import { Nurse } from "../nurse/nurse.model";

export const Requests = sequelizeConnection.define("requests", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    doctorId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: Doctor,
            key: "id"
        }
    },
    nurseId: {
        type: DataTypes.UUID,
        allowNull: true,
        references: {
            model: Nurse,
            key: "id"
        }
    },
    replaceFrom: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    replaceTo: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(256),
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

Requests.belongsTo(Doctor);
Requests.belongsTo(Nurse);