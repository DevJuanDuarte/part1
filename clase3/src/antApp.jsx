import { useState } from 'react'

const Counter = ({contador})=> {
  return <h1>{contador}</h1>
}

function App() {
  const [contador, setContador] = useState(0)

  const handleClick = (valor) => {
    if (valor) {
      setContador(contador + valor);
    } else {
      setContador(0)
    }
  }

  const esPar = contador % 2 === 0
  const msgPI = esPar ? 'Es Par' : 'Es Impar'

  return (
    <div>
      <Counter contador={contador}/>
      <div className='button-container'>

        <p>{msgPI}</p>

        <button onClick={() => handleClick(1)}>Incrementar</button>
        <button onClick={() => handleClick(-1)}>Reducir</button>
        <button onClick={() => handleClick()}>Resetear</button>

      </div>
    </div>
  ) 

}

export default App
