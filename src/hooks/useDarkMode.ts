import { useEffect, useState } from 'react'

export function useDarkMode() {
  const [theme, setTheme] = useState('light')

  function setMode(mode: string): void {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  function themeToggler(): void {
    theme === 'light' ? setMode('dark') : setMode('light')
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    localTheme && setTheme(localTheme)
  }, [])

  return [theme, themeToggler] as const
}
