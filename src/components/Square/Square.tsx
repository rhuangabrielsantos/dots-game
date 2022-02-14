import React from 'react'

import { SquareProps } from './SquareProps'
import * as S from './SquareStyle'

export function Square({ color, top, left }: SquareProps) {
  return <S.Square color={color} top={top} left={left} />
}
