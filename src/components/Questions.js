import React,{useState} from 'react'

export default function Questions(props) {

    return (
        <div>
            <p className="questions--text">{props.question}</p>
        </div>
    )
}