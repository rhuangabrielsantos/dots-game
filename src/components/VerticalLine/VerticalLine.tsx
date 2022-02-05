import React from 'react'

import * as T from './VerticalLineProps'
import * as S from './VerticalLineStyle'

export function VerticalLine({ color }: T.VerticalLineProps) {
  return <S.Line aria-label="vertical-line" color={color} />
}
