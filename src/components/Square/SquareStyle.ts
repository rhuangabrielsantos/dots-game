import styled from 'styled-components'

export const Square = styled.button<{
  color?: string
  top?: number
  left?: number
}>`
  width: 5rem;
  height: 5rem;
  border: none;

  background-color: ${(props) => {
    switch (props.color) {
      case undefined:
        return props.theme.colors.undefined
      case 'red':
        return props.theme.colors.red
      case 'blue':
        return props.theme.colors.blue
    }
  }};

  position: absolute;
  top: ${(props) =>
    props.top ? `calc(1rem + calc(${props.top} * 6rem))` : '1rem'};
  left: ${(props) =>
    props.left ? `calc(1rem + calc(${props.left} * 6rem))` : '1rem'};
  z-index: 0;
`
