import express from 'express';
import {Admin} from '../models/admin.model.js';
import { InterviewExperience } from '../models/interviewExperience.model.js';
import jwt from 'jsonwebtoken';
import zod  from 'zod';
export const adminRouter = express.Router();

const adminLoginSchema = zod.object({
    username: zod.string().email(),
    password: zod.string(),
});

const adminRegisterSchema = zod.object({
    username: zod.string().email(),
    password: zod.string(),
});

adminRouter.post('/register', async (req, res) => {
    console.log(req.body);
    const { username, password } = req.body;
    const parseResult = adminRegisterSchema.safeParse(req.body);
    if(!parseResult.success){
        return res.status(400).send(parseResult.error);
    }
    try{
        const admin = new Admin({
            username: username,
            password: password,
        });
        await admin.save();
        return res.status(201).send(admin);
    }catch(error){
        return res.status(400).send(error);
    }
});

adminRouter.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const parseResult = adminLoginSchema.safeParse(req.body);
    if(!parseResult.success){
        return res.status(400).send(parseResult.error);
    }
    try{
        const admin = await Admin.findOne({
                username: username,
                password: password,
            });
        if(!admin){
            res.status(404).send("Admin not found");
            return;
        }
        const token = jwt.sign({ username: username }, process.env.JWT_SECRET);
        req.headers.authorization = "Token " + token;
        return res.status(200).send("Token " + token);
    }catch(error){
        return res.status(400).send(error);
    }
});

adminRouter.get('/experiences', async (req, res) => {
    try {
        const experiences = await InterviewExperience.find().populate('studentId', 'name');

        return res.status(200).json(experiences);
    } catch(error){
        res.status(500).json({error: "Failed to fetch experience", details: error.message });
    }

});