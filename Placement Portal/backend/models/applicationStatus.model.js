import mongoose from "mongoose";
import { ApplicationStatus } from "../utils/placementEnums";
const applicationStatusModel = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    companyId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true
    },
    status: {
        type: String,
        enum: ApplicationStatus,
        default: 'Applied'
    },
});

export default mongoose.model('ApplicationStatus', applicationStatusModel);