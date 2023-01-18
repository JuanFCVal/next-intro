import '@/styles/globals.css'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { lightbasicTheme, darkBasicTheme } from '../../themes'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightbasicTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
