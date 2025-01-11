import mongoose from "mongoose";
import { IntrestedIn } from "../utils/placementEnums.js";
import { boolean } from "zod";

const studentSchema = new mongoose.Schema({
    vesEmail:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    dob:{
        type: String,
        required : true
    },
    contactNumber:{
        type: Number,
        required: true
    },
    rollNo: {
        type: String,
        required: true
    },
    division: {
        type: String,
        required: true
    },
    cgpa: {
        type: Number,
        required: true
    },
    placed: {
        type: Boolean,
        default: false
    },
    placementNumber:{
        type: Number,
        default: null
    },
    PRN:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    placedAt: {
        type: String,
        default: null
    },
    semCGPA:[
        {
        sem: Number,
        cgpa: Number
        }
    ],
    kts:[
        {
            sem: Number,
            count: Number
        }
    ],
    marksInPercentage:{
        type: Number,
        required: true
    },
    intrestedIn:{
        type: [String],
        enum: IntrestedIn,
        required: true
    },
    isProfileVerified : {
        type: Boolean,
        default : false
    }
});

export const Student = mongoose.model("Student", studentSchema);