import React, {useState, useEffect} from 'react'
import StartPage from "./components/StartPage";
import Quiz from "./components/Quiz";

export default function App() {
    const [swapPage, setSwapPage] = useState(false)
    const [quizData, setQuizData] = useState({})

    useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=5&category=27&difficulty=easy&type=multiple')
            .then(res => res.json())
            .then(data => setQuizData(data))
    }, [])

    function changePage() {
        setSwapPage( prevPage => !prevPage)
    }

    return (
    <div className="app--container">
        {swapPage ? <Quiz quizData={quizData} /> : <StartPage handleSwap={changePage} />}
    </div>
  )
}
