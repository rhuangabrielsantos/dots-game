import { createContext, useState } from 'react'

import { Game } from '@/interfaces'

type GameContextType = {
  game?: Game
  createNewGame: (game: Game) => void
}

export const GameContext = createContext({} as GameContextType)

type GameContextProviderType = {
  children: React.ReactNode
}

export function GameContextProvider(props: GameContextProviderType) {
  const [game, createNewGame] = useState<Game | undefined>(undefined)

  return (
    <GameContext.Provider value={{ game, createNewGame }}>
      {props.children}
    </GameContext.Provider>
  )
}
