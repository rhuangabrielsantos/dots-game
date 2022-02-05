import React from 'react'

import { VerticalLineProps } from './VerticalLineProps'
import * as S from './VerticalLineStyle'

export function VerticalLine({ color }: VerticalLineProps) {
  return <S.Line aria-label="vertical-line" color={color} />
}
