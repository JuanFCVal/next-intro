import { createContext } from 'react'
import { Entry } from '../../interfaces/';
export interface ContextProps {
entries: Entry[] //TODO add type
addNewEntry: (description: string) => void
}
export const EntriesContext = createContext<ContextProps>({} as ContextProps)