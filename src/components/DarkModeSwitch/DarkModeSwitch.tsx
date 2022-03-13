import React from 'react'

import * as RadixSwitch from '@radix-ui/react-switch'

import {
  Container,
  DarkModeIcon,
  LightModeIcon,
  SwitchRoot,
  SwitchThumb,
} from './DarkModeSwitchStyle'

export function DarkModeSwitch(props: RadixSwitch.SwitchProps) {
  return (
    <Container>
      <LightModeIcon />
      <SwitchRoot {...props}>
        <SwitchThumb {...props} />
      </SwitchRoot>
      <DarkModeIcon />
    </Container>
  )
}
