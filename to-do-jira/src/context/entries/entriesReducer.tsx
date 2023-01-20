import { Entry } from '@/interfaces'
import { EntriesState } from './'
import { Status } from '../../interfaces/entry';
type EntriesActionType = { type: 'Entries - Add Entry', payload: Entry }
| { type: 'Entries - Update Status', payload: Entry }
export const entriesReducer = (
  state: EntriesState,
  action: EntriesActionType
): EntriesState => {
  switch (action.type) {
    case 'Entries - Add Entry':
    return {
    ...state,
    entries : [...state.entries, action.payload]
    }
    case 'Entries - Update Status':
      return {
        ...state,
        entries: [...state.entries.map((entry) => {
          if(entry.id === action.payload.id){
            entry.status = action.payload.status
          }
          return entry
        })]
      }
    default:
      return state
  }
}
