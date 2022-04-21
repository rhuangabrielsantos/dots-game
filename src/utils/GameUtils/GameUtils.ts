import { Game, GameBoard, Player } from '../../interfaces'
import { GameMarks, GameProps } from '../../interfaces/Game'
import { Colors } from '../../interfaces/Player'

import {
  ClickProps,
  HandlePlayerClickProps,
  HandleSquareWinnerCheck,
  LinesMarkeds,
} from './GameUtilsProps'

export function generateGameBySize(collumns: number, rows: number): GameProps {
  const board: GameBoard = generateGameBoardBySize(collumns, rows)
  const marks: GameMarks = generateGameMarksBySize(collumns, rows)

  return { board, marks }
}

function generateGameBoardBySize(collumns: number, rows: number): GameBoard {
  const board: GameBoard = []
  for (let index = 0; index < rows * 2; index++) {
    if (index % 2 === 0) {
      const row: Colors[] = []
      for (let index = 0; index < collumns; index++) {
        row[index] = 'empty'
      }
      board.push(row)
    } else {
      const row: Colors[] = []
      for (let index = 0; index < collumns + 1; index++) {
        row[index] = 'empty'
      }
      board.push(row)
    }
  }

  const lastRow: Colors[] = []
  for (let index = 0; index < collumns; index++) {
    lastRow[index] = 'empty'
  }
  board.push(lastRow)

  return board
}

function generateGameMarksBySize(collumns: number, rows: number): GameMarks {
  const marks: GameMarks = []

  for (let index = 0; index < rows; index++) {
    const row: Colors[] = []
    for (let index = 0; index < collumns; index++) {
      row[index] = 'primary'
    }
    marks.push(row)
  }

  return marks
}

export function handlePlayerClick(props: HandlePlayerClickProps): GameBoard {
  const { board, collumn, row, color } = props

  board[collumn][row] = color

  return board
}

