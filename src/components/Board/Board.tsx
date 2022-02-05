import React from 'react'

import { Line } from '../Line'

import { BoardProps } from './BoardProps'
import * as S from './BoardStyle'

export function Board({ board }: BoardProps) {
  return (
    <S.Container>
      {board?.map((states, stateIndex) => (
        <S.Row key={stateIndex} horizontalLine={stateIndex % 2 === 0}>
          {stateIndex % 2 === 0
            ? states.map((color, colorIndex) => (
                <Line
                  color={color}
                  key={colorIndex}
                  aria-label="horizontal-line"
                  collumn={stateIndex}
                  row={colorIndex}
                  isVertical={false}
                />
              ))
            : states.map((color, colorIndex) => (
                <Line
                  color={color}
                  key={colorIndex}
                  aria-label="vertical-line"
                  collumn={stateIndex}
                  row={colorIndex}
                  isVertical
                />
              ))}
        </S.Row>
      ))}
    </S.Container>
  )
}
