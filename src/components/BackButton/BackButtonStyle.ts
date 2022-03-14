import { motion } from 'framer-motion'
import { MdKeyboardArrowLeft } from 'react-icons/md'
import styled from 'styled-components'

export const BackContainer = styled(motion.div)`
  position: fixed;
  top: 2rem;
  left: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

export const BackIcon = styled(MdKeyboardArrowLeft)`
  font-size: 3rem;
  color: ${(props) => props.theme.colors.secondary};

  cursor: pointer;

  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`
