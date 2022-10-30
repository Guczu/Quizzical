import React from 'react'
import Questions from "./Questions"
import {nanoid} from 'nanoid'
import App from '../App'

export default function Quiz(props) {
    const showQuestions = props.questions.map( prevQuestion => {
        return (
                <Questions
                    key={nanoid()}
                    id={prevQuestion.id}
                    question={prevQuestion.question}
                    answers={prevQuestion.answers}
                    handlePress={props.handlePress}
                />
        )
    })

    return (
        <div className="quiz--container">
            {showQuestions}
            {!props.finished
            ? <button
                className="answers--button score--button"
                onClick={props.showScore}
            >Show score</button>
                : <React.Fragment></React.Fragment>}
            {props.finished && <div><br /><button className="answers--button score--button" onClick={props.handleNewGame}>New Quiz</button><p className="score--text">Score: {props.score} / 5</p></div>}
            {!props.swapPage && <App />}
        </div>
    )
}