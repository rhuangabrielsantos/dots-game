import { Color, Game, GameBoard, Player } from '@/interfaces'

export interface HandlePlayerClickProps {
  board: GameBoard
  color: Color
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
