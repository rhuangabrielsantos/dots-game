import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { BackButton } from '@/components/BackButton'
import { Board } from '@/components/Board'
import { PlayerProfile } from '@/components/PlayerProfile'
import { GameContext } from '@/contexts/GameContext'

import { variantsContainer } from './GameAnimations'
import { Container } from './GameStyle'

export function Game() {
  const navigate = useNavigate()
  const { game } = useContext(GameContext)

  const [containerAnimation, setContainerAnimation] = useState(true)

  function handleBackButton() {
    setContainerAnimation(false)

    setTimeout(() => {
      window.history.back()
    }, 900)
  }

  useEffect(() => {
    if (game.board.length === 0) {
      navigate('/')
    }
  }, [game])

  return (
    <Container
      initial="initial"
      animate={containerAnimation ? 'animate' : 'initial'}
      variants={variantsContainer}
    >
      <BackButton onClick={handleBackButton} />

      <PlayerProfile player={game.firstPlayer} isMyTurn={game.turn % 2 === 1} />
      <Board board={game?.board} marks={game?.marks} />
      <PlayerProfile
        player={game.secondPlayer}
        isSecondPlayer
        isMyTurn={game.turn % 2 === 0}
      />
    </Container>
  )
}
