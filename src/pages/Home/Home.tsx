import React, { useContext, useEffect } from 'react'

import { Board } from '@/components/Board'
import { GameContext } from '@/contexts/GameContext'
import { generateGameBySize } from '@/utils/GameUtils'

import * as S from './HomeStyle'

export function Home() {
  const { game, createNewGame } = useContext(GameContext)

  useEffect(() => {
    const { board, marks } = generateGameBySize(4, 4)

    createNewGame({
      id: '15615615',
      firstPlayer: {
        id: '1',
        name: 'Rhuan',
        color: 'blue',
        pontuation: 0,
      },
      secondPlayer: {
        id: '2',
        name: 'Ana',
        color: 'red',
        pontuation: 0,
      },
      board,
      marks,
      turn: 1,
    })
  }, [])

  return (
    <S.Container>
      <Board board={game.board} marks={game.marks} />
    </S.Container>
  )
}
