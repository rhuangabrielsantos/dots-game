import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

import 'react-toastify/dist/ReactToastify.css'
import { GameContextProvider } from '@/contexts/GameContext'
import GlobalStyle from '@/styles/globalStyle'
import { lightTheme, darkTheme } from '@/styles/theme'

import { DarkModeSwitch } from './components/DarkModeSwitch'
import { MusicPlayer } from './components/MusicPlayer'
import { useDarkMode } from './hooks/useDarkMode'
import Router from './Router'

function App() {
  const [theme, themeToggler] = useDarkMode()

  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />

      <DarkModeSwitch
        onClick={themeToggler}
        checked={theme === 'dark'}
        id="togglerTheme"
      />

      <GameContextProvider>
        <Router />
      </GameContextProvider>

      <MusicPlayer />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={theme === 'light' ? 'light' : 'dark'}
      />
    </ThemeProvider>
  )
}

export default App
