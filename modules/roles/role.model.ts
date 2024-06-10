import { DataTypes } from "sequelize";
import { sequelizeConnection } from "../../config/dbConfig";
import { User } from "../user/models/user.model";

export const Role = sequelizeConnection.define("roles", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    roleName: {
        type: new DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        references: {
            model: User,
            key: "id"
        }
    }

})
Role.belongsTo(User)