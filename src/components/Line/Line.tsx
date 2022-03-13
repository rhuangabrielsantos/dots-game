import React, { useContext } from 'react'

import { GameContext } from '@/contexts/GameContext'
import {
  handlePlayerClick,
  handleSquareWinnerCheck,
} from '@/utils/GameUtils/GameUtils'

import { LineProps } from './LineProps'
import { Line as LineStyle } from './LineStyle'

export function Line({ isVertical, collumn, row }: LineProps) {
  const { game, updateGame } = useContext(GameContext)

  function handleClick() {
    const newBoardState = handlePlayerClick({
      board: game?.board || [],
      color: (game?.turn || 0) % 2 === 1 ? 'blue' : 'red',
      collumn,
      row,
    })

    const gameUpdated = handleSquareWinnerCheck({
      game: { ...game, board: newBoardState },
      clickCoords: {
        collumn,
        row,
      },
      lastPlayer:
        (game?.turn || 0) % 2 === 1 ? game.firstPlayer : game.secondPlayer,
      isTopOrBottom: !isVertical,
    })

    updateGame({ ...gameUpdated, turn: game.turn + 1 })
  }

  return (
    <LineStyle
      aria-label={isVertical ? 'vertical-line' : 'horizontal-line'}
      value={game.board[collumn][row]}
      color={game.board[collumn][row]}
      onClick={handleClick}
      isVertical={isVertical}
      disabled={game.board[collumn][row] !== undefined}
    />
  )
}
