import React, { useContext } from 'react'

import { SfxContext } from '@/contexts/SfxContext'
import * as RadixSwitch from '@radix-ui/react-switch'

import {
  Container,
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
      <LightModeIcon />

      <Box
        onMouseEnter={() => tickSfx?.play()}
        onClick={() => clickSfx?.play()}
      >
        <SwitchRoot {...props}>
          <SwitchThumb {...props} />
        </SwitchRoot>
      </Box>

      <DarkModeIcon />
    </Container>
  )
}
