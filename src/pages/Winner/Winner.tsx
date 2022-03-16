import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/Button'
import { NiceAvatar } from '@/components/NiceAvatar'
import { GameContext } from '@/contexts/GameContext'
import { SfxContext } from '@/contexts/SfxContext'

import {
  Box,
  BoxButton,
  Container,
  GoogleIcon,
  RestartIcon,
  Title,
} from './WinnerStyle'

export function Winner() {
  const navigate = useNavigate()

  const { game } = useContext(GameContext)
  const { completedSfx } = useContext(SfxContext)

  function handlePlayAgain() {
    navigate('/play-offline')
  }

  useEffect(() => {
    completedSfx()
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
          <Title>{game.winner?.name} wins!</Title>
        </Box>
      )}

      <BoxButton>
        <Button color="black" onClick={handlePlayAgain}>
          <RestartIcon />
          Play again
        </Button>
        <Button color="red" disabled title="Coming soon...">
          <GoogleIcon />
          Play Online
        </Button>
      </BoxButton>
    </Container>
  )
}
