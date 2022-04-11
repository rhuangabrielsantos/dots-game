import { motion } from 'framer-motion'
import { VscDebugRestart } from 'react-icons/vsc'
import styled from 'styled-components'

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 80vh;
`

export const BoxButton = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 50px;

  gap: 20px;

  width: 100%;

  ${(props) => props.theme.media.mobile} {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 30px;
  }
`

export const RestartIcon = styled(VscDebugRestart)`
  color: ${(props) => props.theme.colors.text};
  font-size: 27px;

  margin-right: 10px;
`

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 3rem;

  ${(props) => props.theme.media.mobile} {
    flex-direction: column;
    gap: 1rem;
  }
`

export const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 50px;
  font-weight: bold;

  color: ${(props) => props.theme.colors.secondary};

  ${(props) => props.theme.media.mobile} {
    font-size: 30px;
  }
`
