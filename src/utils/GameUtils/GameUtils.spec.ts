import { Game, Player } from '@/interfaces'

import {
  generateGameBySize,
  handlePlayerClick,
  handleSquareWinnerCheck,
} from './GameUtils'
import { HandlePlayerClickProps } from './GameUtilsProps'

describe('Given the function generate game board generator by size', () => {
  it('With board measurements 1x1, Then expect it to return a board', () => {
    const { board } = generateGameBySize(1, 1)

    expect(board).toEqual([[undefined], [undefined, undefined], [undefined]])
  })

  it('With board measurements 5x5, Then expect it to return a board', () => {
    const { board } = generateGameBySize(5, 5)

    expect(board).toEqual([
      [undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined],
    ])
  })

  it('With board measurements 3x5, Then expect it to return a board', () => {
    const { board } = generateGameBySize(3, 5)

    expect(board).toEqual([
      [undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined],
    ])
  })
})

describe('Given the function handle player click', () => {
  it('With smal board and valid props, Then return new board', () => {
    const { board } = generateGameBySize(1, 1)
    const props: HandlePlayerClickProps = {
      board,
      collumn: 0,
      row: 0,
      color: 'red',
    }

    const newBoard = handlePlayerClick(props)

    expect(newBoard).toEqual([['red'], [undefined, undefined], [undefined]])
  })

  it('With big board and valid props, Then return new board', () => {
    const { board } = generateGameBySize(5, 5)
    const props: HandlePlayerClickProps = {
      board,
      collumn: 3,
      row: 5,
      color: 'red',
    }

    const newBoard = handlePlayerClick(props)

    expect(newBoard).toEqual([
      [undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined, 'red'],
      [undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined, undefined],
      [undefined, undefined, undefined, undefined, undefined],
    ])
  })
})

describe('Given the function handle square winner check', () => {
  it('With no squares filled , Then nothing happens', () => {
    const firstPlayer: Player = {
      id: '1',
      name: 'Player 1',
      color: 'blue',
      pontuation: 0,
    }
    const game: Game = {
      board: [
        ['red', 'blue'],
        [undefined, undefined, undefined],
        [undefined, undefined],
        [undefined, undefined, undefined],
        [undefined, undefined],
      ],
      turn: 1,
      firstPlayer,
      secondPlayer: {
        id: '2',
        name: 'Player 2',
        color: 'red',
        pontuation: 0,
      },
      marks: [],
    }

    const newGame = handleSquareWinnerCheck({
      game,
      clickCoords: {
        collumn: 0,
        row: 0,
      },
      lastPlayer: firstPlayer,
      isTopOrBottom: true,
    })

    expect(newGame).toEqual(game)
  })

  it('With filled squares and different colors , The first player has one point', () => {
    const firstPlayer: Player = {
      id: '1',
      name: 'Player 1',
      color: 'blue',
      pontuation: 0,
    }

    const game: Game = {
      board: [
        ['blue', undefined],
        ['red', 'red', undefined],
        ['blue', undefined],
        [undefined, undefined, undefined],
        [undefined, undefined],
      ],
      firstPlayer,
      secondPlayer: {
        id: '2',
        name: 'Player 2',
        color: 'red',
        pontuation: 0,
      },
      turn: 1,
      marks: [],
    }

    const newGame = handleSquareWinnerCheck({
      game,
      clickCoords: {
        collumn: 0,
        row: 0,
      },
      lastPlayer: firstPlayer,
      isTopOrBottom: true,
    })

    expect(newGame.firstPlayer?.pontuation).toEqual(1)
  })
})
