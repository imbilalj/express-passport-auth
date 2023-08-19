import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT;

app.get('/', (req, res) => {
  res.json({ message: 'hello world!' });
});

app.listen(PORT, () => {
  console.log(`App is listening on port: ${PORT}`);
});