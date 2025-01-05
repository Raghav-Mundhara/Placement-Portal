import express from 'express';

const studentRouter = express.Router();

studentRouter.get('/', (req, res) => {
    res.send('Student Route');
});