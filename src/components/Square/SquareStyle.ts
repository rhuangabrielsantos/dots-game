import styled from 'styled-components'

export const Square = styled.button<{
  color?: string
  top?: number
  left?: number
}>`
  width: ${(props) => props.theme.size.web.breadth};
  height: ${(props) => props.theme.size.web.breadth};
  border: none;

  background-color: ${(props) =>
    props.color === 'primary' ? props.theme.colors.primary : props.color};

  position: absolute;
  top: ${(props) =>
    props.top
      ? `calc(${props.theme.size.web.thickness} + calc(${props.top} * calc(${props.theme.size.web.thickness} + ${props.theme.size.web.breadth})))`
      : props.theme.size.web.thickness};
  left: ${(props) =>
    props.left
      ? `calc(${props.theme.size.web.thickness} + calc(${props.left} * calc(${props.theme.size.web.thickness} + ${props.theme.size.web.breadth})))`
      : props.theme.size.web.thickness};
  z-index: 0;

  ${(props) => props.theme.media.mobile} {
    width: ${(props) => props.theme.size.mobile.breadth};
    height: ${(props) => props.theme.size.mobile.breadth};

    top: ${(props) =>
      props.top
        ? `calc(${props.theme.size.mobile.thickness} + calc(${props.top} * calc(${props.theme.size.mobile.thickness} + ${props.theme.size.mobile.breadth})))`
        : props.theme.size.mobile.thickness};
    left: ${(props) =>
      props.left
        ? `calc(${props.theme.size.mobile.thickness} + calc(${props.left} * calc(${props.theme.size.mobile.thickness} + ${props.theme.size.mobile.breadth})))`
        : props.theme.size.mobile.thickness};
  }
`
