import { createContext } from 'react'

import { useDarkMode } from '../hooks/useDarkMode'

type ThemeContextType = {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

export const ThemeContext = createContext({} as ThemeContextType)

type ThemeContextProviderType = {
  children: React.ReactNode
}

export function ThemeContextProvider(props: ThemeContextProviderType) {
  const [theme, toggleTheme] = useDarkMode()

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  )
}
