import { useState } from 'react'
import Mensaje from './components/Mensaje'

const Description = function () {
  return <p>Este es el curso bootcamp fullstack</p>
}

function App() {

  const mensaje = 'Hola'

  return (
    <div>
      <Mensaje color="red" message="Estamos Trabajando" />
      <Mensaje color="green" message="En un Curso" />
      <Mensaje color="blue" message="FullStack de React" />
      <Description/>
    </div>
  )
}

export default App
