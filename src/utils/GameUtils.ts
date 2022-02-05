import { Game } from '@/interfaces'

export function generateGameBySize(collumns: number, rows: number): Game {
  return {
    id: '1',
    firstPlayer: {
      id: '1',
      name: 'Rhuanzito',
      color: 'red',
    },
    secondPlayer: {
      id: '1',
      name: 'Ana',
      color: 'blue',
    },
    board: [
      [undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined],
    ],
  }
}
