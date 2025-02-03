import mongoose from "mongoose";
import { IntrestedIn } from "../utils/placementEnums.js";

const studentSchema = new mongoose.Schema({
    vesEmail: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true
    },
    middleName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    dob: {
        type: String,
        required: true
    },
    contactNumber: {
        type: Number,
        required: true,
        unique: true
    },
    alternativeContactNumber: {
        type: Number,
        required: false
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
    placementNumber: {
        type: Number,
        default: null,
        unique: true
    },
    PRN: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    placedAt: {
        type: String,
        default: null
    },
    semCGPA: [
        {
            sem: Number,
            cgpa: Number
        }
    ],
    kts: [
        {
            sem: Number,
            count: Number,
        }
    ],
    liveKTs: {
        type: Number,
        required: true
    },
    deadKTs: {
        type: Number,
        required: true
    },
    marksInPercentage: {
        type: Number,
        required: true
    },
    percentageIn12th: {
        type: Number,
        required: false
    },
    percentageIn10th: {
        type: Number,
        required: false
    },
    CET: {
        type: String,
        required: false
    },
    JEE: {
        type: String,
        required: false
    },
    gap: {
        type: Boolean,
        required: true
    },
    DiplomaPercentage: {
        type: Number,
        required: false
    },
    intrestedIn: {
        type: [String],
        enum: IntrestedIn,
        required: true
    },
    isProfileVerified: {
        type: Boolean,
        default: false
    }
});

export const Student = mongoose.model("Student", studentSchema);