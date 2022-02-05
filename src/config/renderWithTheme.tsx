import React, { useContext } from 'react'
import { ThemeProvider } from 'styled-components'

import { GameContext, GameContextProvider } from '@/contexts/GameContext'
import { Game } from '@/interfaces'
import { theme } from '@/styles/theme'
import { render } from '@testing-library/react'

export default function renderWithTheme(Component: React.ReactNode) {
  return render(<ThemeProvider theme={theme}>{Component}</ThemeProvider>)
}

export function renderWithThemeAndContextProvider(Component: React.ReactNode) {
  return render(
    <ThemeProvider theme={theme}>
      <GameContextProvider>{Component}</GameContextProvider>
    </ThemeProvider>
  )
}
