import express, { Request, Response } from 'express';
import { createRequest } from './replace_requests.repository';
const router = express.Router();

router.post('/addRequest', async (req: Request, res: Response) => {
    try {
        await createRequest(req.body);
    }
    catch (error) {
        console.log(error);
    }
})

module.exports = router;