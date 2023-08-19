import express from 'express';
import dotenv from 'dotenv';
import logger from './utils/logger';

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.json({ message: 'hello world!' });
});

app.listen(PORT, () => {
  logger.info(`App is listening on port: ${PORT}`);
});