export function handleSquareWinnerCheck(props: HandleSquareWinnerCheck) {
  const { game, clickCoords, lastPlayer, isTopOrBottom } = props

  let thereIsAWinnerOfTheSquare = false
  let newGameState: Game = game

  const colorsOptions: Colors[] = [
    '#429867',
    '#482344',
    '#e02130',
    '#fab243',
    'tertiary',
  ]

  if (
    isTopOrBottom &&
    game.board[clickCoords.collumn] &&
    colorsOptions.includes(game.board[clickCoords.collumn][clickCoords.row]) &&
    game.board[clickCoords.collumn + 1] &&
    colorsOptions.includes(
      game.board[clickCoords.collumn + 1][clickCoords.row]
    ) &&
    game.board[clickCoords.collumn + 1] &&
    colorsOptions.includes(
      game.board[clickCoords.collumn + 1][clickCoords.row + 1]
    ) &&
    game.board[clickCoords.collumn + 2] &&
    colorsOptions.includes(game.board[clickCoords.collumn + 2][clickCoords.row])
  ) {
    newGameState = generateNewPointForPlayer(newGameState, lastPlayer)
    newGameState = markSquareWithTheColorOfTheWinner(
      [clickCoords.collumn + 1, clickCoords.row],
      newGameState,
      lastPlayer,
      {
        top: [clickCoords.collumn, clickCoords.row],
        bottom: [clickCoords.collumn + 1, clickCoords.row],
        left: [clickCoords.collumn + 1, clickCoords.row + 1],
        right: [clickCoords.collumn + 2, clickCoords.row],
      }
    )

    thereIsAWinnerOfTheSquare = true
  }

  if (
    isTopOrBottom &&
    game.board[clickCoords.collumn] &&
    colorsOptions.includes(game.board[clickCoords.collumn][clickCoords.row]) &&
    game.board[clickCoords.collumn - 2] &&
    colorsOptions.includes(
      game.board[clickCoords.collumn - 2][clickCoords.row]
    ) &&
    game.board[clickCoords.collumn - 1] &&
    colorsOptions.includes(
      game.board[clickCoords.collumn - 1][clickCoords.row]
    ) &&
    game.board[clickCoords.collumn - 1] &&
    colorsOptions.includes(
      game.board[clickCoords.collumn - 1][clickCoords.row + 1]
    )
  ) {
    newGameState = generateNewPointForPlayer(newGameState, lastPlayer)
    newGameState = markSquareWithTheColorOfTheWinner(
      [clickCoords.collumn - 2, clickCoords.row],
      newGameState,
      lastPlayer,
      {
        top: [clickCoords.collumn - 2, clickCoords.row],
        bottom: [clickCoords.collumn - 1, clickCoords.row],
        left: [clickCoords.collumn - 1, clickCoords.row + 1],
        right: [clickCoords.collumn, clickCoords.row],
      }
    )

    thereIsAWinnerOfTheSquare = true
  }

  if (
    !isTopOrBottom &&
    game.board[clickCoords.collumn] &&
    colorsOptions.includes(game.board[clickCoords.collumn][clickCoords.row]) &&
    game.board[clickCoords.collumn - 1] &&
    colorsOptions.includes(
      game.board[clickCoords.collumn - 1][clickCoords.row]
    ) &&
    game.board[clickCoords.collumn] &&
    colorsOptions.includes(
      game.board[clickCoords.collumn][clickCoords.row + 1]
    ) &&
    game.board[clickCoords.collumn + 1] &&
    colorsOptions.includes(game.board[clickCoords.collumn + 1][clickCoords.row])
  ) {
    newGameState = generateNewPointForPlayer(newGameState, lastPlayer)
    newGameState = markSquareWithTheColorOfTheWinner(
      [clickCoords.collumn - 1, clickCoords.row],
      newGameState,
      lastPlayer,
      {
        top: [clickCoords.collumn - 1, clickCoords.row],
        bottom: [clickCoords.collumn, clickCoords.row],
        left: [clickCoords.collumn, clickCoords.row + 1],
        right: [clickCoords.collumn + 1, clickCoords.row],
      }
    )

    thereIsAWinnerOfTheSquare = true
  }

  if (
    !isTopOrBottom &&
    game.board[clickCoords.collumn] &&
    colorsOptions.includes(game.board[clickCoords.collumn][clickCoords.row]) &&
    game.board[clickCoords.collumn - 1] &&
    colorsOptions.includes(
      game.board[clickCoords.collumn - 1][clickCoords.row - 1]
    ) &&
    game.board[clickCoords.collumn] &&
    colorsOptions.includes(
      game.board[clickCoords.collumn][clickCoords.row - 1]
    ) &&
    game.board[clickCoords.collumn + 1] &&
    colorsOptions.includes(
      game.board[clickCoords.collumn + 1][clickCoords.row - 1]
    )
  ) {
    newGameState = generateNewPointForPlayer(newGameState, lastPlayer)
    newGameState = markSquareWithTheColorOfTheWinner(
      [clickCoords.collumn - 1, clickCoords.row - 1],
      newGameState,
      lastPlayer,
      {
        top: [clickCoords.collumn, clickCoords.row],
        bottom: [clickCoords.collumn - 1, clickCoords.row - 1],
        left: [clickCoords.collumn, clickCoords.row - 1],
        right: [clickCoords.collumn + 1, clickCoords.row - 1],
      }
    )

    thereIsAWinnerOfTheSquare = true
  }

  const endGameChecked = checkEndGame(newGameState)
  return { newGameState: endGameChecked, thereIsAWinnerOfTheSquare }
}

function checkEndGame(game: Game): Game {
  const { firstPlayer, secondPlayer } = game

  let newGameState = game

  const allSquaresAreFilled =
    firstPlayer.pontuation + secondPlayer.pontuation ===
    game.marks.length * game.marks.length

  if (allSquaresAreFilled) {
    const isDraw = firstPlayer.pontuation === secondPlayer.pontuation

    if (isDraw) {
      newGameState = {
        ...newGameState,
        isDraw: true,
      }

      return newGameState
    }

    const playerWinner =
      firstPlayer.pontuation > secondPlayer.pontuation
        ? game.firstPlayer
        : game.secondPlayer

    newGameState = {
      ...game,
      winner: playerWinner,
    }
  }

  return newGameState
}

function generateNewPointForPlayer(game: Game, lastPlayer: Player) {
  return lastPlayer.id === game.firstPlayer.id
    ? {
        ...game,
        firstPlayer: {
          ...game.firstPlayer,
          pontuation: game.firstPlayer.pontuation + 1,
        },
      }
    : {
        ...game,
        secondPlayer: {
          ...game.secondPlayer,
          pontuation: game.secondPlayer.pontuation + 1,
        },
      }
}

function markSquareWithTheColorOfTheWinner(
  squareCoords: number[],
  game: Game,
  lastPlayer: Player,
  lines: LinesMarkeds
): Game {
  const newMarks = [...game.marks]
  const newBoard = [...game.board]

  newMarks[
    squareCoords[0] % 2 === 0 ? squareCoords[0] / 2 : squareCoords[0] / 2 - 0.5
  ][squareCoords[1]] = lastPlayer.color

  newBoard[lines.top[0]][lines.top[1]] = 'tertiary'
  newBoard[lines.bottom[0]][lines.bottom[1]] = 'tertiary'
  newBoard[lines.left[0]][lines.left[1]] = 'tertiary'
  newBoard[lines.right[0]][lines.right[1]] = 'tertiary'

  return {
    ...game,
    board: newBoard,
    marks: newMarks,
  }
}

