import React from 'react'

export default function Questions(props) {
    const questionId = props.id

    const answers = props.answers.map( prevAnswer => {
        return (
                <div
                    key={prevAnswer.id}
                    className={prevAnswer.isPressed ? "answers--button pressed" : "answers--button"}
                    onClick={() => {
                        props.handlePress(prevAnswer.id, questionId)
                    }}
                >{prevAnswer.answer}</div>
        )
    })

    return (
        <div>
            <div className="questions--text">{props.question}</div>
                <div className="answers--text">
                    {answers}
                </div>
        </div>
    )
}