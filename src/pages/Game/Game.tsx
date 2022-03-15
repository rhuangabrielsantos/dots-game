import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { BackButton } from '@/components/BackButton'
import { Board } from '@/components/Board'
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
      <Board board={game?.board} marks={game?.marks} />
    </Container>
  )
}
