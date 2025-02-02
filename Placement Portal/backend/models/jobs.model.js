import mongoose from "mongoose";
import { Branches, Status } from "../utils/placementEnums.js";

const jobsSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: Status, // ['DREAM', 'NON_DREAM']
        required: true
    },
    description:{
        type: String
    },
    role: [{
        rolename: {
            type: String, // 'SDE', 'Analyst', 'Consultant'
            required: true
        },
        ctc: {
            type: String, // '10 LPA', '15 LPA'
            required: true
        },
        studentsEnrolled: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'Student',
            required: false
        },
    }],
    doc: {
        type: String,
        required: false
    },
    domain: {
        type: String,
        required: false
    },
    eligibility: {
        dead_kts: {
            type: Number,
            required: true
        },
        live_kts: {
            type: Number,
            required: true
        },
        cgpa: {
            type: Number,
            required: true
        },
        be_percentage: {
            type: Number,
            required: true
        },
        percentage_12: {
            type: Number,
        },
        percentage_10: {
            type: Number,
        },
        cgpa_12: {
            type: Number,
        },
        cgpa_10: {
            type: Number,
        },
        branches_allowed: {
            type: [String],
            enum: Branches,
            required: true
        },
        gap: {
            type: Boolean,
            required: true
        }
    },
    isBlocking:{
        type: Boolean,
        default: false
    }
})

export const Jobs = mongoose.model('Jobs', jobsSchema);