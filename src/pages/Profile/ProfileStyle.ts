import { motion } from 'framer-motion'
import { IoDiceOutline } from 'react-icons/io5'
import styled from 'styled-components'

export const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 80vh;
`

export const Name = styled.h1`
  font-family: 'Pacifico', cursive;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.secondary};
`

export const Description = styled.p`
  font-family: 'Poppins', cursive;
  font-size: 1rem;
  font-weight: 200;
  color: ${(props) => props.theme.colors.secondary};
`

export const BoxAvatar = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  cursor: pointer;

  border-radius: 50%;

  position: relative;
  transition: opacity 0.3s;

  :hover {
    opacity: 0.8;
  }
`

export const RandomIcon = styled(IoDiceOutline)<{ avatarFocus: boolean }>`
  font-size: 5rem;
  color: ${(props) => props.theme.colors.white};

  transition: opacity 0.3s;
  opacity: ${(props) => (props.avatarFocus ? 1 : 0)};

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
