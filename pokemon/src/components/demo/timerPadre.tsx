import { Card } from '@nextui-org/react'
import React, { useState } from 'react'
import { Timer } from './TimerHijo'

export const TimerPadre = () => {
  const [milesconds, setmilesconds] = useState(1000)
  const setMiliseconds = (miliseconds: number) => {
    setmilesconds(miliseconds)
  }
  return (
    <Card>
      <div>
        <span> Milisegundos:{milesconds} </span>
        <br />
        <button onClick={() => setMiliseconds(700)}>700</button>
        <button onClick={() => setMiliseconds(1000)}> 1000</button>
        <button onClick={() => setMiliseconds(2000)}>2000</button>
        <button onClick={() => setMiliseconds(3000)}>3000</button>
        <br />
        <Timer miliseconds={milesconds}></Timer>
      </div>
    </Card>
  )
}
