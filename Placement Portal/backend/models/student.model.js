import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
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
    placedAt: {
        type: String,
        default: null
    }
});

export const Student = mongoose.model("Student", studentSchema);