import mongoose from "mongoose";
import { Branches, Status } from "../utils/placementEnums";

const jobsSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: Status,
        required: true
    },
    role: [{
        
        rolename:{
            type: String,
            required: true
        },
        ctc: {
            type: String,
            required: true
        }
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
            required: true
        },
        percentage_10: {
            type: Number,
            required: true
        },
        cgpa_12: {
            type: Number,
            required: true
        },
        cgpa_10: {
            type: Number,
            required: true
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

    }
    
}) 

export const Jobs = mongoose.model('Jobs', jobsSchema);