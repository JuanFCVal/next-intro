import { Card, Spacer } from '@nextui-org/react'
import { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)
  const addCounter = (numero: number): void => {
    setCounter(counter + numero)
  }
  const removeCounter = (): void => {
    setCounter(counter - 1)
  }
  return (
    <Card>
      <div>
        Counter: {counter} use state
        <br />
        <button onClick={() => addCounter(2)}>Sumar btt</button>
        <Spacer></Spacer>
        <button onClick={removeCounter}>Restar btt</button>
      </div>
    </Card>
  )
}

export default Counter
