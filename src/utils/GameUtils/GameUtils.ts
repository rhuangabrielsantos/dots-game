import { Game, GameBoard, Player } from '@/interfaces'
import { GameMarks, GameProps } from '@/interfaces/Game'

import {
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

function generateGameMarksBySize(collumns: number, rows: number): GameMarks {
  const marks: GameMarks = []

  for (let index = 0; index < rows; index++) {
    const row: undefined[] = []
    for (let index = 0; index < collumns; index++) {
      row[index] = undefined
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

  if (
    isTopOrBottom &&
    game.board[clickCoords.collumn] &&
    game.board[clickCoords.collumn][clickCoords.row] &&
    game.board[clickCoords.collumn + 1] &&
    game.board[clickCoords.collumn + 1][clickCoords.row] &&
    game.board[clickCoords.collumn + 1] &&
    game.board[clickCoords.collumn + 1][clickCoords.row + 1] &&
    game.board[clickCoords.collumn + 2] &&
    game.board[clickCoords.collumn + 2][clickCoords.row]
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
    game.board[clickCoords.collumn][clickCoords.row] &&
    game.board[clickCoords.collumn - 2] &&
    game.board[clickCoords.collumn - 2][clickCoords.row] &&
    game.board[clickCoords.collumn - 1] &&
    game.board[clickCoords.collumn - 1][clickCoords.row] &&
    game.board[clickCoords.collumn - 1] &&
    game.board[clickCoords.collumn - 1][clickCoords.row + 1]
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
    game.board[clickCoords.collumn][clickCoords.row] &&
    game.board[clickCoords.collumn - 1] &&
    game.board[clickCoords.collumn - 1][clickCoords.row] &&
    game.board[clickCoords.collumn] &&
    game.board[clickCoords.collumn][clickCoords.row + 1] &&
    game.board[clickCoords.collumn + 1] &&
    game.board[clickCoords.collumn + 1][clickCoords.row]
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
    game.board[clickCoords.collumn][clickCoords.row] &&
    game.board[clickCoords.collumn - 1] &&
    game.board[clickCoords.collumn - 1][clickCoords.row - 1] &&
    game.board[clickCoords.collumn] &&
    game.board[clickCoords.collumn][clickCoords.row - 1] &&
    game.board[clickCoords.collumn + 1] &&
    game.board[clickCoords.collumn + 1][clickCoords.row - 1]
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
  const { firstPlayer, secondPlayer, marks } = game

  let newGameState = game

  const allSquaresAreFilled = marks.every((row) =>
    row.every((square) => square)
  )

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

  newBoard[lines.top[0]][lines.top[1]] = 'primary'
  newBoard[lines.bottom[0]][lines.bottom[1]] = 'primary'
  newBoard[lines.left[0]][lines.left[1]] = 'primary'
  newBoard[lines.right[0]][lines.right[1]] = 'primary'

  return {
    ...game,
    board: newBoard,
    marks: newMarks,
  }
}
