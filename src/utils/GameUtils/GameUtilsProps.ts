import { Game, GameBoard, Player } from '../../interfaces'
import { Colors } from '../../interfaces/Player'

export interface HandlePlayerClickProps {
  board: GameBoard
  color: Colors
  collumn: number
  row: number
}

export interface HandleSquareWinnerCheck {
  game: Game
  clickCoords: ClickCoords
  lastPlayer: Player
  isTopOrBottom: boolean
}

export interface ClickCoords {
  collumn: number
  row: number
}

export interface LinesMarkeds {
  top: number[]
  bottom: number[]
  left: number[]
  right: number[]
}

export interface ClickProps {
  collumn: number
  row: number
}
