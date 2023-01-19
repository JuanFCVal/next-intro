import { UIProvider } from '../context/ui'
import '@/styles/globals.css'
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import { lightbasicTheme, darkBasicTheme } from '../../themes'
import { EntriesProvider } from '../context/entries/'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <EntriesProvider>
        <ThemeProvider theme={darkBasicTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </EntriesProvider>
    </UIProvider>
  )
}
