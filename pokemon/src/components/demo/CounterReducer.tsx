import { Card } from '@nextui-org/react'
import React, { useReducer } from 'react'

const initialState = {
  contador: 0,
}

type ActionType =
  | { type: 'incrementar' }
  | { type: 'decrementar' }
  | { type: 'custom'; payload: number }
const contadorReducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case 'incrementar':
      return {
        ...state,
        contador: state.contador + 1,
      }
    case 'decrementar':
      return {
        ...state,
        contador: state.contador - 1,
      }
    case 'custom':
      return {
        ...state,
        contador: action.payload,
      }
    default:
      return state
  }
}
const CounterReducer = () => {
  const [contadorState, dispatch] = useReducer(contadorReducer, initialState)
  return (
    <Card>
      <h1>Contador : {contadorState.contador}</h1>
      <br />
      <button
        onClick={() =>
          dispatch({
            type: 'incrementar',
          })
        }
      >
        Aumentar
      </button>
      <button
        onClick={() =>
          dispatch({
            type: 'decrementar',
          })
        }
      >
        Decrementar
      </button>
      <button
        onClick={() =>
          dispatch({
            type: 'custom',
            payload: 100,
          })
        }
      >
        Set 100
      </button>
    </Card>
  )
}

export default CounterReducer
