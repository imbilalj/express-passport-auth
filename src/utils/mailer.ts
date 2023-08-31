import nodemailer from 'nodemailer';
import logger from './logger';

const transporter = nodemailer.createTransport({
  host: process.env.MAILER_HOST,
  port: parseInt(process.env.MAILER_PORT as string),
  secure: process.env.NODE_ENV === 'production',
  auth: {
    user: process.env.MAILER_USER,
    pass: process.env.MAILER_PASS,
  },
});

export const sendEmail = async (payload: nodemailer.SendMailOptions) => {
  try {
    await transporter.sendMail(payload);
  } catch (error) {
    logger.error('Error while sending email');
  }
};
