import { Entry, Status } from '@/interfaces'
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
      description: 'Mollit id culpa consequat pariatur duis sit.',
      status: 'pending',
      name: 'Name 1',
    },
    {
      id: uuidv4(),
      description: 'Sint culpa officia nulla irure.',
      status: 'In progress',
      name: 'Name 3',
    },
    {
      id: uuidv4(),
      description: 'Excepteur reprehenderit et cupidatat non consectetur minim laboris eu sunt ipsum sint voluptate.',
      status: 'Finished',
      name: 'Name 3',
    },
    {
      id: uuidv4(),
      description: 'Tempor fugiat mollit nostrud occaecat ut velit esse.',
      status: 'Finished',
      name: 'Name 3',
    },
    {
      id: uuidv4(),
      description: 'Ullamco fugiat ea veniam cillum anim ut enim dolore cillum non cupidatat pariatur voluptate voluptate.',
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
  const addNewEntry = (description: string) => {
    const entry: Entry = {
      id: uuidv4(),
      description,
      status: 'pending',
      name: 'Name 5',
    }
    dispatch({
      type: 'Entries - Add Entry',
      payload: entry,
    })
  }

  const updateEntryStatus = (entry: Entry) => {
    dispatch(
      {
        type: 'Entries - Update Status',
        payload: entry
      }
    )
  }
  return (
    <EntriesContext.Provider
      value={{
        ...state,
        addNewEntry,
        updateEntryStatus
      }}
    >
      {children}
    </EntriesContext.Provider>
  )
}
