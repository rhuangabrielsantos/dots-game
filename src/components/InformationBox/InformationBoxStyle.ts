import { motion } from 'framer-motion'
import { FiEdit } from 'react-icons/fi'
import styled from 'styled-components'

export const InformationBoxStyle = styled(motion.div)<{
  mobileenabled?: boolean
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin: 5px;

  width: 300px;
  height: 550px;

  border-radius: 10px;
  position: relative;

  background-color: ${({ theme }) => theme.colors.secondary};

  position: relative;

  ${(props) => props.theme.media.mobile} {
    display: ${(props) => (props.mobileenabled ? 'none' : 'none')};
  }
`

export const InformationTitle = styled.h1`
  font-family: 'Pacifico', sans-serif;
  font-size: 1.3rem;

  text-align: center;

  color: ${(props) => props.theme.colors.primary};
  opacity: 0.8;
`

export const PlayerInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;

  padding: 0 2rem;
`

export const PlayerInfoTitle = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
  font-size: 1rem;

  align-self: flex-start;
  margin-top: 2rem;

  color: ${(props) => props.theme.colors.primary};
`

export const PlayerDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;
  height: 100%;

  gap: 0.3rem;
`

export const PlayerDetailsHeader = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  width: 100%;
  height: 100%;

  gap: 0.3rem;
`

export const PlayerInfoLabel = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 1rem;

  color: ${(props) => props.theme.colors.primary};
`

export const PlayerInfoValue = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 200;
  font-size: 1rem;

  max-width: 18ch;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  color: ${(props) => props.theme.colors.primary};
`

export const PlayerInfoColor = styled.div<{ playerColor?: string }>`
  width: 1rem;
  height: 1rem;

  border-radius: 5px;

  background-color: ${({ playerColor }) => playerColor};
`

export const InformationEditButton = styled(FiEdit)`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primary};

  cursor: pointer;

  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 0.8;
  }

  display: none;

  ${(props) => props.theme.media.mobile} {
    display: flex;
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
