import { Role } from "./role.model";

export const addRole = async (roleDetails: { roleName: string, userId: string }) => {
    try {
        const { roleName, userId } = roleDetails;
        await Role.create({
            roleName,
            userId
        })
    }
    catch (error) {
        console.log(error)
    }
}