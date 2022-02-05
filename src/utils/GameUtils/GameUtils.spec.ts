import { generateGameBoardBySize } from './GameUtils'

describe('test game utils functions', () => {
  it('given the function generate game board generator by size, with board measurements 1x1, then expect it to return a board', () => {
    const board = generateGameBoardBySize(1, 1)

    expect(board).toEqual([[undefined], [undefined, undefined], [undefined]])
  })

  it('given the function generate game board generator by size, with board measurements 5x5, then expect it to return a board', () => {
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

  it('given the function generate game board generator by size, with board measurements 3x5, then expect it to return a board', () => {
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
