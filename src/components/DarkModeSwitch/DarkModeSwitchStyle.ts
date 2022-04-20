import * as RadixSwitch from '@radix-ui/react-switch'
import { MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md'
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`

export const WebContainer = styled(Container)`
  ${(props) => props.theme.media.mobile} {
    display: none;
  }
`

export const MobileContainer = styled(Container)`
  display: none;

  ${(props) => props.theme.media.mobile} {
    display: flex;
    position: fixed;
    top: 1rem;
    right: 1rem;
  }
`

export const MobileButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
`

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LightModeIcon = styled(MdOutlineLightMode)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 1.5rem;
`

export const DarkModeIcon = styled(MdOutlineNightlight)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 1.5rem;
`

export const SwitchRoot = styled(RadixSwitch.Root)`
  all: unset;

  width: 42px;
  height: 25px;

  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 9999px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);

  position: relative;

  border: none;
  cursor: pointer;
`

export const SwitchThumb = styled(RadixSwitch.Thumb)`
  display: block;

  width: 20px;
  height: 20px;

  border-radius: 9999px;
  background-color: ${({ theme }) => theme.colors.primary};
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2);

  transition: transform 0.2s ease-in-out;
  transform: translateX(2px);
  will-change: transform;

  &[data-state='checked'] {
    transform: translateX(19px);
  }
`
