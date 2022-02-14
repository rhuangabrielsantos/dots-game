import { Color } from './Color'
import { Player } from './Player'

export interface Game {
  id?: string
  firstPlayer: Player
  secondPlayer: Player
  winner?: Player
  board: GameBoard
  marks: GameMarks
  turn: number
}

export type GameBoard = Color[][]

export type GameMarks = Color[][]

export type GameProps = {
  board: GameBoard
  marks: GameMarks
}
