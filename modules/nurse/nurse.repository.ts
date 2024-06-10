import { Nurse } from "./nurse.model";
import { Request, Response } from 'express';
import generator from 'generate-password';
import { User } from "../user/models/user.model";
import { userService } from "../user/services/user.service";
import { roleService } from "../roles/role.service";

export const addNurse = async (req: Request, res: Response) => {
    try {
        const { email, firstName, lastName, mobileNumber, yearsOfExperience } = req.body;
        const password = generator.generate({
            length: 10,
            numbers: true,
        })
        const hashedPassword = await userService.encryptPassword(password);
        const user = await User.create({
            email,
            password: hashedPassword
        })
        await roleService.assignRole({
            roleName: 'nurse',
            userId: user.id
        })
        const nurse = await Nurse.create({
            email,
            firstName,
            lastName,
            mobileNumber,
            yearsOfExperience,
            userId: user.id
        })
        res.status(200).json({
            nurse
        });
    }
    catch (error) {
        res.status(400).json({ error });
    }
}
export const editNurse = async (req: Request, res: Response) => {
    try {
        const nurseId = req.params.id;
        const nurse = Nurse.findByPk(nurseId);
        if (!nurse) {
            res.status(400).json({
                error: 'Invalid nurse Id'
            })
        }
        nurse.update(req.body)
        res.status(200).json({
            message: 'Nurse Updated successfully'
        })
    }
    catch (error) {
        res.status(400).json({
            error
        })
    }
}

export const deleteNurse = async (req: Request, res: Response) => {
    try {
        const nurseId = req.params.id;
        const nurse = await Nurse.findByPk(nurseId);
        if (!nurse) {
            res.status(400).json({
                error: 'Nurse not found'
            })
        }
        else {
            await nurse.destroy();
            res.status(200).json({
                message: 'Nurse deleted successfully'
            })
        }
    }
    catch (error) {
        res.status(400).json({
            error
        })
    }
}
export const getNurseById = async (req: Request, res: Response) => {
    try {
        const nurseId = req.params.id;
        const nurse = await Nurse.findOne({
            where: {
                id: nurseId
            }
        })
        res.status(200).json({ nurse });
    }
    catch (error) {
        res.status(400).json({
            error
        })
    }
}
export const getAllNurse = async (req: Request, res: Response) => {
    try {
        const nurses = await Nurse.findAll();
        res.status(200).json({ nurses });
    }
    catch (error) {
        res.status(400).json({ error });
    }
}

export const assignDoctorToNurse = async (nurseId: string, doctorId: string) => {
    try {
        const nurse = await Nurse.findByPk(nurseId);
        await nurse.update({
            doctorId
        })
    }
    catch (error) {
        console.log(error);
    }
}