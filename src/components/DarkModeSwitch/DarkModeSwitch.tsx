import * as RadixSwitch from '@radix-ui/react-switch'
import { useContext } from 'react'

import { SfxContext } from '../../contexts/SfxContext'

import {
  Container,
  WebContainer,
  MobileContainer,
  MobileButton,
  Box,
  DarkModeIcon,
  LightModeIcon,
  SwitchRoot,
  SwitchThumb,
} from './DarkModeSwitchStyle'

export function DarkModeSwitch(props: RadixSwitch.SwitchProps) {
  const { tickSfx, clickSfx } = useContext(SfxContext)

  return (
    <Container>
      <WebContainer>
        <LightModeIcon />

        <Box onMouseEnter={() => tickSfx()} onClick={() => clickSfx()}>
          <SwitchRoot {...props}>
            <SwitchThumb {...props} />
          </SwitchRoot>
        </Box>

        <DarkModeIcon />
      </WebContainer>

      <MobileContainer>
        <MobileButton onClick={props.onClick}>
          {props.checked ? <DarkModeIcon /> : <LightModeIcon />}
        </MobileButton>
      </MobileContainer>
    </Container>
  )
}
