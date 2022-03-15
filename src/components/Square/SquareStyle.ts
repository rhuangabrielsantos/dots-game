import styled from 'styled-components'

export const Square = styled.button<{
  color?: string
  top?: number
  left?: number
}>`
  width: 5rem;
  height: 5rem;
  border: none;

  background-color: ${(props) => props.color || props.theme.colors.primary};

  position: absolute;
  top: ${(props) =>
    props.top ? `calc(1rem + calc(${props.top} * 6rem))` : '1rem'};
  left: ${(props) =>
    props.left ? `calc(1rem + calc(${props.left} * 6rem))` : '1rem'};
  z-index: 0;
`
