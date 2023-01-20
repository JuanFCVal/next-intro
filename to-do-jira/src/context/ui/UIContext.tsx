import { createContext } from 'react'

export interface ContextProps {
  sidemenuOpen: boolean;
  isAdding: boolean;
  openSidebar: () => void;
  closeSidebar: () => void
  closeAdding: () => void
  openAdding: () => void
}
export const UIContext = createContext<ContextProps>({} as ContextProps)
  