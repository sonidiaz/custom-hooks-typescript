import React from 'react'
import { useState } from 'react'

export const Count = () => {
  const [value, setvalue] = useState(10)
  const acumular = (numero: number) => {
    setvalue(value + numero)
  }
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
