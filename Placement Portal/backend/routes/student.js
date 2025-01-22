import express from 'express';
import zod from 'zod';
import { Student } from '../models/student.model.js';
import { InterviewExperience } from '../models/interviewExperience.model.js'
import bcrypt from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import mongoose from 'mongoose';
import { studentMiddleware } from '../middlewares/student.js';
import { Jobs } from '../models/jobs.model.js';
export const studentRouter = express.Router();

export const IntrestedInEnum = zod.enum([
    "PLACEMENT",
    "HIGHER_STUDIES",
    "NOT INTRESTED",
]);
const registerSchema = zod.object({
    firstName: zod.string(),
    lastName: zod.string(),
    middleName: zod.string(),
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
        count: zod.number()
    })),
    marksInPercentage: zod.number(),
    intrestedIn: IntrestedInEnum,
    isProfileVerified: zod.boolean(),
    CET: zod.string().optional(),
    JEE: zod.string().optional(),
    DiplomaPercentage: zod.number().optional(),
    liveKTs: zod.number(),
    deadKTs: zod.number(),
})
const loginSchema = zod.object({
    email: zod.string().email(),
    password: zod.string()
});
const interviewExperienceSchema = zod.object({
    studentId: zod.string(),
    year: zod.string(),
    companyName: zod.string(),
    jobRole: zod.string(),
    experience: zod.string()
});

studentRouter.get('/', (req, res) => {
    res.send('Student Route');
});

studentRouter.post('/register', async (req, res) => {
    const parseResult = registerSchema.safeParse(req.body);
    if (!parseResult.success) {
        res.status(400).send(parseResult.error);
        return;
    }
    try {
        req.body.password = bcrypt.hashSync(req.body.password, 10);
        const student = new Student(req.body);
        await student.save();
        return res.status(200).json("Student Registered Successfully");
    } catch (error) {
        return res.status(400).json(error);
    }
});

studentRouter.post('/login', async (req, res) => {
    const parseResult = loginSchema.safeParse(req.body);
    if (!parseResult.success) {
        return res.status(400).json(parseResult.error);
    }
    try {
        const { email, password } = parseResult.data;
        const student = await Student.findOne({ vesEmail: email });
        if (!student) {
            return res.status(404).json({ error: "Student not found" });
        }
        if (!bcrypt.compareSync(password, student.password)) {
            return res.status(400).json({ error: "Invalid Password" });
        }
        const token = jsonwebtoken.sign({ id: student._id }, process.env.JWT_SECRET);
        req.headers.authorization = "Token " + token;
        return res.status(200).json({ token });
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

studentRouter.post('/interview-exp', async (req, res) => {
    const parseResult = interviewExperienceSchema.safeParse(req.body);
    console.log(parseResult);
    if (!parseResult.success) {
        return res.status(400).json({ error: parseResult.error.errors });

    }

    try {
        const { studentId, year, companyName, jobRole, experience } = parseResult.data;

        const newExperience = new InterviewExperience({
            studentId,
            year,
            companyName,
            jobRole,
            experience
        });
        await newExperience.save();
        return res.status(200).json({ msg: "Interview experience submitted succesfully!" });
    } catch (error) {
        return res.status(400).json(error);
    }

});

studentRouter.get('/experiences', async (req, res) => {
    try {
        const experiences = await InterviewExperience.find().populate('studentId', 'name');

        return res.status(200).json(experiences);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch experience", details: error.message });
    }

});

studentRouter.get('/experiences/:id', async (req, res) => {

    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: "Invalid id format" })
        }

        const experience = await InterviewExperience.findById(id).populate('studentId', 'name');
        if (!experience) {
            return res.status(404).json({ error: "experience not found" });
        }
        return res.status(200).json(experience);
    } catch (error) {
        return res.status(500).json({ error: "Server error" });
    }
});

studentRouter.post('/applyJob/:id/:role', studentMiddleware, async (req, res) => {
    try {
        const { id, role } = req.params;
        const studentId = req.userID;
        const student = await Student.findById(studentId);
        if (!student) {
            return res.status(404).json({ error: "Student not found" });
        }
        const job = await Jobs.findById(id);
        if (!job) {
            return res.status(404).json({ error: "Job not found" });
        }
        const roleIndex = job.role.findIndex((r) => r.rolename === role);
        if (roleIndex === -1) {
            return res.status(404).json({ error: "Role not found" });
        }
        const studentIndex = job.role[roleIndex].studentsEnrolled.findIndex((s) => s.toString() === studentId);
        if (studentIndex !== -1) {
            return res.status(400).json({ error: "Already applied" });
        }
        const eligibility = job.eligibility;
        if (
            (student.deadKTs ?? 0) > (eligibility.dead_kts ?? 0) ||
            (student.liveKTs ?? 0) > (eligibility.live_kts ?? 0) ||
            (student.cgpa ?? 0) < (eligibility.cgpa ?? 0) ||
            (student.marksInPercentage ?? 0) < (eligibility.be_percentage ?? 0)
        ) {
            return res.status(400).json({ error: "Not eligible" });
        }

        if (
            (student.percentageIn10th ?? 0) < (eligibility.percentage_10 ?? 0) ||
            (student.percentageIn12th ?? 0) < (eligibility.percentage_12 ?? 0) ||
            (student.cgpaIn12th ?? 0) < (eligibility.cgpa_12 ?? 0)
        ) {
            return res.status(400).json({ error: "Not eligible" });
        }

        job.role[roleIndex].studentsEnrolled.push(studentId);
        await job.save();
        return res.status(200).json({ msg: "Applied successfully" });
    } catch (error) {
        return res.status(500).json({ error: "Server error" });
    }
});