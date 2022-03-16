import React, { useContext } from 'react'

import { SfxContext } from '../../contexts/SfxContext'

import { ButtonProps } from './ButtonProps'
import { ButtonStyle } from './ButtonStyle'

export function Button(props: ButtonProps) {
  const { tickSfx } = useContext(SfxContext)

  return (
    <ButtonStyle {...props} onMouseEnter={() => tickSfx()}>
      {props.children}
    </ButtonStyle>
  )
}
