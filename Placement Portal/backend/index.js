import express from 'express';
import { connectDB } from './db/db.js';
import dotenv from "dotenv";
import { adminRouter } from './routes/admin.js';
import { studentRouter } from './routes/student.js';
dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
connectDB();

app.use('/admin',adminRouter);
app.use('/student',studentRouter);
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});