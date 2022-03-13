import { motion } from 'framer-motion'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;

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
  justify-content: space-between;
  margin-top: 100px;

  width: 100%;
  max-width: 460px;
`

export const Button = styled.button<{ color?: string }>`
  font-size: 24px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.color};
  border: none;
  border-radius: 10px;
  padding: 20px 30px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  display: flex;
  align-items: center;
  justify-content: center;
`
