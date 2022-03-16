export const lightTheme = {
  colors: {
    primary: '#F6F1EB',
    secondary: '#202124',
    tertiary: '#3D3D3D',

    default: '#BCC1C7',

    red: '#FF2329',
    blue: '#0030f3',
    gray: '#828282',
    white: '#FFfFf0',
    black: '#00000099',

    text: '#202124',
  },
  media: {
    mobile: '@media (max-width: 1000px)',
  },
}

export const darkTheme = {
  colors: {
    primary: '#202124',
    secondary: '#F6F1EB',
    tertiary: '#ACA8A4',

    default: '#BCC1C7',

    red: '#FF2329',
    blue: '#0030f3',
    gray: '#828282',
    white: '#FFfFf0',
    black: '#00000099',

    text: '#F6F1EB',
  },
  media: {
    mobile: '@media (max-width: 1000px)',
  },
}

export type ThemeType = typeof lightTheme
