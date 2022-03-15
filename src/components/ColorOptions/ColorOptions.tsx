import React from 'react'
import { MdDone } from 'react-icons/md'

import { Colors } from '@/interfaces/Player'
import { clickSfx, tickSfx } from '@/utils/SfxUtils'

import { ColorOptionsProps } from './ColorOptionsProps'
import { ColorButton, Container } from './ColorOptionsStyle'

export function ColorOptions(props: ColorOptionsProps) {
  const colors: Colors[] = ['#FF2329', '#0030f3', '#02c913', '#ffff28']

  return (
    <Container>
      {colors.map((color, index) => (
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
