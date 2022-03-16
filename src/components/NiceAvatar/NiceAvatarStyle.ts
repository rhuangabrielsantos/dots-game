import Avatar from 'react-nice-avatar'
import styled from 'styled-components'

import { Colors } from '@/interfaces/Player'

export const NiceAvatarStyle = styled(Avatar)`
  width: 10rem;
  height: 10rem;

  transition: filter 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  ${(props) => props.theme.media.mobile} {
    width: 5rem;
    height: 5rem;
  }
`

/* 

interface NiceAvatarStyleProps {
  isSecondPlayer?: boolean
  isMyTurn: boolean
  myColor: Colors
}

transform: ${(props) => (props.isSecondPlayer ? 'scaleX(-1)' : '')};

  filter: ${(props) => (props.isMyTurn ? '' : 'grayscale(90%)')};
  box-shadow: ${(props) =>
    props.isMyTurn ? `0 0 0 10px ${props.myColor}` : ''}; */
