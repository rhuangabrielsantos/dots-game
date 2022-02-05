import { createContext, useState } from 'react'

import { Game, GameBoard } from '@/interfaces'
import { generateGameBoardBySize } from '@/utils/GameUtils'

type GameContextType = {
  game: Game
  createNewGame: (game: Game) => void
  updateBoard: (board: GameBoard) => void
  updateTurn: (turn: number) => void
}

export const GameContext = createContext({} as GameContextType)

type GameContextProviderType = {
  children: React.ReactNode
}

export function GameContextProvider(props: GameContextProviderType) {
  const [game, setGame] = useState<Game>({
    board: generateGameBoardBySize(1, 1),
    turn: 1,
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

  return (
    <GameContext.Provider
      value={{ game, createNewGame: setGame, updateBoard, updateTurn }}
    >
      {props.children}
    </GameContext.Provider>
  )
}
