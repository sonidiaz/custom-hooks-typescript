import React from 'react'
import { useCounter } from '../hooks/useCounter';

export const CountHook = () => {
  const {value, acumular} = useCounter()
  return (
    <div>
      <h3>Contador <small>{value}</small></h3>
      <button className="btn btn-primary"
        onClick={() => acumular(1)}
      >
        -1
      </button>
      <button className="btn btn-primary"
        onClick={() => acumular(-1)}
      >
        +1

      </button>
    </div>
  )
}
