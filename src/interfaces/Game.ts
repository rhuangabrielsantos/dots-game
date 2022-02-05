import { Color } from './Color'
import { Player } from './Player'

export interface Game {
  id?: string
  firstPlayer?: Player
  secondPlayer?: Player
  winner?: Player
  board: GameBoard
  turn: number
}

export type GameBoard = Color[][]
