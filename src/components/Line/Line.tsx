import React from 'react'

import { LineProps } from './LineProps'
import * as S from './LineStyle'

export function Line({ color, isVertical, collumn, row }: LineProps) {
  function handleClick() {
    console.log('clicked', collumn, row)
  }

  return (
    <S.Line
      aria-label={isVertical ? 'vertical-line' : 'horizontal-line'}
      color={color}
      onClick={handleClick}
      isVertical={isVertical}
    />
  )
}
