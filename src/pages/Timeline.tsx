import { FormEvent, KeyboardEvent, useState } from "react"
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Timeline.css'



export function Timeline() {
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    'tweet 1',
    'tweet 2',
    'tweet 3',
    'tweet 4',
  ])

  function createNewTweet(event: FormEvent) {
    event.preventDefault();
    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }
  function handleHotKeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && event.ctrlKey) {
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
  }
  return (
    <main className='timeline'>
      <Header title="Home" />

      <form onSubmit={createNewTweet} className='new-tweet-form'>
        <label htmlFor="tweet">
          <img src="https://github.com/arturLoliveira.png" alt="Artur Linhares" />
          <textarea
            id="tweet"
            placeholder="What's happening?"
            value={newTweet}
            onKeyDown={handleHotKeySubmit}
            onChange={(event) => {
              setNewTweet(event.target.value)
            }} />
          <button type='submit'>Tweet</button>
        </label>
      </form>
      <Separator />

      {tweets.map(tweet => {
        return <Tweet key={tweet} content={tweet} />
      })}

    </main>
  )
}