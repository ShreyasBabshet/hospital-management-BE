import { roleService } from "../../roles/role.service";
import { User } from "../models/user.model";
import { userService } from "../services/user.service";
import {
    Request, Response
} from "express";
export const addAdmin = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const hashedPassword = await userService.encryptPassword(password);
        console.log(hashedPassword)
        const user = await User.create({
            email,
            password: hashedPassword
        })
        await roleService.assignRole({
            roleName: 'admin',
            userId: user.id
        })
        res.status(200).json({
            user
        })
    }
    catch (error) {
        res.status(400).json({
            error
        })
    }
}