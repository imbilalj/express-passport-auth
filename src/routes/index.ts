import express from 'express';
import userRouter from './user.routes';
import authRouter from './auth.routes';

const router = express.Router();

router.get('/', (req, res) => {
  res.sendStatus(200);
});

router.use('/user', userRouter);
router.use('/auth', authRouter);

export default router;
