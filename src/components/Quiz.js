import React,{useState, useEffect} from 'react'

export default function Quiz(props) {
    const [quizData, setQuizData] = useState({})

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&category=27&difficulty=easy&type=multiple')
            .then(res => res.json())
            .then(data => setQuizData(data))
    }, [])
    console.log(quizData)
    return (
        <div className="quiz--container">
            
        </div>
    )
}