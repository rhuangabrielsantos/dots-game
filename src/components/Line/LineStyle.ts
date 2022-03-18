import styled from 'styled-components'

import { Colors } from '../../interfaces/Player'

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
      width: ${props.theme.size.web.thickness};
      height: ${props.theme.size.web.breadth};

    ${props.theme.media.mobile} {
      width: ${props.theme.size.mobile.thickness};
      height: ${props.theme.size.mobile.breadth};
    }
    `
      : `
      width: ${props.theme.size.web.breadth};
      height: ${props.theme.size.web.thickness};

      ${props.theme.media.mobile} {
        width: ${props.theme.size.mobile.breadth};
        height: ${props.theme.size.mobile.thickness};
      }

      ::after {
        content: '';
        display: block;
        width: ${props.theme.size.web.circle};
        height: ${props.theme.size.web.circle};
        border-radius: 50%;
        background: ${props.theme.colors.secondary};
        margin-left: calc(${props.theme.size.web.thickness} - ${props.theme.size.web.breadth});
        z-index: 2;

        ${props.theme.media.mobile} {
          width: ${props.theme.size.mobile.circle};
          height: ${props.theme.size.mobile.circle};
          margin-left: calc(${props.theme.size.mobile.thickness} - ${props.theme.size.mobile.breadth});
        }
      }
      ::before {
        content: '';
        display: block;
        width: ${props.theme.size.web.circle};
        height: ${props.theme.size.web.circle};
        border-radius: 50%;
        background: ${props.theme.colors.secondary};
        margin-right: calc(${props.theme.size.web.thickness} - ${props.theme.size.web.breadth});
        z-index: 2;

        ${props.theme.media.mobile} {
          width: ${props.theme.size.mobile.circle};
          height: ${props.theme.size.mobile.circle};
          margin-right: calc(${props.theme.size.mobile.thickness} - ${props.theme.size.mobile.breadth});
        }
      }
    `}

  border: none;

  background: ${(props) => {
    switch (props.color) {
      case 'empty':
        return props.theme.colors.primary
      case 'tertiary':
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
