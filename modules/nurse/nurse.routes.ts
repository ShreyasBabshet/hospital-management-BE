import express from 'express';
import { addNurse, deleteNurse, getAllNurse, getNurseById } from './nurse.repository';
import { Request, Response } from 'express';
import { editDoctor } from '../doctor/doctor.repository';
import { nurseService } from './nurse.service';
const router = express.Router();

router.post('/addNurse', addNurse);
router.patch('/editNurse', editDoctor);
router.delete('/removeNurse/:id', deleteNurse);
router.get('/getNurseById/:id', getNurseById);
router.get('/getAllNurse', getAllNurse);
router.post('/assignDoctor/:id', async (req: Request, res: Response) => {
    try {
        const { doctorId } = req.body;
        const data = {
            nurseId: req.params.id,
            doctorId
        }
        await nurseService.assignDoctor(data)
        res.status(200).json({
            message: 'Doctor assigned successfully!'
        })
    }
    catch (error) {
        res.status(400).json({ error });
    }
})

module.exports = router;