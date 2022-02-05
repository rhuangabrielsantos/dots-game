import { generateGameBoardBySize, handlePlayerClick } from './GameUtils'
import { HandlePlayerClickProps } from './GameUtilsProps'

describe('Given the function generate game board generator by size', () => {
  it('With board measurements 1x1, Then expect it to return a board', () => {
    const board = generateGameBoardBySize(1, 1)

    expect(board).toEqual([[undefined], [undefined, undefined], [undefined]])
  })

  it('With board measurements 5x5, Then expect it to return a board', () => {
    const board = generateGameBoardBySize(5, 5)

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
    const board = generateGameBoardBySize(3, 5)

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
    const board = generateGameBoardBySize(1, 1)
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
    const board = generateGameBoardBySize(5, 5)
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
