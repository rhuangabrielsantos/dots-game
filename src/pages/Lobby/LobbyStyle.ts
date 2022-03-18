import { BsPlusSquare } from 'react-icons/bs'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`

export const EnterButton = styled(BsPlusSquare)`
  font-size: 5rem;
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;

  margin-left: 5rem;

  &:hover {
    opacity: 0.8;
  }

  ${(props) => props.theme.media.mobile} {
    margin-left: 0;
  }
`
