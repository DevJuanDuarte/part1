import React, { useState } from 'react'


const WarningNotUsed = () => {
  return <h1>Todavia no se usa el contador</h1>
}

const ListOfClicks = ({ clicks }) => {
  return <p>{clicks.join(", ")}</p>
}

// const INITIAL_STATE = {
//   left: 2,
//   right: 5,
//   mensaje: 'Valor iniciar',
// }

const App = () => {

  // const [left, setLeft] = useState(0)
  // const [right, setRight] = useState(0)

  // const [counters, setCounters] = useState(INITIAL_STATE)

  const [clicks, setClicks] = useState([])


  const handleClickLeft = () => {
    setClicks((prevClicks) => [...prevClicks, ' L'])
  }

  const handleClickRight = () => {
    setClicks((prevClicks) => [...prevClicks, ' R'])
  }

  const handleReset = () => {
    setClicks([])
  }

  const left = clicks.filter((click) => click === 'L')
  const right = clicks.filter((click) => click === 'R')

  return (
    <div>
      <div className="button-container">
        {left.length} <button className='button-container' onClick={handleClickLeft}>Left</button>
        <button className='button-container' onClick={handleClickRight}>Right</button> {right.length}

      </div>
      <div className='button-container'>
        <button onClick={handleReset}>Reset</button>
      </div>
      <div className='clicks'>
        <p>Clicks totales: {clicks.length}</p>
        {clicks.length === 0 ? (<WarningNotUsed />) : (<ListOfClicks clicks={clicks} />)}
      </div>


    </div>

  )
}

export default App