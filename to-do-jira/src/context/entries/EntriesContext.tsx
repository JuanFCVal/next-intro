import { createContext } from 'react'
import { Entry } from '../../interfaces/';
import { Status } from '../../interfaces/entry';
export interface ContextProps {
entries: Entry[] //TODO add type
addNewEntry: (description: string) => void
updateEntryStatus : ( entry: Entry) => void
}
export const EntriesContext = createContext<ContextProps>({} as ContextProps)