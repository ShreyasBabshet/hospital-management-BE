import { addRole } from "./role.repository"

const assignRole = async (roleDetails: { roleName: string, userId: string }) => {
    await addRole(roleDetails)
}

export const roleService = {
    assignRole
}