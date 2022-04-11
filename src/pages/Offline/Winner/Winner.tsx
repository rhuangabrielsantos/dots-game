import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../../../components/Button'
import { NiceAvatar } from '../../../components/NiceAvatar'
import { GameContext } from '../../../contexts/GameContext'
import { SfxContext } from '../../../contexts/SfxContext'
import { generateGameBySize } from '../../../utils/GameUtils'

import { Box, BoxButton, Container, RestartIcon, Title } from './WinnerStyle'

export function Winner() {
  const navigate = useNavigate()

  const { game, updateGame } = useContext(GameContext)
  const { completedSfx } = useContext(SfxContext)
  const [firstName, setFirstName] = useState<string>()

  function handlePlayAgain() {
    const { board, marks } = generateGameBySize(4, 4)

    updateGame({
      firstPlayer: {
        ...game.firstPlayer,
        pontuation: 0,
      },
      secondPlayer: {
        ...game.secondPlayer,
        pontuation: 0,
      },
      board: board,
      marks: marks,
      winner: undefined,
      isDraw: false,
      turn: 1,
    })
    navigate('/game')
  }

  useEffect(() => {
    setFirstName(game?.winner?.name?.split(' ')[0])
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
          <Title id="title">It&apos;s a draw!</Title>
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
          <Title id="title">{firstName} wins!</Title>
        </Box>
      )}

      <BoxButton>
        <Button id="play-again-button" color="black" onClick={handlePlayAgain}>
          <RestartIcon />
          Play again
        </Button>
      </BoxButton>
    </Container>
  )
}
