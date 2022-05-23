import React from 'react'

export default function Answers(props) {
    return (
        <div className="answers--text">
            <div className="answers--button">{props.answers.answer1} </div>
            <div className="answers--button">{props.answers.answer2} </div>
            <div className="answers--button">{props.answers.answer3} </div>
            <div className="answers--button">{props.answers.answer4}</div>
        </div>
    )
}