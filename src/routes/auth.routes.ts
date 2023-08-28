import express from 'express';
import { validateRequest } from '../middlewares/request-validator.middleware';
import { LoginSchema } from '../schemas/auth.schema';
import { loginUserHandler } from '../controllers/auth.controller';

const router = express.Router();

router.post('/login', validateRequest(LoginSchema), loginUserHandler);

export default router;
