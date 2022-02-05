import React from 'react'

import * as T from './HorizontalLineProps'
import * as S from './HorizontalLineStyle'

export function HorizontalLine({ color }: T.HorizontalLineProps) {
  return <S.Line aria-label="horizontal-line" color={color} />
}
