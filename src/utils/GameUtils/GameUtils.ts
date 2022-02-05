import { GameBoard } from '@/interfaces'

export function generateGameBoardBySize(
  collumns: number,
  rows: number
): GameBoard {
  const board: GameBoard = []

  for (let index = 0; index < rows * 2; index++) {
    if (index % 2 === 0) {
      const row: undefined[] = []
      for (let index = 0; index < collumns; index++) {
        row[index] = undefined
      }
      board.push(row)
    } else {
      const row: undefined[] = []
      for (let index = 0; index < collumns + 1; index++) {
        row[index] = undefined
      }
      board.push(row)
    }
  }

  const lastRow: undefined[] = []
  for (let index = 0; index < collumns; index++) {
    lastRow[index] = undefined
  }
  board.push(lastRow)

  return board
}
