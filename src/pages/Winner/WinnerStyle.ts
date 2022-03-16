import { motion } from 'framer-motion'
import { ImGoogle } from 'react-icons/im'
import { VscDebugRestart } from 'react-icons/vsc'
import styled from 'styled-components'

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
`

export const BoxButton = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;

  gap: 20px;

  width: 100%;

  ${(props) => props.theme.media.mobile} {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-top: 50px;
  }
`

export const RestartIcon = styled(VscDebugRestart)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 27px;

  margin-right: 10px;
`

export const GoogleIcon = styled(ImGoogle)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 22px;

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
`
