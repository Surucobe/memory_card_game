import { useState } from 'react'
import { useEffect } from 'react'

import { fetchInfo } from './utils/utils'

import Card from './components/card/card'
import ScoreBoard from './components/score_board/scoreBoard'

import './App.css'

function App() {
  const [state, setState] = useState([])
  const [score, setScore] = useState(0)
  const [cardsPicked, setCards] = useState([])

  const updateScore = () => {
    setScore(score+2)
    setCards([])
  }

  const handleSetCards = (obj) => {
    if(cardsPicked.length === 0){
      obj.found = true
      setCards([...cardsPicked, obj])
    }else{
      if(JSON.stringify(cardsPicked[0]) === JSON.stringify(obj)) return
      obj.found = true
      setCards([...cardsPicked, obj])
    }
  }

  const resetGame = () => {
    const newState = state.map(elm => {
      elm.found = false
      return elm
    })

    setState(newState)
  }

  const resetCards = (array) => {
    array.forEach(elm => {
      elm.found = false
    })

    setCards([])
  }

  useEffect(() => {
    if(score === 10){
      alert('You win!')

      setScore(0)
      resetCards()
    }
  }, [score])

  useEffect(() => {
    if(cardsPicked.length === 2){
      if(cardsPicked[0].id === cardsPicked[1].id){
        updateScore()
      }else{
        alert('miss!')
        setTimeout(resetCards, 1000, cardsPicked)
      }

    }
  }, [cardsPicked])

  useEffect(() => {
    fetchInfo(setState, 5)
  }, [])

  const handleNewCards = (n) => {
    fetchInfo(setState, n)
    setScore(0)
  }

  return (
    <>
      <ScoreBoard 
        score={score}
        callback={handleNewCards}
      />

      <div className='card_container'>
        {
          state.map((elm, index) => {
            return (
              <Card 
                key={index}
                obj={elm}
                handler={handleSetCards}
              />
            )
          })
        }
      </div>
    </>
  )
}

export default App
