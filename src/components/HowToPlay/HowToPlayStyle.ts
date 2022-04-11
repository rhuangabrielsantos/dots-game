import { motion } from 'framer-motion'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { IoMdHelpCircle } from 'react-icons/io'
import Modal from 'react-modal'
import styled from 'styled-components'

export const Button = styled.button`
  position: fixed;
  bottom: 2rem;
  right: 2rem;

  color: ${(props) => props.theme.colors.primary};
  background-color: ${(props) => props.theme.colors.secondary};
  border: none;
  padding: 0.5rem;
  border-radius: 10px;
  cursor: pointer;

  transition: shadow 0.3s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:enabled {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
`

export const Text = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;

  margin-left: 0.5rem;
`

export const HelpIcon = styled(IoMdHelpCircle)`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.primary};
`

export const ModalStyle = styled(Modal)`
  position: fixed;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);

  border-radius: 10px;

  width: 80%;
  max-width: 500px;
  height: 80%;
  max-height: 500px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.colors.primary};
`

export const CloseButton = styled(AiOutlineCloseCircle)`
  position: absolute;
  top: 2rem;
  right: 2rem;

  font-size: 2rem;
  color: ${(props) => props.theme.colors.secondary};

  cursor: pointer;

  ${(props) => props.theme.size.mobile} {
    top: 1rem;
    right: 1rem;

    font-size: 1.5rem;
  }
`

export const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 1rem;
`

export const Description = styled(motion.p)`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: ${(props) => props.theme.colors.secondary};
  margin-bottom: 2rem;

  padding: 0 1.5rem;
  text-align: center;
`
