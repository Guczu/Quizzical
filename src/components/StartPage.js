import React from 'react'

export default function StartPage(props) {
    return (
        <div className="startpage--container">
            <p className="startpage--title">Quizzical</p>
            <button className="startpage--button" onClick={props.handleSwap}>Start quiz</button>
        </div>
    )
}