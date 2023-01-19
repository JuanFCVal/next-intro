import { createContext } from 'react'
import { Entry } from '../../interfaces/';
export interface ContextProps {
entries: Entry[] //TODO add type
}
export const EntriesContext = createContext<ContextProps>({} as ContextProps)