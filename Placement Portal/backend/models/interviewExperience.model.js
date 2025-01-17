import mongoose from "mongoose";

const interviewExperienceSchema = new mongoose.Schema(
    {
        studentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
            required: true
        },
        year: {
            type: String,
            required: true
        },
        companyName: {
            type: String,
            required: true
        },
        jobRole: {
            type: String,
            required: true
        },
        experience: {
            type: String,
            required: true
        }
    }
)

export const InterviewExperience = new mongoose.model('InterviewExperience', interviewExperienceSchema);