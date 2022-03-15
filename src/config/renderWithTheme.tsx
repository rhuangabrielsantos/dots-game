import React from 'react'
import { ThemeProvider } from 'styled-components'

import { GameContextProvider } from '@/contexts/GameContext'
import { lightTheme } from '@/styles/theme'
import { render } from '@testing-library/react'

export default function renderWithTheme(Component: React.ReactNode) {
  return render(<ThemeProvider theme={lightTheme}>{Component}</ThemeProvider>)
}

export function renderWithThemeAndContextProvider(Component: React.ReactNode) {
  return render(
    <ThemeProvider theme={lightTheme}>
      <GameContextProvider>{Component}</GameContextProvider>
    </ThemeProvider>
  )
}
