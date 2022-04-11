import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

export function useDarkMode() {
  const [theme, setTheme] = useState<Theme>('light')

  function setMode(mode: Theme): void {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  function toggleTheme(): void {
    theme === 'light' ? setMode('dark') : setMode('light')
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme') as Theme
    localTheme && setTheme(localTheme)
  }, [])

  return [theme, toggleTheme] as const
}
