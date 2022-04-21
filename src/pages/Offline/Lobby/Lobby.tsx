import { useContext, useEffect, useState } from 'react'
import { AvatarFullConfig, genConfig } from 'react-nice-avatar'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { CardPlayer } from '../../../components/CardPlayer'
import { InformationBox } from '../../../components/InformationBox'
import { GameContext } from '../../../contexts/GameContext'
import { SfxContext } from '../../../contexts/SfxContext'
import { Colors } from '../../../interfaces/Player'
import { registerLog } from '../../../utils/LogUtils'
import { errorToastOptions } from '../../../utils/ToastUtils'

import { variantsContainer } from './LobbyAnimation'
import { Container } from './LobbyStyle'

export function Lobby() {
  const { clickSfx } = useContext(SfxContext)
  const { game, createNewGame } = useContext(GameContext)
  const navigate = useNavigate()

  const [firstPlayerAvatar, setFirstPlayerAvatar] = useState<AvatarFullConfig>(
    {}
  )
  const [secondPlayerAvatar, setSecondPlayerAvatar] = useState<
    AvatarFullConfig | undefined
  >({})

  const [firstPlayerName, setFirstPlayerName] = useState<string>('')
  const [secondPlayerName, setSecondPlayerName] = useState<string>('')

  const [unavailableColorsForFirstPlayer, setUnavailableColorsForFirstPlayer] =
    useState<Colors[]>([])
  const [
    unavailableColorsForSecondPlayer,
    setUnavailableColorsForSecondPlayer,
  ] = useState<Colors[]>([])

  const [selectedColorForFirstPlayer, setSelectedColorForFirstPlayer] =
    useState<Colors>('empty')
  const [selectedColorForSecondPlayer, setSelectedColorForSecondPlayer] =
    useState<Colors>('empty')

  const [isFirstPlayerReady, setIsFirstPlayerReady] = useState<boolean>(false)
  const [isSecondPlayerReady, setIsSecondPlayerReady] = useState<boolean>(false)

  const [mobileScreen, setMobileScreen] = useState<string>('first')

  function handleFirstPlayerColorChange(color: Colors) {
    setUnavailableColorsForSecondPlayer([color])
    setSelectedColorForFirstPlayer(color)

    setFirstPlayerAvatar((prevState) => {
      return genConfig({
        ...prevState,
        bgColor: color,
      })
    })
  }

  function handleSecondPlayerColorChange(color: Colors) {
    setUnavailableColorsForFirstPlayer([color])
    setSelectedColorForSecondPlayer(color)

    setSecondPlayerAvatar((prevState) => {
      return genConfig({
        ...prevState,
        bgColor: color,
      })
    })
  }

  function handleFirstPlayerReady(status: boolean) {
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

    if (errors.length === 0) {
      setIsFirstPlayerReady(status)

      if (isSecondPlayerReady) {
        setMobileScreen('information')
      } else {
        setMobileScreen('second')
      }
    }
  }

  function handleSecondPlayerReady(status: boolean) {
    clickSfx()

    const errors = []

    if (!secondPlayerName) {
      toast.error('Enter the name of the second player', {
        ...errorToastOptions,
        toastId: 'name-error-second-player',
      })
      errors.push('name')
    }

    if (selectedColorForSecondPlayer === 'empty') {
      toast.error('Choose a color for the second player', {
        ...errorToastOptions,
        toastId: 'color-error-second-player',
      })
      errors.push('color')
    }

    if (errors.length === 0) {
      setIsSecondPlayerReady(status)
      setMobileScreen('information')
    }
  }

  function handleEditButton(screen: string) {
    clickSfx()
    setMobileScreen(screen)

    if (screen === 'first') {
      setIsFirstPlayerReady(false)
    }

    if (screen === 'second') {
      setIsSecondPlayerReady(false)
    }
  }

  function handleStartGame() {
    clickSfx()

    const { board, marks } = game

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
        name: secondPlayerName ?? '',
        color: selectedColorForSecondPlayer,
        pontuation: 0,
        avatar: secondPlayerAvatar ?? {},
      },
      board,
      marks,
      turn: 1,
    })

    registerLog('create_offline_game')
    navigate('/game')
  }

  function randomAvatar(player: 'first' | 'second') {
    clickSfx()

    if (player === 'first') {
      const newAvatar = genConfig({})

      setFirstPlayerAvatar({
        ...newAvatar,
        bgColor: selectedColorForFirstPlayer ?? 'transparent',
      })
      return
    }

    const newAvatar = genConfig({})

    setSecondPlayerAvatar({
      ...newAvatar,
      bgColor: selectedColorForSecondPlayer ?? 'transparent',
    })
  }

  useEffect(() => {
    setFirstPlayerAvatar(
      genConfig({
        bgColor: 'transparent',
      })
    )
    setSecondPlayerAvatar(
      genConfig({
        bgColor: 'transparent',
      })
    )
  }, [])

  return (
    <Container initial="initial" animate="animate" variants={variantsContainer}>
      <CardPlayer
        title="First Player"
        mobileScreen={mobileScreen === 'first'}
        playerIsReady={isFirstPlayerReady}
        playerName={firstPlayerName}
        setPlayerName={setFirstPlayerName}
        playerAvatar={firstPlayerAvatar}
        selectedColor={selectedColorForFirstPlayer}
        unavailableColors={unavailableColorsForFirstPlayer}
        onRandomAvatar={() => randomAvatar('first')}
        onColorSelected={handleFirstPlayerColorChange}
        onPlayerReady={handleFirstPlayerReady}
        isMyCard
      />

      <CardPlayer
        title="Second Player"
        mobileScreen={mobileScreen === 'second'}
        playerIsReady={isSecondPlayerReady}
        playerName={secondPlayerName}
        setPlayerName={setSecondPlayerName}
        playerAvatar={secondPlayerAvatar}
        selectedColor={selectedColorForSecondPlayer}
        unavailableColors={unavailableColorsForSecondPlayer}
        onRandomAvatar={() => randomAvatar('second')}
        onColorSelected={handleSecondPlayerColorChange}
        onPlayerReady={handleSecondPlayerReady}
        isMyCard
      />

      <InformationBox
        mobileScreen={mobileScreen === 'information'}
        firstPlayerName={firstPlayerName}
        firstPlayerColor={selectedColorForFirstPlayer}
        isFirstPlayerReady={isFirstPlayerReady}
        secondPlayerName={secondPlayerName}
        secondPlayerColor={selectedColorForSecondPlayer}
        isSecondPlayerReady={isSecondPlayerReady}
        onEditPlayer={handleEditButton}
        onStartGame={handleStartGame}
      />
    </Container>
  )
}
