import styled from 'styled-components'

import { Colors } from '../../interfaces/Player'

interface NiceAvatarStyleProps {
  isSecondPlayer?: boolean
  size?: 'small' | 'large' | undefined
  isMyTurn?: boolean
  myColor?: Colors
}

export const NiceAvatarStyle = styled.div<NiceAvatarStyleProps>`
  > div {
    width: ${({ size }) => (size === 'small' ? '7rem' : '10rem')};
    height: ${({ size }) => (size === 'small' ? '7rem' : '10rem')};

    transition: filter 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

    transform: ${(props) => (props.isSecondPlayer ? 'scaleX(-1)' : '')};

    filter: ${(props) => (props.isMyTurn ? '' : 'grayscale(90%)')};
    box-shadow: ${(props) =>
      props.isMyTurn ? `0 0 0 10px ${props.myColor}` : ''};

    ${(props) => props.theme.media.mobile} {
      width: 5rem;
      height: 5rem;
    }
  }
`
