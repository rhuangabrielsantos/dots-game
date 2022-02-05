import React from 'react'

import { HorizontalLine } from '../HorizontalLine'
import { VerticalLine } from '../VerticalLine'

import { BoardProps } from './BoardProps'
import * as S from './BoardStyle'

export function Board({ board }: BoardProps) {
  return (
    <S.Container>
      {board?.map((states, index) => (
        <S.Row key={index} horizontalLine={index % 2 === 0}>
          {index % 2 === 0
            ? states.map((color, index) => (
                <HorizontalLine
                  color={color}
                  key={index}
                  aria-label="horizontal-line"
                />
              ))
            : states.map((color, index) => (
                <VerticalLine
                  color={color}
                  key={index}
                  aria-label="vertical-line"
                />
              ))}
        </S.Row>
      ))}
    </S.Container>
  )
}
