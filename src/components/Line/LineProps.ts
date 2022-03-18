import { Game } from '../../interfaces'
import { Colors } from '../../interfaces/Player'

export interface LineProps {
  game: Game
  updateGame: (game: Game) => void
  color?: Colors
  isVertical: boolean
  collumn: number
  row: number
}
