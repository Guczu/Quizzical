import React,{useState} from 'react'
import Questions from "./Questions";
import Answers from "./Answers";
import {nanoid} from 'nanoid'

export default function Quiz(props) {
    const [quizData, setQuizData] = useState(props.quizData)
    const [questions, setQuestions] = useState(getQuestions)
    //const [answers, setAnswers] = useState(getAnswers)
    const showQuestions = questions.map( prevQuestion => {
        return (
            <div>
                <Questions key={prevQuestion.key} question={prevQuestion.question}/>
                <Answers answers={prevQuestion.answers} />
            </div>
        )
    })

   function getQuestions() {
        const arr = []
        for(let i=0; i<5; i++) {
            arr.push({
                key: nanoid(),
                id: i,
                question: quizData.results[i].question,
                answers:
                {
                answer1: quizData.results[i].correct_answer,
                answer2: quizData.results[i].incorrect_answers[0],
                answer3: quizData.results[i].incorrect_answers[1],
                answer4: quizData.results[i].incorrect_answers[2]
                }
            })
        }
        return arr
    }

    /*function getAnswers() {
        const arr = []
        for(let i=0; i<5; i++) {
            arr.push({
                key: nanoid(),
                answer1: quizData.results[i].correct_answer,
                answer2: quizData.results[i].incorrect_answers[0],
                answer3: quizData.results[i].incorrect_answers[1],
                answer4: quizData.results[i].incorrect_answers[2]
            })
        }
        return arr
    }*/

    return (
        <div className="quiz--container">
            {showQuestions}
        </div>
    )
}