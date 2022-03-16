import { createContext, useState } from 'react'

import { Game, GameBoard } from '../interfaces'

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
  const [game, setGame] = useState<Game>({
    board: [],
    marks: [],
    turn: 0,
    firstPlayer: {
      id: '1',
      name: 'Player 1',
      color: '#429867',
      pontuation: 0,
      avatar: {},
    },
    secondPlayer: {
      id: '2',
      name: 'Player 2',
      color: '#482344',
      pontuation: 0,
      avatar: {},
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
