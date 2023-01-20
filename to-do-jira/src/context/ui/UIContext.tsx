import { createContext } from 'react'

export interface ContextProps {
  sidemenuOpen: boolean;
  isAdding: boolean;
  isDragging: boolean;
  openSidebar: () => void;
  closeSidebar: () => void
  closeAdding: () => void
  openAdding: () => void
  setDragging: (isDrag: boolean) => void
}
export const UIContext = createContext<ContextProps>({} as ContextProps)
  