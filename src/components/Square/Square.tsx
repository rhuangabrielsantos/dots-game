import React from 'react'

import { SquareProps } from './SquareProps'
import { Square as SquareStyle } from './SquareStyle'

export function Square(props: SquareProps) {
  return (
    <SquareStyle
      color={props.color}
      top={props.top}
      left={props.left}
      data-square-coordinates={`${props.top}x${props.left}`}
    />
  )
}
