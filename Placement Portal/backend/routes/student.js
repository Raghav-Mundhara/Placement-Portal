import express from 'express';
import zod from 'zod';
import { Student } from '../models/student.model.js';
import { InterviewExperience } from '../models/interviewExperience.model.js'
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import mongoose from 'mongoose';
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

const interviewExperienceSchema = zod.object({
    studentId: zod.string(),
    year: zod.string(),
    companyName: zod.string(),
    jobRole: zod.string(),
    experience: zod.string()
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

studentRouter.post('/interview-exp', async (req, res) => {
    const parseResult = interviewExperienceSchema.safeParse(req.body);
   console.log(parseResult);
    if(!parseResult.success){
        return res.status(400).json({ error: parseResult.error.errors });
        
    }

    try {
        const {studentId, year, companyName, jobRole, experience } = parseResult.data;
        
        const newExperience = new InterviewExperience({
            studentId,
            year,
            companyName,
            jobRole,
            experience 
        });
        await newExperience.save();
        return res.status(200).json({msg: "Interview experience submitted succesfully!"});
    } catch(error){
        return res.status(400).json(error);
    }
    
});

studentRouter.get('/experiences', async (req, res) => {
    try {
        const experiences = await InterviewExperience.find().populate('studentId', 'name');

        return res.status(200).json(experiences);
    } catch(error){
        res.status(500).json({error: "Failed to fetch experience", details: error.message });
    }

});

studentRouter.get('/experiences/:id', async (req, res) => {

    try{
        const { id } = req.params;

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({error: "Invalid id format"})
        }

        const experience = await InterviewExperience.findById(id).populate('studentId', 'name');
        if(!experience){
            return res.status(404).json({error: "experience not found"});
        }
        return res.status(200).json(experience);
    } catch(error){
        return res.status(500).json({error: "Server error"});
    }
});