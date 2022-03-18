import { useContext } from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Board } from '../../components/Board'
import { PlayerProfile } from '../../components/PlayerProfile'
import { GameContext } from '../../contexts/GameContext'
import { Game } from '../../interfaces'
import { database } from '../../services/firebase'

import { variantsContainer } from './PlayOnlineAnimation'
import { Container } from './PlayOnlineStyle'

export function PlayOnline() {
  const navigate = useNavigate()
  const { id } = useParams()
  const gameRef = database.ref(`games/${id}`)
  const { updateGame } = useContext(GameContext)

  const [game, setGame] = useState<Game | undefined>(undefined)
  const [containerAnimation, setContainerAnimation] = useState(true)

  async function handleUpdateGame(newGame: Game) {
    await gameRef.update(newGame)
  }

  useEffect(() => {
    if (game?.winner || game?.isDraw) {
      updateGame(game)

      setContainerAnimation(false)
      const timeout = setTimeout(() => {
        navigate('/winner')
      }, 900)

      return () => clearTimeout(timeout)
    }
  }, [game?.winner, game?.isDraw])

  useEffect(() => {
    gameRef.on('value', (snapshot) => {
      const game = snapshot.val() as Game

      if (game) {
        setGame(game)
      }
    })

    return () => {
      gameRef.off()
    }
  }, [])

  return game ? (
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
  ) : (
    <div>Loading...</div>
  )
}
