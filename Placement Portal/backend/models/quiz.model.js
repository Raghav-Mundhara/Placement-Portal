import mongoose from "mongoose";

const quizSchema = new mongoose.Schema({
    topic :{
        type: String,
        required: true
    },
    questions : [{
        question : {
            type: String,
            required: true
        },
        options: {
            a: { type: String, required: true },
            b: { type: String, required: true },
            c: { type: String, required: true },
            d: { type: String, required: true }
        },
        answer : {
            type: String,
            required: true
        },
        explanation : {
            type: String,
            required: true
        },
        code:{
            type: String,
            required: false
        }
    }]
});

export const Quiz = mongoose.model('Quiz', quizSchema, 'quizess');