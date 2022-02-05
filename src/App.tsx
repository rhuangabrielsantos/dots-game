import { ThemeProvider } from 'styled-components'

import { GameContextProvider } from '@/contexts/GameContext'
import GlobalStyle from '@/styles/globalStyle'
import { theme } from '@/styles/theme'

import Router from './Router'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <GameContextProvider>
        <Router />
      </GameContextProvider>
    </ThemeProvider>
  )
}

export default App
