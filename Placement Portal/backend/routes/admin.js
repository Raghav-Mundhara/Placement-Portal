import express from 'express';
import {Admin} from '../models/admin.model.js';
import jwt from 'jsonwebtoken';
import zod  from 'zod';
import { adminMiddleware } from '../middlewares/admin.js';
import { Student } from '../models/student.model.js';
import { Jobs } from '../models/jobs.model.js';
import { Status, Branches } from '../utils/placementEnums.js';
export const adminRouter = express.Router();

export const StatusEnum = zod.enum([
     'DREAM',
     'NON_DREAM'
]) 

export const BranchesEnum = zod.enum([
     'CMPN',
     'INFT',
     'EXTC',
     'AIDS',
     'ECS',
     'AURO',
     'MCA'
])

const adminLoginSchema = zod.object({
    username: zod.string().email(),
    password: zod.string(),
});

const adminRegisterSchema = zod.object({
    username: zod.string().email(),
    password: zod.string(),
});

const jobsSchema = zod.object({
    //id: zod.string().min(1, "Job ID is required"),
    companyName: zod.string().min(1, "Company name is required"),  
    status: StatusEnum, 
    role: zod.array(
      zod.object({
        rolename: zod.string().min(1, "Role name is required"), 
        ctc: zod.string().min(1, "CTC is required") 
      })
    ),
    doc: zod.string().optional(),  
    domain: zod.string().optional(),  
    eligibility: zod.object({
      dead_kts: zod.union([zod.number().min(0), zod.null()]),  
      live_kts: zod.union([zod.number().min(0), zod.null()]),  
      cgpa: zod.union([zod.number().min(0), zod.null()]),  
      be_percentage: zod.union([zod.number().min(0), zod.null()]),  
      percentage_12: zod.union([zod.number().min(0), zod.null()]),  
      percentage_10: zod.union([zod.number().min(0), zod.null()]),  
      cgpa_12: zod.union([zod.number().min(0), zod.null()]),  
      cgpa_10: zod.union([zod.number().min(0), zod.null()]),  
      branches_allowed: zod.union([zod.array(BranchesEnum), zod.null()]),  
      gap: zod.union([zod.boolean(), zod.null()])  
    })
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

adminRouter.post('/verifyStudent/:id',adminMiddleware,async(req,res)=>{
    console.log(req.params.id);
    const studentId=req.params.id;
    try {
        const student=await Student.findById(studentId);
        if(!student){
            return res.status(404).send("Student not found");
        }
        if(student.isProfileVerified){
            return res.status(400).send("Student already verified");
        }
        if(req.body.isProfileVerified){
            student.isProfileVerified=true;
            await student.save();
        }
        else{
            await Student.findByIdAndDelete(studentId);
            return res.status(400).send("Student not verified");
        }
    } catch (error) {
        return res.status(400).send(error);
    }
    return res.status(200).send("Student Verified");
})

adminRouter.get('/experiences', async (req, res) => {
    try {
        const experiences = await InterviewExperience.find().populate('studentId', 'name');

        return res.status(200).json(experiences);
    } catch(error){
        res.status(500).json({error: "Failed to fetch experience", details: error.message });
    }});

adminRouter.post('/add-job', async (req, res) => {
    const parseResult = jobsSchema.safeParse(req.body);
    
    if (!parseResult.success) {
        return res.status(400).json({ error: "Invalid job details", details: parseResult.error});
    }

    try {
        const job = new Jobs(parseResult.data);
        await job.save();
        return res.status(200).json(job);
    } catch(error){
        return res.status(500).json({error: "Failed to add job", details: error.message });
    }

});

adminRouter.put('/update-job', async (req, res) => {
    const parseResult = jobsSchema.safeParse(req.body);

    if(!parseResult.success){
        return res.status(400).json({error: "Invalid job details", details: parseResult.error});
    }
    

    const { companyName, ...updatedData } = parseResult.data;
    console.log(companyName);

    if (!companyName) {
        return res.status(400).json({ error: "Job Id is required" });
    }

    try {
        const updatedJob = await Jobs.findOneAndUpdate(
            {companyName: companyName}, 
            { $set: updatedData },
            { new: true }
        );

        if(!updatedJob){
            return res.status(400).json({error: "Job not found"});
        }
        return res.status(500).json("message: Job updated successfully");
    } catch(error){
        return res.status(500).json({error: "Failed to update job", details: error.errors});
    }
 
});