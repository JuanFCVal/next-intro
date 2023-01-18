import { createTheme } from '@mui/material'
import { red } from '@mui/material/colors'

export const darkBasicTheme = createTheme({
  palette: {
    mode: 'dark',
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red[400],
    },
  },
})
