import { useState } from 'react'

function App() {
  const [contador, setContador] = useState(0)

  const handleClick = (valor) => {
    setContador(contador + valor);
  }

  // const handleClick = () => {
  //   setContador(contador - 1)
  // }

  const handleReset = () => {
    setContador(0)
  }

  const esPar = contador % 2 === 0
  const msgPI = esPar ? 'Es Par' : 'Es Impar'

  return (
    <div>
      <h1>{contador}</h1>
      <div className='button-container'>
        <p>{msgPI}</p>
        <button
          onClick={() => handleClick(1)}
        >
          Incrementar
        </button>

        <button
          onClick={() => handleClick(-1)}
        >
          Reducir
        </button>

        {/* <button
          onClick={handleReset}
        >
          Resetear
        </button> */}
      </div>
    </div>
  )

}

export default App
