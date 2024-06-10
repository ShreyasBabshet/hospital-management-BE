import { Doctor } from "./doctor.model";
import { Request, Response } from 'express';
import generator from 'generate-password'
import { User } from "../user/models/user.model";
import { userService } from "../user/services/user.service";
import { roleService } from "../roles/role.service";
import { nurseService } from "../nurse/nurse.service";
import { emailService } from "../common/services/mail.service";
const nodemailer = require('nodemailer');
export const addDoctor = async (req: Request, res: Response) => {
    try {
        const { email, firstName, lastName, mobileNumber, specialization, yearsOfExperience } = req.body;
        const password = generator.generate({
            length: 10,
            numbers: true
        })
        const hashedPassword = await userService.encryptPassword(password);
        await emailService.sendMail({
            email: email,
            subject: 'These are the credentials to login',
            data: `username:${email}
                   password:${password}`
        })
        const user = await User.create({
            email,
            password: hashedPassword
        })
        await roleService.assignRole({
            roleName: 'doctor',
            userId: user.id
        })
        const doctor = await Doctor.create({
            email,
            firstName,
            lastName,
            mobileNumber,
            specialization,
            yearsOfExperience,
            userId: user.id
        })
        res.status(200).json({ doctor })
    }
    catch (error) {
        res.status(400).json({ error });
    }
}
export const editDoctor = async (req: Request, res: Response) => {
    try {
        const doctorId = req.params.id;
        const doctor = await Doctor.findByPk(doctorId);
        if (!doctor) {
            res.status(400).json({
                error: 'Invalid Id'
            })
        }
        doctor.update(req.body)
        res.status(200).json({
            message: 'Doctor updated successfully'
        })
    }
    catch (error) {
        res.status(400).json({
            error
        })
    }
}
export const deleteDoctor = async (req: Request, res: Response) => {
    try {
        const doctorId = req.params.id;
        const doctor = await Doctor.findByPk(doctorId);
        await doctor.destroy()
        res.status(200).json({
            message: 'Doctor deleted successfully'
        })
    }
    catch (error) {
        res.status(400).json({ error });
    }
}
export const getAllDoctors = async (req: Request, res: Response) => {
    try {
        const doctors = await Doctor.findAll()
        res.status(200).json({
            doctors
        })
    }
    catch (error) {
        res.status(400).json({
            error
        })
    }
}

export const getDoctorById = async (req: Request, res: Response) => {
    try {
        const doctorId = req.params.id;
        const doctor = await Doctor.findOne({ where: { id: doctorId } })
        res.status(200).json({
            doctor
        })
    }
    catch (error) {
        res.status(400).json({ error });
    }
}

export const assignNurseToDoctor = async (req: Request, res: Response) => {
    try {
        const doctorId = req.params.id;
        const nurseId = req.body.nurseId;
        const data = { nurseId, doctorId }
        await nurseService.assignDoctor(data);
        res.status(200).json({
            message: 'Nurse allocated to doctor'
        })
    }
    catch (error) {
        res.status(400).json({ error });
    }
}

export const raiseReplaceRequest = async (req: any, res: any) => {
    try {
        const { replaceFrom, replaceTo, description } = req.body
    }
    catch (error) {

    }
}