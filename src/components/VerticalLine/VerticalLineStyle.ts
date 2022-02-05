import styled from 'styled-components'

export const Line = styled.button<{ color?: string }>`
  width: 1rem;
  height: 5rem;
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
