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
        options : [{
            type: String,
            required: true
        }],
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

const Quiz = mongoose.model('Quiz', quizSchema);