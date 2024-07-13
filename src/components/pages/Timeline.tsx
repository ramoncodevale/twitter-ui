import { FormEvent,KeyboardEvent, useState } from "react";
import { Header } from "../Header";
import { Separator } from "../Separator";
import { Tweet } from "../Tweet";

import './Timeline.css'


export function Timeline() {
  const [newTweet, setNewTweet] = useState('')
  const [tweets, setTweets] = useState([
    'Meu primeiro tweet',
    'Teste',
    'Deu certo tweetar!'
  ])

  function createNewTweet(event: FormEvent) {
    event.preventDefault()
     
    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }

  
  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setTweets([newTweet, ...tweets])
      setNewTweet('')
    }
  }

  return (
    <main className="time-line">
      <Header title="Home" />


      <form onSubmit={createNewTweet} className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/ramoncodevale.png" alt="Ramon Valentim" />
          <textarea
            id='tweet'
            placeholder='O que está acontecendo?'
            value={newTweet}
            onKeyDown={handleHotkeySubmit}
            onChange={(event) => {
              setNewTweet(event.target.value)
            }
            }
          />
        </label>

        <button type='submit'>Tweet</button>
      </form>

      <Separator />


      {tweets.map((tweet) => (
        <Tweet key={tweet} content={tweet} />
      ))}



    </main>
  )
}