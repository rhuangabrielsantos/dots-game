import React from 'react'

import { clickSfx, tickSfx } from '@/utils/SfxUtils'
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
  return (
    <Container>
      <LightModeIcon />

      <Box onMouseEnter={() => tickSfx.play()} onClick={() => clickSfx.play()}>
        <SwitchRoot {...props}>
          <SwitchThumb {...props} />
        </SwitchRoot>
      </Box>

      <DarkModeIcon />
    </Container>
  )
}
