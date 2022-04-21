import { useContext, useEffect, useState } from 'react'
import { AvatarFullConfig, genConfig } from 'react-nice-avatar'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { CardPlayer } from '../../../components/CardPlayer'
import { AuthContext } from '../../../contexts/AuthContext'
import { GameContext } from '../../../contexts/GameContext'
import { SfxContext } from '../../../contexts/SfxContext'
import { Colors } from '../../../interfaces/Player'
import { generateGameBySize } from '../../../utils/GameUtils'
import { registerLog } from '../../../utils/LogUtils'
import { errorToastOptions } from '../../../utils/ToastUtils'

import { variantsContainer } from './LobbyAnimation'
import { Container } from './LobbyStyle'

export function Lobby() {
  const { user } = useContext(AuthContext)
  const { clickSfx } = useContext(SfxContext)
  const { createNewGame } = useContext(GameContext)
  const navigate = useNavigate()

  const [firstPlayerAvatar, setFirstPlayerAvatar] = useState<AvatarFullConfig>(
    {}
  )

  const [firstPlayerName, setFirstPlayerName] = useState<string>('')

  const [selectedColorForFirstPlayer, setSelectedColorForFirstPlayer] =
    useState<Colors>('empty')

  function handleFirstPlayerColorChange(color: Colors) {
    setSelectedColorForFirstPlayer(color)

    setFirstPlayerAvatar((prevState) => {
      return genConfig({
        ...prevState,
        bgColor: color,
      })
    })
  }

  function handleStartGame() {
    clickSfx()

    const errors = []

    if (!firstPlayerName) {
      toast.error('Enter the name of the first player', {
        ...errorToastOptions,
        toastId: 'name-error-first-player',
      })
      errors.push('name')
    }

    if (selectedColorForFirstPlayer === 'empty') {
      toast.error('Choose a color for the first player', {
        ...errorToastOptions,
        toastId: 'color-error-first-player',
      })
      errors.push('color')
    }

    if (errors.length !== 0) {
      return
    }

    const { board, marks } = generateGameBySize(4, 4)

    const colors: Colors[] = ['#e02130', '#429867', '#482344', '#fab243']
    const botColor =
      colors.find((color) => color !== selectedColorForFirstPlayer) || 'empty'

    createNewGame({
      firstPlayer: {
        id: '1',
        name: firstPlayerName ?? '',
        color: selectedColorForFirstPlayer,
        pontuation: 0,
        avatar: firstPlayerAvatar ?? {},
      },
      secondPlayer: {
        id: '2',
        name: 'AI',
        color: botColor,
        pontuation: 0,
        avatar: genConfig({
          bgColor: botColor,
        }),
      },
      board,
      marks,
      turn: 1,
      isSinglePlayer: true,
    })

    registerLog('create_single_player_game')
    navigate('/single-player/game')
  }

  function randomAvatar() {
    clickSfx()

    const newAvatar = genConfig({})
    setFirstPlayerAvatar({
      ...newAvatar,
      bgColor: selectedColorForFirstPlayer ?? 'transparent',
    })
    return
  }

  useEffect(() => {
    setFirstPlayerAvatar(
      genConfig({
        ...user?.avatar,
        bgColor: 'transparent',
      }) ?? genConfig({})
    )

    setFirstPlayerName(user?.name ?? '')
  }, [user])

  return (
    <Container initial="initial" animate="animate" variants={variantsContainer}>
      <CardPlayer
        title="First Player"
        mobileScreen
        playerName={firstPlayerName}
        setPlayerName={setFirstPlayerName}
        playerAvatar={firstPlayerAvatar}
        selectedColor={selectedColorForFirstPlayer}
        onRandomAvatar={() => randomAvatar()}
        onColorSelected={handleFirstPlayerColorChange}
        onPlayerReady={handleStartGame}
        online={user ? true : false}
        isMyCard
      />
    </Container>
  )
}
