import React, { useContext } from 'react'
import { MdDone } from 'react-icons/md'

import { SfxContext } from '../../contexts/SfxContext'
import { Colors } from '../../interfaces/Player'

import { ColorOptionsProps } from './ColorOptionsProps'
import { ColorButton, Container } from './ColorOptionsStyle'

export function ColorOptions(props: ColorOptionsProps) {
  const { tickSfx, clickSfx } = useContext(SfxContext)

  const colors: Colors[] = ['#e02130', '#429867', '#482344', '#fab243']

  return (
    <Container id={props.id}>
      {colors.map((color, index) => (
        <ColorButton
          key={index}
          color={color}
          data-color={color}
          disabled={props.unavailableColors?.includes(color)}
          onClick={() => {
            props.onChange(color)
            clickSfx()
          }}
          onMouseEnter={() => tickSfx()}
          title={
            props.unavailableColors?.includes(color)
              ? 'Another player has already chosen this color'
              : ''
          }
        >
          {props.selectedColor === color && <MdDone size="2rem" fill="white" />}
        </ColorButton>
      ))}
    </Container>
  )
}
