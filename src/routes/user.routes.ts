import express from 'express';
import { createUserHandler } from '../controllers/user.controller';
import { CreateUserSchema } from '../schemas/user.schema';
import { validateRequest } from '../middlewares/request-validator.middleware';

const router = express.Router();

router.post('/', validateRequest(CreateUserSchema), createUserHandler);

export default router;
