import React, {useState} from 'react'
import StartPage from "./components/StartPage";
import Quiz from "./components/Quiz";

export default function App() {
    const [swapPage, setSwapPage] = useState(false)

    function changePage() {
        setSwapPage( prevPage => !prevPage)
    }

    return (
    <div className="app--container">
        {swapPage ? <Quiz /> : <StartPage handleSwap={changePage} />}
    </div>
  )
}
