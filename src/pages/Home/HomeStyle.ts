import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 80vh;

  background-color: ${(props) => props.theme.colors.primary};
`
export const Title = styled(motion.h1)`
  font-family: 'Pacifico', cursive;
  font-size: 48px;
  color: ${(props) => props.theme.colors.text};
`

export const Description = styled(motion.p)`
  font-size: 24px;
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
  color: ${(props) => props.theme.colors.text};

  padding: 0 30px;
  text-align: center;
`

export const BoxButton = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;

  gap: 1rem;

  ${(props) => props.theme.media.mobile} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
