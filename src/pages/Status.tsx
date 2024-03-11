import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css'
import { PaperPlaneRight } from "phosphor-react"



export function Status() {
  const [newAnswer, setNewAnswers] = useState('')
  const [answers, setAnswers] = useState([
    '...concordo',
    'faz snetido',
    'parabens pelo prpogresso'
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault();
    setAnswers([newAnswer, ...answers])
    setNewAnswers('')
  }
  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && event.ctrlKey) {
      setAnswers([newAnswer, ...answers])
      setNewAnswers('')
    }
  }
  return (
    <main className='status'>
      <Header title="Tweet" />
      <Tweet content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo sint consequuntur repellendus, fugit, consectetur fuga accusantium magnam necessitatibus, corrupti et illum tempore possimus? Assumenda quasi, odio debitis necessitatibus aut qui!" />
      <Separator />
      <form onSubmit={createNewAnswer} className='answer-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/arturLoliveira.png" alt="Artur Linhares" />
          <textarea
            id="tweet"
            placeholder="Tweet your answer"
            value={newAnswer}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewAnswers(event?.target.value)
            }} />
          <button type='submit'>
            <PaperPlaneRight />
            <span>Answer</span>Answer
          </button>
        </label>
      </form>

      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}

    </main>
  )
}