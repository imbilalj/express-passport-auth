import mongoose from 'mongoose';
import logger from './logger';

export const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    logger.info('Connected to DB successfully');
  } catch (error) {
    logger.error(`Error connecting to DB: ${error}`);
    process.exit(1);
  }
};
