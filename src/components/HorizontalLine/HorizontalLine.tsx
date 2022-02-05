import React from 'react'

import { HorizontalLineProps } from './HorizontalLineProps'
import * as S from './HorizontalLineStyle'

export function HorizontalLine({ color }: HorizontalLineProps) {
  return <S.Line aria-label="horizontal-line" color={color} />
}
