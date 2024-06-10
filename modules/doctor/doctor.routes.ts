import express from 'express';
import { addDoctor, deleteDoctor, editDoctor, getAllDoctors, getDoctorById, assignNurseToDoctor } from './doctor.repository';
const router = express.Router();

router.post('/addDoctor', addDoctor)
router.get('/getAllDoctors', getAllDoctors)
router.get('/getDoctorById/:id', getDoctorById)
router.delete('/removeDoctor/:id', deleteDoctor)
router.patch('/editDoctor/:id', editDoctor)
router.post('/assignNurse/:id', assignNurseToDoctor)

module.exports = router;