import { Colors, Player } from './Player'

export interface Game {
  id?: string
  firstPlayer: Player
  secondPlayer: Player
  winner?: Player
  board: GameBoard
  marks: GameMarks
  turn: number
}

export type GameBoard = Colors[][]

export type GameMarks = Colors[][]

export type GameProps = {
  board: GameBoard
  marks: GameMarks
}
