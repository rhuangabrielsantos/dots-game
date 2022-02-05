import { Color, GameBoard } from '@/interfaces'

export interface HandlePlayerClickProps {
  board: GameBoard
  color: Color
  collumn: number
  row: number
}
