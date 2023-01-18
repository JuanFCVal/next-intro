import { createTheme } from '@mui/material'
import { grey, red } from '@mui/material/colors'

export const lightbasicTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: grey[200],
    },
    primary: {
      main: '#4a148c',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red[400],
    },
  },
})
