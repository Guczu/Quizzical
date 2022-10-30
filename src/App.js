import React, {useState, useEffect} from 'react'
import StartPage from "./components/StartPage"
import Quiz from "./components/Quiz"
import {nanoid} from 'nanoid'

export default function App() {
    const [swapPage, setSwapPage] = useState(false)
    const [quizData, setQuizData] = useState([])
    const [questions, setQuestions] = useState([])
    const [score, setScore] = useState(0)
    const [finished, setFinished] = useState(false)

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&category=27&difficulty=easy&type=multiple')
            .then(res => res.json())
            .then(data => setQuizData(data.results))
    }, [swapPage])

    function changePage() {
        setSwapPage( prevPage => !prevPage)
        getQuestions()
    }

    function getQuestions() {
        setQuestions(prevQuestions => {
            return quizData.map(prevQuestion => {
                const ans = [...prevQuestion.incorrect_answers,prevQuestion.correct_answer]
                return {
                    id: nanoid(),
                    question: prevQuestion.question,
                    correct: prevQuestion.correct_answer,
                    answers: ans.sort()
                        .map(prevAns => {
                        return {
                            id: nanoid(),
                            answer: prevAns,
                            isPressed: false
                        }
                    }),
                    isAnswered: false
                }
            })
        })
    }

    function handlePress(key, questionId) {
        setQuestions(prevQuestions => {
            return prevQuestions.map(prevQuestion => {
                return {
                    ...prevQuestion,
                    answers: prevQuestion.answers.map(prevAnswer => {
                        questionId === prevQuestion.id && handleAnswered(questionId)
                        return (
                            key === prevAnswer.id && prevQuestion.isAnswered === false ? {...prevAnswer, isPressed: !prevAnswer.isPressed} : {...prevAnswer}
                        )
                    })
                }
            })
        })

    }

    function handleAnswered(key) {
        setQuestions(prevQuestions => {
            return prevQuestions.map(prevQuestion => {
                return (
                    key === prevQuestion.id ? {...prevQuestion, isAnswered: true} : {...prevQuestion}
                )
            })
        })
    }

    function showScore() {
        questions.filter(prevQuestions => {
            prevQuestions.answers.filter(prevAnswer => {
                if(prevAnswer.isPressed === true && prevAnswer.answer === prevQuestions.correct) {
                    setScore(prevScore => {
                        return prevScore + 1
                    })
                }
            })
        })
        finish()
    }

    function finish() {
        setFinished(prevFinished => {
            return !prevFinished
        })
    }

    function handleNewGame() {
        setFinished(false)
        setScore(0)
        setQuestions([])
        setSwapPage(false)
        setQuizData([])
    }

    return (
    <div className="app--container">
        {swapPage
            ? <Quiz
                quizData={quizData}
                questions={questions}
                handlePress={handlePress}
                showScore={showScore}
                score={score}
                finished={finished}
                handleNewGame={handleNewGame}
                swapPage={swapPage}
            /> : <StartPage handleSwap={changePage} />}
    </div>
  )
}
