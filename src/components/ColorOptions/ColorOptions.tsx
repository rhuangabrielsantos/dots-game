import React from 'react'
import { MdDone } from 'react-icons/md'

import { clickSfx, tickSfx } from '@/utils/SfxUtils'

import { ColorOptionsProps } from './ColorOptionsProps'
import { ColorButton, Container } from './ColorOptionsStyle'

export function ColorOptions(props: ColorOptionsProps) {
  return (
    <Container>
      {props.colors.map((color, index) => (
        <ColorButton
          key={index}
          color={color}
          disabled={props.unavailableColors.includes(color)}
          onClick={() => {
            props.onChange(color)
            clickSfx.play()
          }}
          onMouseEnter={() => tickSfx.play()}
          title={
            props.unavailableColors.includes(color)
              ? 'Outro jogador já escolheu esta cor'
              : ''
          }
        >
          {props.selectedColor === color && <MdDone size="2rem" fill="white" />}
        </ColorButton>
      ))}
    </Container>
  )
}
