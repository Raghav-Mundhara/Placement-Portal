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
            return res.json(aptitudeQues);
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

export default quizRouter;
