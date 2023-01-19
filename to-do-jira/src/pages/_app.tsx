import { UIProvider } from '../context/ui'
import '@/styles/globals.css'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { lightbasicTheme, darkBasicTheme } from '../../themes'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
    <ThemeProvider theme={darkBasicTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
    </UIProvider>
  )
}
