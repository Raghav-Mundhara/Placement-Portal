import mongoose from "mongoose";

const interviewExpSchema = mongoose.Schema(
    {
        companyName : {
            type: String,
            required: true,
            default: ""
        },
        studentID:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
            required: true
        },
        link:{
            type: String,
            required: true,
            default: ""
        },
    },
    {timestamps:true}
);

export const InterviewExp = mongoose.model('InterviewExp', interviewExpSchema);