import { motion } from 'framer-motion'
import { MdPlayArrow, MdPlayDisabled, MdSkipNext } from 'react-icons/md'
import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => props.theme.media.mobile} {
    display: none;
  }
`

export const Button = styled.button`
  background: transparent;
  border: none;
`

export const Play = styled(MdPlayArrow)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 2.3rem;
  cursor: pointer;
`

export const PlayDisabled = styled(MdPlayDisabled)`
  color: ${(props) => props.theme.colors.red};
  font-size: 2.3rem;
  cursor: pointer;
`

export const AnimationContainer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Skip = styled(MdSkipNext)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 2.3rem;
  cursor: pointer;
`

export const Title = styled(motion.h1)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 1rem;
  margin-left: 0.3rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 200;

  width: 100%;
`

export const ControlsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    path {
      stroke: ${(props) => props.theme.colors.secondary};
    }
  }
`

export const Box = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`
