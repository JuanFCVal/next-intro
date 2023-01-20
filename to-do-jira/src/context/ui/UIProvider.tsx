import { FC, useReducer } from 'react'
import { UIContext } from './UIContext'
import { uiReducer } from './UIReducer'

export interface UIState {
  sidemenuOpen: boolean,
  isAdding: boolean
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAdding: false
}
interface UIProviderProps {
  children: React.ReactNode
}

export const UIProvider: FC<UIProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)
  
  const openSidebar = () => {
    dispatch({ type: 'UI- Open Sidebar' })
  }
  const closeSidebar = () => {
    dispatch({ type: 'UI- Close Sidebar'})
  }

  const openAdding = () => {
    dispatch({type: 'UI- Open Adding'})
  }
  const closeAdding = () => {
    dispatch({type: 'UI- Close Adding'})
  }
  return (
    <UIContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        openAdding,
        closeAdding
      }}
    >
      {children}
    </UIContext.Provider>
  )
}
