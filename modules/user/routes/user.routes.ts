import express from 'express';
import { addAdmin } from '../repository/user.repository';
const router = express.Router();

router.post('/addAdmin', addAdmin);

module.exports = router;