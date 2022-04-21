import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 80vh;
`

export const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 2rem;
  font-weight: 400;

  color: ${(props) => props.theme.colors.text};
`

export const ContainerBox = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;

  margin: 2rem 0;
`

export const BoxSize = styled(motion.button)<{ enabled?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 10rem;
  height: 10rem;

  border-radius: 0.5rem;
  border: none;

  background-color: ${(props) =>
    props.enabled ? props.theme.colors.red : props.theme.colors.secondary};
  color: ${(props) =>
    props.enabled ? props.theme.colors.white : props.theme.colors.primary};

  font-family: 'Poppins', sans-serif;
  font-size: 3rem;
  font-weight: 200;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`

export const BoxButton = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;

  ${(props) => props.theme.media.mobile} {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
