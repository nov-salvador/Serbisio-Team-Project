import {Router} from 'express';
import { loginUser } from '../controllers/Auth.js';

const router = new Router();

router.post("/login", loginUser);

export default router;