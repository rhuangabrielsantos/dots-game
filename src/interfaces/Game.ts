import { Colors, Player } from './Player'

export interface Game {
  id?: string
  firstPlayer: Player
  secondPlayer: Player
  winner?: Player
  isDraw?: boolean
  board: GameBoard
  marks: GameMarks
  turn: number

  isStarted?: boolean

  isSinglePlayer?: boolean
}

export type GameBoard = Colors[][]

export type GameMarks = Colors[][]

export type GameProps = {
  board: GameBoard
  marks: GameMarks
}
