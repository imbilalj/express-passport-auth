import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
  res.send({ message: 'User created!' });
});

export default router;
