import express from 'express';
import axios from 'axios';
import { Quiz } from '../models/quiz.model.js';

const quizRouter = express.Router();

const getQuestions = async (req, res) => {
    const { topic } = req.params;

    if (!topic) {
        return res.status(400).json({ message: "Topic is required" });
    }

    try {
        if (topic === "aptitude") {

            const aptitudeQuesSet = new Set();
            while (aptitudeQuesSet.size < 25) {
                const response = await axios.get('https://aptitude-api.vercel.app/Random');
                aptitudeQuesSet.add(response.data);
            }
            //console.log(aptitudeQues);  

            const aptitudeQues = [...aptitudeQuesSet];
            const result = aptitudeQues.map(convertToModelFormat);
            return res.json(result);
        } else {

            const quiz_topic = await Quiz.findOne({ topic: topic });

            if (!quiz_topic) {
                return res.status(404).json({ message: `No questions found for topic: ${topic}` });
            }

            const questions = quiz_topic.questions;
            const random_ques = generateRandomQuestion(questions);


            return res.json(random_ques);
        }
    } catch (error) {
        console.error('Error fetching quiz questions:', error);
        return res.status(500).json({ message: "Server error" });
    }
};

const generateRandomQuestion = (questions) => {
    const random_indexes = new Set();
    while (random_indexes.size < 25) {
        const idx = Math.floor(Math.random() * questions.length)
        random_indexes.add(idx);
    }

    const randomQuestions = Array.from(random_indexes).map(index => questions[index]);

    return randomQuestions;
}



quizRouter.get('/:topic', getQuestions);

const convertToModelFormat = (data) => {
    return {
        question: data.question,
        code: "",  // No code in the given response, so keeping it empty
        options: {
            a: data.options[0],
            b: data.options[1],
            c: data.options[2],
            d: data.options[3]
        },
        answer: Object.keys({ a: data.options[0], b: data.options[1], c: data.options[2], d: data.options[3] })
            .find(key => ({ a: data.options[0], b: data.options[1], c: data.options[2], d: data.options[3] })[key] === data.answer),
        explanation: data.explanation
    };
};
export default quizRouter;
