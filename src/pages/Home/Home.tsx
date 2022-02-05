import { Game } from '@/interfaces'
import React from 'react'

import { Board } from '@/components/Board'

import * as S from './HomeStyle'

export default function Home() {
  const mockGame: Game = {
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

  return (
    <S.Container>
      <Board board={mockGame.board} />
    </S.Container>
  )
}
