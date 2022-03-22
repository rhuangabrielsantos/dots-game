import React from 'react'

import { Line } from '../../components/Line'
import { Square } from '../../components/Square'

import { BoardProps } from './BoardProps'
import { Container, Row } from './BoardStyle'

export function Board({ game, updateGame }: BoardProps) {
  const gameSize = game.marks.length

  return (
    <Container size={`${gameSize}x${gameSize}`}>
      {game.board.map((states, stateIndex) => (
        <Row key={stateIndex} horizontalLine={stateIndex % 2 === 0}>
          {stateIndex % 2 === 0
            ? states.map((color, colorIndex) => (
                <Line
                  key={colorIndex}
                  game={game}
                  updateGame={updateGame}
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
                  game={game}
                  updateGame={updateGame}
                  color={color}
                  aria-label="vertical-line"
                  collumn={stateIndex}
                  row={colorIndex}
                  isVertical
                />
              ))}
        </Row>
      ))}

      {game.marks.map((colluns, collunIndex) => {
        return colluns.map((rows, rowIndex) => (
          <Square
            key={rowIndex}
            color={game.marks[collunIndex][rowIndex]}
            top={collunIndex}
            left={rowIndex}
          />
        ))
      })}
    </Container>
  )
}
