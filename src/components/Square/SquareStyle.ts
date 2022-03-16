import styled from 'styled-components'

export const Square = styled.button<{
  color?: string
  top?: number
  left?: number
}>`
  width: 70px;
  height: 70px;
  border: none;

  background-color: ${(props) => props.color || props.theme.colors.primary};

  position: absolute;
  top: ${(props) =>
    props.top ? `calc(15px + calc(${props.top} * 85px))` : '15px'};
  left: ${(props) =>
    props.left ? `calc(15px + calc(${props.left} * 85px))` : '15px'};
  z-index: 0;
`
