import styled from 'styled-components'

export const Line = styled.button<{ color?: string; isVertical: boolean }>`
  ${(props) =>
    props.isVertical
      ? `
    width: 1rem;
    height: 5rem;
  `
      : `
    width: 5rem;
    height: 1rem;
  `}
  border: none;

  background-color: ${(props) => {
    switch (props.color) {
      case undefined:
        return props.theme.colors.default
      case 'red':
        return props.theme.colors.red
      case 'blue':
        return props.theme.colors.blue
    }
  }};

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`
