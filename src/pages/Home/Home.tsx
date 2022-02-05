import React, { useContext, useEffect } from 'react'

import { Board } from '@/components/Board'
import { GameContext } from '@/contexts/GameContext'
import { generateGameBySize } from '@/utils/GameUtils'

import * as S from './HomeStyle'

export function Home() {
  const { game, createNewGame } = useContext(GameContext)

  useEffect(() => {
    const game = generateGameBySize(3, 3)
    createNewGame(game)
  }, [])

  return (
    <S.Container>
      <Board board={game?.board} />
    </S.Container>
  )
}
