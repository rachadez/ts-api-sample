import express from 'express';
import * as userService from '../services/userService'

const router = express.Router();

router.get('/users', userService.getUser);
router.post('/users', userService.createUser);

export default router;