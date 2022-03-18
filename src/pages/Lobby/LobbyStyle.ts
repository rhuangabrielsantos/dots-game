import { BsPlusSquare } from 'react-icons/bs'
import { CgCopy } from 'react-icons/cg'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 94vh;

  margin-top: 2rem;
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

export const ContainerCopy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 2rem;
  right: 2rem;

  width: 3rem;
  height: 3rem;

  border-radius: 0.5rem;
  cursor: pointer;

  background-color: ${(props) => props.theme.colors.red};

  transition: opacity 0.2s;
  &:hover {
    opacity: 0.8;
  }
`

export const CopyIcon = styled(CgCopy)`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.white};
`
