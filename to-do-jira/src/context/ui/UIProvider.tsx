import { FC, useReducer } from 'react'
import { UIContext } from './UIContext'
import { uiReducer } from './UIReducer'

export interface UIState {
  sidemenuOpen: boolean,
  isAdding: boolean,
  isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAdding: false,
  isDragging: false
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
  const setDragging = (isDrag: boolean) => {
    dispatch({type: 'UI - SET DRAG', payload: isDrag})
  }
  return (
    <UIContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        openAdding,
        closeAdding,
        setDragging
      }}
    >
      {children}
    </UIContext.Provider>
  )
}
