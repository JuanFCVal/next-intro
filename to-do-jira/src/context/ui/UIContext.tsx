import { createContext } from 'react'

export interface ContextProps {
  sidemenuOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void
}
export const UIContext = createContext<ContextProps>({} as ContextProps)
  