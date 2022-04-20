import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { Button } from '../../../components/Button'
import { NiceAvatar } from '../../../components/NiceAvatar'
import { GameContext } from '../../../contexts/GameContext'
import { SfxContext } from '../../../contexts/SfxContext'
import { database } from '../../../services/firebase'

import { Box, BoxButton, Container, RestartIcon, Title } from './WinnerStyle'

export function Winner() {
  const navigate = useNavigate()

  const { id } = useParams()
  const { game } = useContext(GameContext)
  const { completedSfx } = useContext(SfxContext)
  const [firstName, setFirstName] = useState<string>()

  function handlePlayAgain() {
    navigate('/')
  }

  useEffect(() => {
    setFirstName(game?.winner?.name?.split(' ')[0])

    completedSfx()

    if (id) {
      const gameRef = database.ref(`games/${id}`)
      gameRef.remove()
    }
  }, [])

  return (
    <Container
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {game.isDraw ? (
        <Box>
          <NiceAvatar
            player={game.firstPlayer}
            avatarConfig={game.firstPlayer.avatar}
            isMyTurn
          />
          <Title>It&apos;s a draw!</Title>
          <NiceAvatar
            player={game.secondPlayer}
            avatarConfig={game.secondPlayer.avatar}
            isMyTurn
            isSecondPlayer
          />
        </Box>
      ) : (
        <Box>
          <NiceAvatar
            player={game.winner}
            isMyTurn={true}
            myColor={game.winner?.color}
            avatarConfig={game.winner?.avatar}
          />
          <Title>{firstName} wins!</Title>
        </Box>
      )}

      <BoxButton>
        <Button color="black" onClick={handlePlayAgain}>
          <RestartIcon />
          Play again
        </Button>
      </BoxButton>
    </Container>
  )
}
