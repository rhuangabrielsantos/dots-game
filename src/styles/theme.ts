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
  size: {
    web: {
      thickness: '15px',
      breadth: '70px',
      circle: '25px',
    },
    mobile: {
      thickness: '13px',
      breadth: '56px',
      circle: '18px',
    },
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
  size: {
    web: {
      thickness: '15px',
      breadth: '70px',
      circle: '25px',
    },
    mobile: {
      thickness: '13px',
      breadth: '56px',
      circle: '18px',
    },
  },
  media: {
    mobile: '@media (max-width: 1000px)',
  },
}

export type ThemeType = typeof lightTheme
