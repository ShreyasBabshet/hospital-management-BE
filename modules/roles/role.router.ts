import express from 'express';
const router = express.Router();
import { Request, Response } from 'express';
import { roleService } from './role.service';


router.post('/addRole', async (req: Request, res: Response) => {
    await roleService.assignRole(req.body);
    res.status(200).json({
        message: 'Role assigned successfully'
    })
})

module.exports = router;