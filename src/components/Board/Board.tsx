import React from 'react'

import { Line } from '@/components/Line'
import { Square } from '@/components/Square'

import { BoardProps } from './BoardProps'
import { Container, Row } from './BoardStyle'

export function Board({ board, marks }: BoardProps) {
  return (
    <Container>
      {board.map((states, stateIndex) => (
        <Row key={stateIndex} horizontalLine={stateIndex % 2 === 0}>
          {stateIndex % 2 === 0
            ? states.map((color, colorIndex) => (
                <Line
                  key={colorIndex}
                  color={color}
                  aria-label="horizontal-line"
                  collumn={stateIndex}
                  row={colorIndex}
                  isVertical={false}
                />
              ))
            : states.map((color, colorIndex) => (
                <Line
                  key={colorIndex}
                  color={color}
                  aria-label="vertical-line"
                  collumn={stateIndex}
                  row={colorIndex}
                  isVertical
                />
              ))}
        </Row>
      ))}

      {marks.map((colluns, collunIndex) => {
        return colluns.map((rows, rowIndex) => (
          <Square
            key={rowIndex}
            color={marks[collunIndex][rowIndex]}
            top={collunIndex}
            left={rowIndex}
          />
        ))
      })}
    </Container>
  )
}
