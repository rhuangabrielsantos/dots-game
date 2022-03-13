import { createGlobalStyle } from 'styled-components'

import { ThemeType } from './theme'

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    transition: color 0.5s ease-in-out, background-color 0.5s ease-in-out;
  }

  body {
    background-color: ${({ theme }) => theme.colors.primary};
  }
`

export default GlobalStyle
