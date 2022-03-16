import Avatar from 'react-nice-avatar'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const NiceAvatar = styled(Avatar)<{ isSecondPlayer?: boolean }>`
  width: 10rem;
  height: 10rem;

  transform: ${(props) => (props.isSecondPlayer ? 'scaleX(-1)' : '')};
`

export const PlayerName = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 200;

  color: ${(props) => props.theme.colors.text};

  padding-top: 1rem;
`
