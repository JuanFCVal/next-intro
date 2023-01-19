import { Entry } from '@/interfaces'
import {v4 as uuidv4} from 'uuid'
import { FC, useReducer } from 'react'
import { entriesReducer,  } from '.'
import { EntriesContext } from './EntriesContext'


export interface EntriesState {
  entries: Entry[]
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      id: uuidv4(),
      description: 'Description 1',
      status: 'pending',
      name: 'Name 1',
    },
    {
      id: uuidv4(),
      description: 'Description 1',
      status: 'In progress',
      name: 'Name 3',
    },
    {
      id: uuidv4(),
      description: 'Description 1',
      status: 'Finished',
      name: 'Name 3',
    }
  ],
}
interface EntriesProviderProps {
  children: React.ReactNode
}

export const EntriesProvider: FC<EntriesProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)
  return (
    <EntriesContext.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </EntriesContext.Provider>
  )
}
