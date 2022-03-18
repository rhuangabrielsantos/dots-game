import styled from 'styled-components'

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

export const PlayerName = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  font-weight: 200;

  max-width: 15ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: ${(props) => props.theme.colors.text};

  padding-top: 1rem;
`
