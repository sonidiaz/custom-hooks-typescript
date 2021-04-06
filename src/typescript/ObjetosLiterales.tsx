import React from 'react'

interface Person {
  name: string,
  edad: number,
  address: Address
}
interface Address {
  pais: string,
  casaNo: number
}
export const ObjetosLiterales = () => {
  const person: Person = {
    name: 'nacho',
    edad: 40,
    address: {
      pais: 'Spain',
      casaNo: 5
    }
  }
  return (
    <div>
      <h3>Objetos Literales</h3>
    <code>
      <pre>
        {JSON.stringify(person)}
      </pre>
    </code>
    </div>
  )
}
