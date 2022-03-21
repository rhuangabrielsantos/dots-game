import React, { useContext, useEffect } from 'react'

import { GameContext } from '../../../contexts/GameContext'
import { Game } from '../../../interfaces'
import { generateGameBySize } from '../../../utils/GameUtils'
import { Board } from '../../Board'

import { ScenarioEnum, ScenarioProps } from './ScenarioProps'

export function Scenario(props: ScenarioProps) {
  const customGame = generateGameBySize(2, 2)
  const { game, updateGame } = useContext(GameContext)

  const firstScenarioGame: Game = {
    ...customGame,
    firstPlayer: {
      id: '1',
      name: 'Player 1',
      avatar: {},
      color: '#429867',
      pontuation: 0,
    },
    secondPlayer: {
      id: '2',
      name: 'Player 2',
      avatar: {},
      color: '#482344',
      pontuation: 0,
    },
    turn: 1,
  }

  function handleUpdateGame(game: Game) {
    updateGame(game)

    const colorOptions = ['#429867', '#482344']

    const endGame =
      colorOptions.includes(game.marks[0][0]) &&
      colorOptions.includes(game.marks[0][1]) &&
      colorOptions.includes(game.marks[1][0]) &&
      colorOptions.includes(game.marks[1][1])

    if (endGame) {
      props.callback(ScenarioEnum.THIRD_SCENARIO)
      return
    }

    const hasMarks =
      colorOptions.includes(game.marks[0][0]) ||
      colorOptions.includes(game.marks[0][1]) ||
      colorOptions.includes(game.marks[1][0]) ||
      colorOptions.includes(game.marks[1][1])

    if (hasMarks) {
      props.callback(ScenarioEnum.SECOND_SCENARIO)
      return
    }

    props.callback(ScenarioEnum.FIRST_SCENARIO)
  }

  useEffect(() => {
    updateGame(firstScenarioGame)
  }, [])

  return <Board game={game} updateGame={handleUpdateGame} />
}
