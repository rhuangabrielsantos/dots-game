import Avatar from 'react-nice-avatar'
import styled from 'styled-components'

import { Colors } from '@/interfaces/Player'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${(props) => props.theme.media.mobile} {
    flex-direction: row;
    gap: 2rem;
  }
`

export const NiceAvatar = styled(Avatar)<{
  isSecondPlayer?: boolean
  isMyTurn: boolean
  myColor: Colors
}>`
  width: 10rem;
  height: 10rem;

  transition: filter 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  transform: ${(props) => (props.isSecondPlayer ? 'scaleX(-1)' : '')};

  filter: ${(props) => (props.isMyTurn ? '' : 'grayscale(90%)')};
  box-shadow: ${(props) =>
    props.isMyTurn ? `0 0 0 10px ${props.myColor}` : ''};

  ${(props) => props.theme.media.mobile} {
    width: 5rem;
    height: 5rem;
  }
`

export const PlayerName = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 200;

  color: ${(props) => props.theme.colors.text};

  padding-top: 1rem;
`
