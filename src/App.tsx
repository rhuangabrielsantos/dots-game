import { useContext, useState, useEffect } from 'react'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

import 'react-toastify/dist/ReactToastify.css'

import { HowToPlay } from './components/HowToPlay'
import { MusicPlayer } from './components/MusicPlayer'
import { ThemeContext } from './contexts/ThemeContext'
import Router from './Router'
import GlobalStyle from './styles/globalStyle'
import { darkTheme, lightTheme } from './styles/theme'

function App() {
  const { theme } = useContext(ThemeContext)
  const [themeMode, setThemeMode] = useState(
    theme === 'light' ? lightTheme : darkTheme
  )

  useEffect(() => {
    setThemeMode(theme === 'light' ? lightTheme : darkTheme)
  }, [theme])

  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />

      <MusicPlayer />
      <HowToPlay />
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
        theme={theme}
      />

      <Router />
    </ThemeProvider>
  )
}

export default App