export async function handleBotAction(game: Game): Promise<Game> {
  await sleep(1000)

  const winnerMarks = thereIsAPossibilityOfWinningTheSquare(game.board)

  console.log(winnerMarks[0])

  const botClick = winnerMarks[0] ? winnerMarks[0] : generateRandomClick(game)

  game.board[botClick.collumn][botClick.row] = game.secondPlayer.color

  const { newGameState, thereIsAWinnerOfTheSquare } = handleSquareWinnerCheck({
    clickCoords: botClick,
    game,
    isTopOrBottom: botClick.collumn % 2 === 0,
    lastPlayer: game.secondPlayer,
  })

  const turn = thereIsAWinnerOfTheSquare ? game.turn : game.turn + 1

  return {
    ...newGameState,
    turn,
  }
}

function generateRandomClick(game: Game): ClickProps {
  const collumns: number[] = []
  const rows: number[] = []

  game.board
    .map((collumn) => {
      return collumn.includes('empty')
    })
    .map((isValid, index) => {
      if (isValid) {
        collumns.push(index)
      }
    })

  const randomCollumn = collumns[Math.floor(Math.random() * collumns.length)]

  game.board[randomCollumn]
    .map((collumn) => {
      return collumn.includes('empty')
    })
    .map((isValid, index) => {
      if (isValid) {
        rows.push(index)
      }
    })

  return {
    collumn: randomCollumn,
    row: rows[Math.floor(Math.random() * rows.length)],
  }
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

function thereIsAPossibilityOfWinningTheSquare(board: GameBoard): ClickProps[] {
  const colorsOptions: Colors[] = [
    '#429867',
    '#482344',
    '#e02130',
    '#fab243',
    'tertiary',
  ]

  const marks: ClickProps[] = []
  let isTopOrBottom: boolean

  board.forEach((collumn, collumnIndex) => {
    collumn.forEach((row, rowIndex) => {
      isTopOrBottom = collumnIndex % 2 === 0
      if (
        isTopOrBottom &&
        board[collumnIndex][rowIndex] === 'empty' &&
        board[collumnIndex + 1] &&
        colorsOptions.includes(board[collumnIndex + 1][rowIndex]) &&
        board[collumnIndex + 2] &&
        colorsOptions.includes(board[collumnIndex + 2][rowIndex]) &&
        board[collumnIndex + 1] &&
        colorsOptions.includes(board[collumnIndex + 1][rowIndex + 1])
      ) {
        marks.push({
          collumn: collumnIndex,
          row: rowIndex,
        })
      }

      if (
        !isTopOrBottom &&
        board[collumnIndex][rowIndex] === 'empty' &&
        board[collumnIndex - 1] &&
        colorsOptions.includes(board[collumnIndex - 1][rowIndex]) &&
        board[collumnIndex] &&
        colorsOptions.includes(board[collumnIndex][rowIndex + 1]) &&
        board[collumnIndex + 1] &&
        colorsOptions.includes(board[collumnIndex + 1][rowIndex])
      ) {
        marks.push({
          collumn: collumnIndex,
          row: rowIndex,
        })
      }

      if (
        !isTopOrBottom &&
        board[collumnIndex][rowIndex] === 'empty' &&
        board[collumnIndex - 1] &&
        colorsOptions.includes(board[collumnIndex - 1][rowIndex - 1]) &&
        board[collumnIndex] &&
        colorsOptions.includes(board[collumnIndex][rowIndex - 1]) &&
        board[collumnIndex + 1] &&
        colorsOptions.includes(board[collumnIndex + 1][rowIndex - 1])
      ) {
        marks.push({
          collumn: collumnIndex,
          row: rowIndex,
        })
      }

      if (
        isTopOrBottom &&
        board[collumnIndex][rowIndex] === 'empty' &&
        board[collumnIndex - 1] &&
        colorsOptions.includes(board[collumnIndex - 1][rowIndex]) &&
        board[collumnIndex - 2] &&
        colorsOptions.includes(board[collumnIndex - 2][rowIndex]) &&
        board[collumnIndex - 1] &&
        colorsOptions.includes(board[collumnIndex - 1][rowIndex + 1])
      ) {
        marks.push({
          collumn: collumnIndex,
          row: rowIndex,
        })
      }
    })
  })

  return marks
}
