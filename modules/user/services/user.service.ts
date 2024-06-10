const bycrypt = require("bcryptjs");


const encryptPassword = async (password: string) => {
    return await bycrypt.hash(password, 10);
}

export const userService = {
    encryptPassword
}