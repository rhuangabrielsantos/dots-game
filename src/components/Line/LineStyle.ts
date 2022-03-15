import styled from 'styled-components'

import { Colors } from '@/interfaces/Player'

export const Line = styled.button<{
  color?: string
  isVertical: boolean
  turn: Colors
}>`
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
        background: ${props.theme.colors.secondary};
        margin-left: -3.75rem;
        z-index: 2;
      }
      ::before {
        content: '';
        display: block;
        width: 1.5rem;
        height: 1.5rem;
        border-radius: 50%;
        background: ${props.theme.colors.secondary};
        margin-right: -3.75rem;
        z-index: 2;
      }
    `}

  border: none;

  background: ${(props) => {
    switch (props.color) {
      case 'primary':
        return props.theme.colors.tertiary
      default:
        return props.color || props.theme.colors.primary
    }
  }};

  &:hover:enabled {
    cursor: pointer;
    background-color: ${(props) => props.turn};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 1 !important;
  }
`
