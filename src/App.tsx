import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'

import 'react-toastify/dist/ReactToastify.css'

import { DarkModeSwitch } from './components/DarkModeSwitch'
import { MusicPlayer } from './components/MusicPlayer'
import { Provider } from './contexts'
import { useDarkMode } from './hooks/useDarkMode'
import Router from './Router'
import GlobalStyle from './styles/globalStyle'
import { lightTheme, darkTheme } from './styles/theme'

function App() {
  const [theme, themeToggler] = useDarkMode()

  const themeMode = theme === 'light' ? lightTheme : darkTheme

  return (
    <ThemeProvider theme={themeMode}>
      <Provider>
        <GlobalStyle />

        <DarkModeSwitch
          onClick={themeToggler}
          checked={theme === 'dark'}
          id="togglerTheme"
        />
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

        <Router />
      </Provider>
    </ThemeProvider>
  )
}

export default App
