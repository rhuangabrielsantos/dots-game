import React from 'react'
import { ThemeProvider } from 'styled-components'

import { render } from '@testing-library/react'

import { theme } from '../styles/theme'

export default function renderWithTheme(Component: React.ReactNode) {
  return render(<ThemeProvider theme={theme}>{Component}</ThemeProvider>)
}
