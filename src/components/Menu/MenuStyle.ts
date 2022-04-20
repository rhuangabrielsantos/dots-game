import { motion } from 'framer-motion'
import { CgHome, CgProfile, CgLogOff, CgLogIn } from 'react-icons/cg'
import { ImGoogle } from 'react-icons/im'
import { IoGameControllerOutline } from 'react-icons/io5'
import styled from 'styled-components'

export const ContainerLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  ${(props) => props.theme.media.mobile} {
    display: none;
  }
`

export const SignInContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`

export const Name = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.3rem;
  font-weight: 200;

  color: ${(props) => props.theme.colors.text};

  margin: 0 1rem;
`

export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;

  position: fixed;
  top: 0;
  right: 50%;
  left: 50%;
  transform: translateX(50%);

  margin-top: 2rem;
`

export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;
`

export const Title = styled(motion.h3)`
  font-family: 'Poppins', sans-serif;
  font-size: 1.3rem;
  font-weight: 200;

  color: ${(props) => props.theme.colors.text};
`

export const HomeIcon = styled(CgHome)<{ selected: boolean }>`
  font-size: ${(props) => (props.selected ? '2rem' : '1.5rem')};
  color: ${(props) => props.theme.colors.text};

  margin: 0 1rem;
`

export const GameIcon = styled(IoGameControllerOutline)<{ selected: boolean }>`
  font-size: ${(props) => (props.selected ? '2.2rem' : '1.7rem')};
  color: ${(props) => props.theme.colors.text};

  margin: 0 1rem;
`

export const ProfileIcon = styled(CgProfile)<{ selected: boolean }>`
  font-size: ${(props) => (props.selected ? '2rem' : '1.5rem')};
  color: ${(props) => props.theme.colors.text};

  margin: 0 1rem;
`

export const LoggOffIcon = styled(CgLogOff)`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.text};

  margin: 0 1rem;
`

export const LoggInIcon = styled(CgLogIn)`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.text};

  margin: 0 1rem;
`

export const Button = styled.button`
  font-size: 20px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.color};
  border: none;
  border-radius: 5px;
  padding: 10px 15px;
  cursor: pointer;

  transition: shadow 0.3s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:enabled {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  }
`

export const GoogleIcon = styled(ImGoogle)`
  color: ${(props) => props.theme.colors.white};
  font-size: 15px;

  margin-right: 10px;
`
