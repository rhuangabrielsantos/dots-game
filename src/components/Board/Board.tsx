import React from 'react'

import { HorizontalLine } from '../HorizontalLine'
import { VerticalLine } from '../VerticalLine'

import { BoardProps } from './BoadProps'
import * as S from './BoardStyle'

export function Board({ board }: BoardProps) {
  function isHorizontalLine(index: number) {
    return index % 2 === 0
  }

  return (
    <S.Container>
      {board.map((states, index) => (
        <S.Row key={index} horizontalLine={isHorizontalLine(index)}>
          {isHorizontalLine(index)
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
