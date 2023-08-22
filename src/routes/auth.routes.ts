import express from 'express';

const router = express.Router();

router.post('/login', (req, res) => {
  res.send({ message: 'User logged in' });
});

export default router;
