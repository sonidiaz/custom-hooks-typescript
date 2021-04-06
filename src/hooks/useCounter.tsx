import { useState } from 'react'


export const useCounter = (initalNumber: number = 10) => {
  

  const [value, setvalue] = useState(initalNumber)
  const acumular = (numero: number) => {
    setvalue(value + numero)
  }

  return {
    value,
    acumular
  }
}
