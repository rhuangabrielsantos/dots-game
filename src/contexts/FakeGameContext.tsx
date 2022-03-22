import { createContext, useState } from 'react'

import { Game } from '../interfaces'

type FakeGameContextType = {
  game: Game
  updateGame: (game: Game) => void
}

export const FakeGameContext = createContext({} as FakeGameContextType)

type FakeGameContextProviderType = {
  children: React.ReactNode
}

export function FakeGameContextProvider(props: FakeGameContextProviderType) {
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

  function updateGame(game: Game) {
    if (game) {
      setGame(game)
    }
  }

  return (
    <FakeGameContext.Provider
      value={{
        game,
        updateGame,
      }}
    >
      {props.children}
    </FakeGameContext.Provider>
  )
}
