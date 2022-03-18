import { motion } from 'framer-motion'
import { FiEdit } from 'react-icons/fi'
import { IoDiceOutline } from 'react-icons/io5'
import styled from 'styled-components'

export const FlipContainer = styled(motion.div)<{ mobileenabled?: boolean }>`
  position: relative;
  float: left;
  margin: 5px;

  width: 300px;
  height: 480px;

  ${(props) => props.theme.media.mobile} {
    display: ${(props) => (props.mobileenabled ? 'flex' : 'none')};
  }
`

export const Disabled = styled.div<{ isMyCard?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  z-index: ${(props) => (props.isMyCard ? 0 : 5)};

  cursor: not-allowed;
`

export const FormContainer = styled(motion.div)<{ backfacevisibility: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 300px;
  height: 480px;

  border-radius: 10px;
  position: relative;

  background-color: ${({ theme }) => theme.colors.secondary};

  position: absolute;
  backface-visibility: ${({ backfacevisibility }) => backfacevisibility};
`

export const PlayerName = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 200;

  align-self: flex-start;
  margin: 0.5rem 2.5rem;

  max-width: 20ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  width: 100%;

  color: ${({ theme }) => theme.colors.primary};
`

export const PlayerInfo = styled.h1`
  font-family: 'Pacifico', sans-serif;
  font-size: 2rem;

  align-self: center;
  margin-bottom: 2rem;

  color: ${(props) => props.theme.colors.primary};
`

export const Label = styled.label`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 13px;

  align-self: flex-start;
  margin-left: 2.5rem;
  color: ${(props) => props.theme.colors.primary};
`

export const Field = styled.input`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 16px;

  width: 225px;
  height: 40px;

  padding: 0 10px;
  margin-bottom: 10px;

  border: none;
  border-radius: 5px;

  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.primary};

  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: 16px;

    color: ${(props) => props.theme.colors.secondary};
    opacity: 0.5;
  }

  &:disabled {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.background};
  }

  &:disabled:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.background};
  }

  -webkit-text-fill-color: ${(props) => props.theme.colors.secondary};
  -webkit-box-shadow: 0 0 0px 1000px ${(props) => props.theme.colors.primary}
    inset;

  &:-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus,
  :-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
  }
`

export const Button = styled.button`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 16px;

  width: 225px;
  height: 50px;

  padding: 0 10px;
  margin-top: 3rem;

  border: none;
  border-radius: 5px;

  color: ${(props) => props.theme.colors.secondary};
  background-color: ${(props) => props.theme.colors.primary};

  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 10px 0px ${(props) => props.theme.colors.primary};
  }
`

export const WaitingTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
  font-size: 1.5rem;

  align-self: center;
  text-align: center;

  color: ${(props) => props.theme.colors.primary};

  transform: scaleX(-1);
`

export const WaitingDescription = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
  font-size: 1rem;

  align-self: center;
  text-align: center;

  margin-top: 0.5rem;

  color: ${(props) => props.theme.colors.primary};

  transform: scaleX(-1);

  display: none;

  ${(props) => props.theme.media.mobile} {
    display: block;
  }
`

export const EditButton = styled(FiEdit)`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primary};

  position: absolute;
  top: 1rem;
  left: 1rem;

  cursor: pointer;

  transition: opacity 0.3s ease-in-out;
  &:hover {
    opacity: 0.8;
  }

  transform: scaleX(-1);
`

export const NiceAvatarBox = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`

export const RandomIcon = styled(IoDiceOutline)`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primary};

  cursor: pointer;
`
