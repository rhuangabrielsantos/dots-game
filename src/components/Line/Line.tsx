import React, { useContext, useState } from 'react'

import { GameContext } from '@/contexts/GameContext'
import { handlePlayerClick } from '@/utils/GameUtils/GameUtils'

import { LineProps } from './LineProps'
import * as S from './LineStyle'

export function Line({ color, isVertical, collumn, row }: LineProps) {
  const { game, updateBoard, updateTurn } = useContext(GameContext)
  const [colorLine, setColor] = useState(color)

  function handleClick() {
    const newBoardState = handlePlayerClick({
      board: game?.board || [],
      color: (game?.turn || 0) % 2 === 0 ? 'blue' : 'red',
      collumn,
      row,
    })

    updateBoard(newBoardState)
    updateTurn((game?.turn || 0) + 1)
    setColor(newBoardState[collumn][row])
  }

  return (
    <S.Line
      aria-label={isVertical ? 'vertical-line' : 'horizontal-line'}
      value={colorLine}
      color={colorLine}
      onClick={handleClick}
      isVertical={isVertical}
      disabled={colorLine !== undefined}
    />
  )
}
