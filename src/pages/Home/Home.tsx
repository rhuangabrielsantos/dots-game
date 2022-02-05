import React, { useContext, useEffect } from 'react'

import { Board } from '@/components/Board'
import { GameContext } from '@/contexts/GameContext'
import { generateGameBoardBySize } from '@/utils/GameUtils'

import * as S from './HomeStyle'

export function Home() {
  const { game, createNewGame } = useContext(GameContext)

  useEffect(() => {
    const board = generateGameBoardBySize(3, 3)
    createNewGame({
      id: '15615615',
      firstPlayer: {
        id: '1',
        name: 'Rhuan',
        color: 'blue',
      },
      secondPlayer: {
        id: '2',
        name: 'Ana',
        color: 'red',
      },
      board,
      turn: 1,
    })
  }, [])

  return (
    <S.Container>
      <Board board={game?.board} />
    </S.Container>
  )
}
