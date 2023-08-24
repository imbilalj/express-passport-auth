import express from 'express';
import dotenv from 'dotenv';
import logger from './utils/logger';
import { connectToDB } from './utils/db';
import router from './routes';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api', router);

connectToDB();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  logger.info(`App is listening on port: ${PORT}`);
});
