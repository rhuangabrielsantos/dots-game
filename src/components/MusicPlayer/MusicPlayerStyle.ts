import { motion } from 'framer-motion'
import { MdPlayArrow, MdPlayDisabled } from 'react-icons/md'
import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
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

export const Title = styled(motion.h1)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 1rem;
  margin-left: 0.3rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 200;

  width: 100%;
`

export const LottieBox = styled.div<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    path {
      stroke: ${(props) =>
        props.disabled
          ? props.theme.colors.red
          : props.theme.colors.secondary} !important;
    }
  }
`
