import styled from 'styled-components'

import { Colors } from '@/interfaces/Player'

export const Line = styled.button<{
  color?: string
  isVertical: boolean
  turn: Colors
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.isVertical
      ? `
      width: 15px;
      height: 70px;
    `
      : `
      width: 70px;
      height: 15px;

      ::after {
        content: '';
        display: block;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: ${props.theme.colors.secondary};
        margin-left: -55px;
        z-index: 2;
      }
      ::before {
        content: '';
        display: block;
        width: 25px;
        height: 25px;
        border-radius: 50%;
        background: ${props.theme.colors.secondary};
        margin-right: -55px;
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
