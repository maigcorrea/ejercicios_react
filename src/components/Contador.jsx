import { useState } from 'react'
import React from 'react'

const Contador = () => {
    const [cont, setContador] = useState(0);

    const incrementar = () =>{
        setContador(cont+1);
    }

    const decrementar = () =>{
        setContador(cont-1);
    }

  return (
    <>
        <h1>Contador: {cont}</h1>
        <button onClick={incrementar}>+</button>
        <button onClick={decrementar}>-</button>
    </>
  )
}

export default Contador