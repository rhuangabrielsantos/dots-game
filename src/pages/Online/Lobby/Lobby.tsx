import { useContext, useState } from 'react'
import { useEffect } from 'react'
import Lottie from 'react-lottie'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

import animationData from '../../../assets/animations/loading.json'
import { CardPlayer } from '../../../components/CardPlayer'
import { InformationBox } from '../../../components/InformationBox'
import { SfxContext } from '../../../contexts/SfxContext'
import { useAuth } from '../../../hooks/useAuth'
import { Game } from '../../../interfaces'
import { Colors } from '../../../interfaces/Player'
import { database } from '../../../services/firebase'
import { errorToastOptions } from '../../../utils/ToastUtils'

import { Container, ContainerCopy, CopyIcon, EnterButton } from './LobbyStyle'

export function Lobby() {
  const navigate = useNavigate()
  const { user } = useAuth()
  const { id } = useParams()
  const { clickSfx, tickSfx } = useContext(SfxContext)
  const gameRef = database.ref(`games/${id}`)

  const [game, setGame] = useState<Game | undefined>(undefined)

  async function handleFirstPlayerColorChange(color: Colors) {
    if (user?.id !== game?.firstPlayer.id) {
      return
    }

    if (game?.secondPlayer?.id) {
      await gameRef.update({
        ...game,
        firstPlayer: {
          ...game?.firstPlayer,
          avatar: {
            ...game?.firstPlayer?.avatar,
            bgColor: color,
          },
          color,
        },
        secondPlayer: {
          ...game?.secondPlayer,
          unavailableColors: [color],
        },
      })
      return
    }

    await gameRef.update({
      ...game,
      firstPlayer: {
        ...game?.firstPlayer,
        avatar: {
          ...game?.firstPlayer?.avatar,
          bgColor: color,
        },
        color,
      },
    })
  }

  async function handleSecondPlayerColorChange(color: Colors) {
    if (user?.id !== game?.secondPlayer.id) {
      return
    }

    await gameRef.update({
      ...game,
      firstPlayer: {
        ...game?.firstPlayer,
        unavailableColors: [color],
      },
      secondPlayer: {
        ...game?.secondPlayer,
        avatar: {
          ...game?.secondPlayer?.avatar,
          bgColor: color,
        },
        color,
      },
    })
  }

  async function handleFirstPlayerReady(status: boolean) {
    if (user?.id !== game?.firstPlayer.id) {
      return
    }

    if (!game?.secondPlayer) {
      toast.error(
        'Wait for the second player to enter the lobby',
        errorToastOptions
      )
      return
    }

    if (game?.firstPlayer?.color === game?.secondPlayer?.color) {
      toast.error('Choose different colors to play', errorToastOptions)
      return
    }

    clickSfx()

    if (game?.firstPlayer.color === 'empty') {
      toast.error('Choose your color to play', errorToastOptions)
      return
    }

    await gameRef.update({
      ...game,
      firstPlayer: {
        ...game?.firstPlayer,
        isReady: status,
      },
    })
  }

  async function handleSecondPlayerReady(status: boolean) {
    if (user?.id !== game?.secondPlayer.id) {
      return
    }

    if (game?.firstPlayer.color === game?.secondPlayer.color) {
      toast.error('Choose different colors to play', errorToastOptions)
      return
    }

    clickSfx()

    if (game?.secondPlayer.color === 'empty') {
      toast.error('Choose your color to play', errorToastOptions)
      return
    }

    await gameRef.update({
      ...game,
      secondPlayer: {
        ...game?.secondPlayer,
        isReady: status,
      },
    })
  }

  async function handleEnterGame() {
    clickSfx()

    if (!user) {
      toast.info('Sign In with Google to play the game', errorToastOptions)
      return
    }

    const gameRef = database.ref(`games/${id}`)
    await gameRef.update({
      ...game,
      secondPlayer: {
        avatar: user?.avatar,
        id: user?.id,
        name: user?.name,
        pontuation: 0,
        isReady: false,
        color: '',
      },
    })
  }

  async function handleEditPlayer(player: string) {
    clickSfx()

    if (player === 'first') {
      gameRef.update({
        ...game,
        firstPlayer: {
          ...game?.firstPlayer,
          isReady: false,
        },
      })
      return
    }

    gameRef.update({
      ...game,
      secondPlayer: {
        ...game?.secondPlayer,
        isReady: false,
      },
    })
  }

  async function handleStartGame() {
    clickSfx()

    await gameRef.update({
      ...game,
      isStarted: true,
    })

    navigate(`/${id}/game`)
  }

  function handleCopyLink() {
    clickSfx()
    navigator.clipboard.writeText(`${window.location.href}`)
    toast.info('Link copied to clipboard', errorToastOptions)
  }

  useEffect(() => {
    if (game?.isStarted) {
      navigate(`/${id}/game`)
    }
  }, [game?.isStarted])

  useEffect(() => {
    gameRef.on('value', (snapshot) => {
      const game = snapshot.val() as Game

      if (!game) {
        navigate('/')
      }

      if (game) {
        setGame(game)
      }
    })

    return () => {
      gameRef.off()
    }
  }, [])

  return game ? (
    <Container>
      <CardPlayer
        title="First Player"
        mobileScreen={
          user?.id === game?.firstPlayer.id &&
          (!game?.firstPlayer.isReady || !game?.secondPlayer.isReady)
        }
        playerName={game.firstPlayer.name}
        playerIsReady={game.firstPlayer.isReady}
        playerAvatar={game.firstPlayer.avatar}
        selectedColor={game.firstPlayer.color}
        unavailableColors={game.firstPlayer.unavailableColors}
        onColorSelected={handleFirstPlayerColorChange}
        onPlayerReady={handleFirstPlayerReady}
        isMyCard={user?.id === game.firstPlayer?.id}
        online
      />

      {!game.secondPlayer ? (
        user?.id !== game?.firstPlayer.id && (
          <EnterButton title="Enter the game" onClick={handleEnterGame} />
        )
      ) : (
        <>
          <CardPlayer
            title="Second Player"
            mobileScreen={
              user?.id === game?.secondPlayer.id &&
              (!game?.firstPlayer.isReady || !game?.secondPlayer.isReady)
            }
            playerName={game.secondPlayer.name}
            playerIsReady={game.secondPlayer.isReady}
            playerAvatar={game.secondPlayer.avatar}
            selectedColor={game.secondPlayer.color}
            unavailableColors={game.secondPlayer.unavailableColors}
            onColorSelected={handleSecondPlayerColorChange}
            onPlayerReady={handleSecondPlayerReady}
            isMyCard={user?.id === game.secondPlayer?.id}
            online
          />

          <InformationBox
            firstPlayerName={game.firstPlayer.name}
            firstPlayerColor={game.firstPlayer.color}
            isFirstPlayerReady={game.firstPlayer.isReady}
            secondPlayerName={game.secondPlayer.name}
            secondPlayerColor={game.secondPlayer.color}
            isSecondPlayerReady={game.secondPlayer.isReady}
            onEditPlayer={handleEditPlayer}
            onStartGame={handleStartGame}
          />
        </>
      )}

      <ContainerCopy
        title="Copy the link to invite second player"
        onClick={handleCopyLink}
        onMouseEnter={() => tickSfx()}
      >
        <CopyIcon />
      </ContainerCopy>
    </Container>
  ) : (
    <Container>
      <Lottie
        options={{
          loop: true,
          autoplay: true,
          animationData,
        }}
        height={200}
        width={200}
        isClickToPauseDisabled
      />
    </Container>
  )
}
