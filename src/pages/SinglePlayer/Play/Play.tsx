import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Board } from '../../../components/Board'
import { PlayerProfile } from '../../../components/PlayerProfile'
import { GameContext } from '../../../contexts/GameContext'
import { Game as GameProps } from '../../../interfaces'
import { handleBotAction } from '../../../utils/GameUtils'
import { registerLog } from '../../../utils/LogUtils'

import { variantsContainer } from './PlayAnimations'
import { Container } from './PlayStyle'

export function Play() {
  const navigate = useNavigate()
  const { game, updateGame } = useContext(GameContext)

  const [containerAnimation, setContainerAnimation] = useState(true)

  async function handleUpdateGame(newGame: GameProps) {
    updateGame(newGame)

    if (newGame.turn % 2 === 0) {
      const botAction = await handleBotAction(newGame)
      handleUpdateGame(botAction)
    }
  }

  useEffect(() => {
    if (game.board.length === 0) {
      navigate('/')
    }
  }, [game])

  useEffect(() => {
    if (game.winner || game.isDraw) {
      registerLog('end_single_player_game')

      setContainerAnimation(false)
      const timeout = setTimeout(() => {
        navigate('/single-player/winner')
      }, 900)

      return () => clearTimeout(timeout)
    }
  }, [game.winner, game.isDraw])

  useEffect(() => {
    registerLog('play_single_player_game')
  }, [])

  return (
    <Container
      initial="initial"
      animate={containerAnimation ? 'animate' : 'initial'}
      variants={variantsContainer}
    >
      <PlayerProfile player={game.firstPlayer} isMyTurn={game.turn % 2 === 1} />
      <Board game={game} updateGame={handleUpdateGame} />
      <PlayerProfile
        player={game.secondPlayer}
        isSecondPlayer
        isMyTurn={game.turn % 2 === 0}
      />
    </Container>
  )
}
