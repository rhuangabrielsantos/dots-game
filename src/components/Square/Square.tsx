import React from 'react'

import { SquareProps } from './SquareProps'
import { Square as SquareStyle } from './SquareStyle'

export function Square({ color, top, left }: SquareProps) {
  return <SquareStyle color={color} top={top} left={left} />
}
