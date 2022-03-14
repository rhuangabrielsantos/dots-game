import React, { useContext, useEffect } from 'react'

import { Board } from '@/components/Board'
import { GameContext } from '@/contexts/GameContext'

import { Container } from './GameStyle'

export function Game() {
  const { game } = useContext(GameContext)

  useEffect(() => {
    console.log(game)
  }, [game])

  return (
    <Container>
      <Board board={game.board} marks={game.marks} />
    </Container>
  )
}
