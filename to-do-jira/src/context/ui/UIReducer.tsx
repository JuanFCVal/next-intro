import { UIState } from './UIProvider'

type UIActionType = { type: 'UI- Open Sidebar' } | { type: 'UI- Close Sidebar' } | { type: 'UI- Open Adding' } | { type: 'UI- Close Adding' }
| {type: 'UI - SET DRAG', payload: boolean}
export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case 'UI- Open Sidebar':
      return {
        ...state,
        sidemenuOpen: true,
      }
    case 'UI- Close Sidebar':
      return {
        ...state,
        sidemenuOpen: false,
      }
    case 'UI- Open Adding':
      return {
        ...state,
        isAdding: true,
      }
    case 'UI- Close Adding':
      return {
        ...state,
        isAdding: false,
      }
    case 'UI - SET DRAG':
      return {
        ...state,
        isDragging: action.payload
      }
    default:
      return state
  }
}
