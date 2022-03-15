import React, { useContext } from 'react'

import { GameContext } from '@/contexts/GameContext'
import { SfxContext } from '@/contexts/SfxContext'
import {
  handlePlayerClick,
  handleSquareWinnerCheck,
} from '@/utils/GameUtils/GameUtils'

import { LineProps } from './LineProps'
import { Line as LineStyle } from './LineStyle'

export function Line({ isVertical, collumn, row }: LineProps) {
  const { tickSfx, clickSfx, winnerSfx } = useContext(SfxContext)

  const { game, updateGame } = useContext(GameContext)

  function handleClick() {
    clickSfx?.play()

    const newBoardState = handlePlayerClick({
      board: game?.board || [],
      color:
        (game?.turn || 0) % 2 === 1
          ? game.firstPlayer.color
          : game.secondPlayer.color,
      collumn,
      row,
    })

    const { newGameState, thereIsAWinnerOfTheSquare } = handleSquareWinnerCheck(
      {
        game: { ...game, board: newBoardState },
        clickCoords: {
          collumn,
          row,
        },
        lastPlayer:
          (game?.turn || 0) % 2 === 1 ? game.firstPlayer : game.secondPlayer,
        isTopOrBottom: !isVertical,
      }
    )

    if (thereIsAWinnerOfTheSquare) {
      winnerSfx?.play()
    }

    updateGame({ ...newGameState, turn: game.turn + 1 })
  }

  return (
    <LineStyle
      aria-label={isVertical ? 'vertical-line' : 'horizontal-line'}
      value={game.board[collumn][row]}
      color={game.board[collumn][row]}
      onClick={handleClick}
      isVertical={isVertical}
      turn={
        (game?.turn || 0) % 2 === 1
          ? game.firstPlayer.color
          : game.secondPlayer.color
      }
      disabled={game.board[collumn][row] !== undefined}
      onMouseEnter={() => tickSfx?.play()}
    />
  )
}
