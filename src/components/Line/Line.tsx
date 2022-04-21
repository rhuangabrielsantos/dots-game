import React, { useContext, useState } from 'react'
import { useEffect } from 'react'

import { SfxContext } from '../../contexts/SfxContext'
import { useAuth } from '../../hooks/useAuth'
import {
  handlePlayerClick,
  handleSquareWinnerCheck,
} from '../../utils/GameUtils/GameUtils'

import { LineProps } from './LineProps'
import { Line as LineStyle } from './LineStyle'

export function Line(props: LineProps) {
  const { tickSfx, clickSfx, winnerSfx } = useContext(SfxContext)
  const { user } = useAuth()

  const [turnIsFirstPlayer, setTurnIsFirstPlayer] = useState(true)

  function handleClick() {
    clickSfx()

    const newBoardState = handlePlayerClick({
      board: props.game?.board || [],
      color:
        (props.game?.turn || 0) % 2 === 1
          ? props.game.firstPlayer?.color
          : props.game.secondPlayer?.color,
      collumn: props.collumn,
      row: props.row,
    })

    const { newGameState, thereIsAWinnerOfTheSquare } = handleSquareWinnerCheck(
      {
        game: { ...props.game, board: newBoardState },
        clickCoords: {
          collumn: props.collumn,
          row: props.row,
        },
        lastPlayer:
          (props.game?.turn || 0) % 2 === 1
            ? props.game.firstPlayer
            : props.game.secondPlayer,
        isTopOrBottom: !props.isVertical,
      }
    )

    if (thereIsAWinnerOfTheSquare) {
      winnerSfx()
    }

    const turn = thereIsAWinnerOfTheSquare
      ? props.game.turn
      : props.game.turn + 1

    props.updateGame({ ...newGameState, turn })
  }

  useEffect(() => {
    setTurnIsFirstPlayer(props.game.turn % 2 === 1)
  }, [props.game.turn])

  return (
    <LineStyle
      aria-label={props.isVertical ? 'vertical-line' : 'horizontal-line'}
      data-lines-coordinates={`${props.collumn}x${props.row}`}
      value={props.game.board[props.collumn][props.row]}
      color={props.game.board[props.collumn][props.row]}
      onClick={handleClick}
      isVertical={props.isVertical}
      turn={
        (props.game?.turn || 0) % 2 === 1
          ? props.game.firstPlayer.color
          : props.game.secondPlayer.color
      }
      disabled={
        props.game.board[props.collumn][props.row] !== 'empty' ||
        (user?.id === props.game.firstPlayer.id && !turnIsFirstPlayer) ||
        (user?.id === props.game.secondPlayer.id && turnIsFirstPlayer) ||
        (props.game.isSinglePlayer && !turnIsFirstPlayer)
      }
      onMouseEnter={() => tickSfx()}
    />
  )
}
