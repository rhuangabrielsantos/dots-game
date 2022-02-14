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

      ::after {
        content: '';
        display: block;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        background-color: ${props.theme.colors.gray};
        margin-left: -3.75rem;
        z-index: 2;
      }
      ::before {
        content: '';
        display: block;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        background-color: ${props.theme.colors.gray};
        margin-right: -3.75rem;
        z-index: 2;
      }
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
      case 'black':
        return props.theme.colors.black
    }
  }};

  transition: opacity 0.2s ease-in-out;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 1 !important;
  }
`
