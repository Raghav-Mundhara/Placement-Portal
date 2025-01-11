import express from 'express';
import zod from 'zod';
import { Student } from '../models/student.model.js';
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
export const studentRouter = express.Router();

export const IntrestedInEnum = zod.enum([
    "PLACEMENT",
    "HIGHER_STUDIES",
    "NOT INTRESTED",
]);
const registerSchema = zod.object({
    name: zod.string(),
    vesEmail: zod.string().email(),
    email: zod.string().email(),
    password: zod.string(),
    rollNo: zod.string(),
    division: zod.string(),
    dob: zod.string(),
    contactNumber: zod.number(),
    cgpa: zod.number(),
    placed: zod.boolean(),
    placementNumber: zod.number(),
    PRN: zod.string(),
    placedAt: zod.string(),
    semCGPA: zod.array(zod.object({
        sem: zod.number(),
        cgpa: zod.number()
    })),
    kts: zod.array(zod.object({
        sem: zod.number(),
        count : zod.number()
    })),
    marksInPercentage: zod.number(),
    intrestedIn :IntrestedInEnum,
    isProfileVerified: zod.boolean()
})
studentRouter.get('/', (req, res) => {
    res.send('Student Route');
});

studentRouter.post('/register',async (req, res) => {
    const parseResult = registerSchema.safeParse(req.body);
    if (!parseResult.success) {
        res.status(400).send(parseResult.error);
        return;
    }
    try {
        const student = new Student(req.body);
        await student.save();
        return res.status(200).json("Student Registered Successfully");
    } catch (error) {
        return res.status(400).json(error);
    }
});

studentRouter.get('/all', async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(400).json(error);
    }
});