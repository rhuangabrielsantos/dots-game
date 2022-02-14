import { createContext, useState } from 'react'

import { Game, GameBoard } from '@/interfaces'
import { generateGameBySize } from '@/utils/GameUtils'

type GameContextType = {
  game: Game
  createNewGame: (game: Game) => void
  updateBoard: (board: GameBoard) => void
  updateTurn: (turn: number) => void
  updateGame: (game: Game) => void
}

export const GameContext = createContext({} as GameContextType)

type GameContextProviderType = {
  children: React.ReactNode
}

export function GameContextProvider(props: GameContextProviderType) {
  const { board, marks } = generateGameBySize(1, 1)

  const [game, setGame] = useState<Game>({
    board,
    marks,
    turn: 1,
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
  })

  function updateBoard(board: GameBoard) {
    if (game) {
      setGame({ ...game, board })
    }
  }

  function updateTurn(turn: number) {
    if (game) {
      setGame({ ...game, turn })
    }
  }

  function updateGame(game: Game) {
    if (game) {
      setGame(game)
    }
  }

  return (
    <GameContext.Provider
      value={{
        game,
        createNewGame: setGame,
        updateBoard,
        updateTurn,
        updateGame,
      }}
    >
      {props.children}
    </GameContext.Provider>
  )
}
