import { Game } from '../../interfaces'

export interface BoardProps {
  game: Game
  updateGame: (game: Game) => void
}
