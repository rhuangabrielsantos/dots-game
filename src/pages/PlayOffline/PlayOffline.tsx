import { useContext, useEffect, useState } from 'react'
import Lottie from 'react-lottie'
import { AvatarFullConfig, genConfig } from 'react-nice-avatar'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import animationData from '@/assets/animations/success.json'
import { BackButton } from '@/components/BackButton'
import { ColorOptions } from '@/components/ColorOptions'
import { NiceAvatar } from '@/components/NiceAvatar'
import { GameContext } from '@/contexts/GameContext'
import { SfxContext } from '@/contexts/SfxContext'
import { Colors } from '@/interfaces/Player'
import { generateGameBySize } from '@/utils/GameUtils'
import { errorToastOptions } from '@/utils/ToastUtils'

import {
  variantsFlip,
  variantsContainer,
  variantsInformationBox,
} from './PlayOffilineAnimation'
import {
  Container,
  FormContainer,
  PlayerInfo,
  Label,
  Field,
  Button,
  WaitingTitle,
  EditButton,
  FlipContainer,
  InformationBox,
  InformationTitle,
  PlayerInfoContainer,
  PlayerInfoLabel,
  PlayerInfoValue,
  PlayerInfoTitle,
  PlayerDetails,
  PlayerInfoColor,
  InformationEditButton,
  PlayerDetailsHeader,
  NiceAvatarBox,
  RandomIcon,
} from './PlayOfflineStyle'

export function PlayOffline() {
  const { tickSfx, clickSfx } = useContext(SfxContext)
  const { createNewGame } = useContext(GameContext)
  const navigate = useNavigate()

  const [firstPlayerAvatar, setFirstPlayerAvatar] = useState<AvatarFullConfig>(
    {}
  )
  const [secondPlayerAvatar, setSecondPlayerAvatar] =
    useState<AvatarFullConfig>({})

  const [firstPlayerName, setFirstPlayerName] = useState<string>('')
  const [secondPlayerName, setSecondPlayerName] = useState<string>('')

  const [unavailableColorsForFirstPlayer, setUnavailableColorsForFirstPlayer] =
    useState<Colors[]>([])
  const [
    unavailableColorsForSecondPlayer,
    setUnavailableColorsForSecondPlayer,
  ] = useState<Colors[]>([])

  const [selectedColorForFirstPlayer, setSelectedColorForFirstPlayer] =
    useState<Colors>()
  const [selectedColorForSecondPlayer, setSelectedColorForSecondPlayer] =
    useState<Colors>()

  const [isFirstPlayerReady, setIsFirstPlayerReady] = useState<boolean>(false)
  const [isSecondPlayerReady, setIsSecondPlayerReady] = useState<boolean>(false)

  const [containerAnimation, setContainerAnimation] = useState<boolean>(true)

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

  function handleFirstPlayerReady() {
    clickSfx()

    const errors = []

    if (!firstPlayerName) {
      toast.error('Insira o nome do primeiro jogador', errorToastOptions)
      errors.push('name')
    }

    if (!selectedColorForFirstPlayer) {
      toast.error('Escolha uma cor para o primeiro jogador', errorToastOptions)
      errors.push('color')
    }

    if (errors.length === 0) {
      setIsFirstPlayerReady(true)
    }

    if (isSecondPlayerReady) {
      setMobileScreen('information')
    } else {
      setMobileScreen('second')
    }
  }

  function handleSecondPlayerReady() {
    clickSfx()

    const errors = []

    if (!secondPlayerName) {
      toast.error('Insira o nome do segundo jogador', errorToastOptions)
      errors.push('name')
    }

    if (!selectedColorForSecondPlayer) {
      toast.error('Escolha uma cor para o segundo jogador', errorToastOptions)
      errors.push('color')
    }

    if (errors.length === 0) {
      setIsSecondPlayerReady(true)
      setMobileScreen('information')
    }
  }

  function handleBackButton() {
    setContainerAnimation(false)

    setTimeout(() => {
      window.history.back()
    }, 900)
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

    const { board, marks } = generateGameBySize(4, 4)

    createNewGame({
      firstPlayer: {
        id: '1',
        name: firstPlayerName ?? '',
        color: selectedColorForFirstPlayer,
        pontuation: 0,
        avatar: firstPlayerAvatar,
      },
      secondPlayer: {
        id: '2',
        name: secondPlayerName ?? '',
        color: selectedColorForSecondPlayer,
        pontuation: 0,
        avatar: secondPlayerAvatar,
      },
      board,
      marks,
      turn: 1,
    })

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
    <Container
      initial="initial"
      animate={containerAnimation ? 'animate' : 'initial'}
      variants={variantsContainer}
    >
      <BackButton onClick={handleBackButton} />

      <FlipContainer mobileEnabled={mobileScreen === 'first'}>
        <FormContainer
          initial={{ rotateY: 0 }}
          variants={variantsFlip}
          animate={isFirstPlayerReady ? 'closed' : 'open'}
          backfaceVisibility="visible"
        >
          <EditButton
            onMouseEnter={() => tickSfx()}
            onClick={() => {
              clickSfx()
              setIsFirstPlayerReady(false)
            }}
          />
          <Lottie
            options={{
              loop: false,
              autoplay: true,
              animationData,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
              },
            }}
            isPaused={!isFirstPlayerReady}
            isStopped={!isFirstPlayerReady}
            height={200}
            width={200}
            style={{ transform: 'scaleX(-1)' }}
          />
          <WaitingTitle>Primeiro Jogador está pronto!</WaitingTitle>
        </FormContainer>

        <FormContainer
          initial={{ rotateY: 0 }}
          variants={variantsFlip}
          animate={isFirstPlayerReady ? 'closed' : 'open'}
          backfaceVisibility="hidden"
        >
          <PlayerInfo>Primeiro Jogador</PlayerInfo>

          <NiceAvatarBox>
            {/* <NiceAvatar
              avatarConfig={firstPlayerAvatar}
              isMyTurn
              size="small"
            /> */}

            <RandomIcon onClick={() => randomAvatar('first')} />
          </NiceAvatarBox>

          <Label htmlFor="firstPlayer">NOME</Label>
          <Field
            type="text"
            name="firstPlayer"
            placeholder="NOME"
            onChange={(event) => setFirstPlayerName(event.target.value)}
            value={firstPlayerName}
          />

          <Label htmlFor="firstPlayerColor">COR</Label>
          <ColorOptions
            unavailableColors={unavailableColorsForFirstPlayer}
            selectedColor={selectedColorForFirstPlayer}
            onChange={handleFirstPlayerColorChange}
          />

          <Button
            onClick={handleFirstPlayerReady}
            onMouseEnter={() => tickSfx()}
          >
            PRONTO
          </Button>
        </FormContainer>
      </FlipContainer>

      <FlipContainer mobileEnabled={mobileScreen === 'second'}>
        <FormContainer
          initial={{ rotateY: 0 }}
          variants={variantsFlip}
          animate={isSecondPlayerReady ? 'closed' : 'open'}
          backfaceVisibility="visible"
        >
          <EditButton
            onMouseEnter={() => tickSfx()}
            onClick={() => {
              clickSfx()
              setIsSecondPlayerReady(false)
            }}
          />
          <Lottie
            options={{
              loop: false,
              autoplay: true,
              animationData,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
              },
            }}
            isPaused={!isSecondPlayerReady}
            isStopped={!isSecondPlayerReady}
            height={200}
            width={200}
            style={{ transform: 'scaleX(-1)' }}
          />
          <WaitingTitle>Segundo Jogador está pronto!</WaitingTitle>
        </FormContainer>

        <FormContainer
          initial={{ rotateY: 0 }}
          variants={variantsFlip}
          animate={isSecondPlayerReady ? 'closed' : 'open'}
          backfaceVisibility="hidden"
        >
          <PlayerInfo>Segundo Jogador</PlayerInfo>

          <NiceAvatarBox>
            {/* <NiceAvatar
              avatarConfig={secondPlayerAvatar}
              isMyTurn
              size="small"
            /> */}

            <RandomIcon onClick={() => randomAvatar('second')} />
          </NiceAvatarBox>

          <Label htmlFor="secondPlayer">NOME</Label>
          <Field
            type="text"
            name="secondPlayer"
            placeholder="NOME"
            onChange={(event) => setSecondPlayerName(event.target.value)}
            value={secondPlayerName}
          />

          <Label htmlFor="secondPlayerColor">COR</Label>
          <ColorOptions
            unavailableColors={unavailableColorsForSecondPlayer}
            selectedColor={selectedColorForSecondPlayer}
            onChange={handleSecondPlayerColorChange}
          />

          <Button
            onClick={handleSecondPlayerReady}
            onMouseEnter={() => tickSfx()}
          >
            PRONTO
          </Button>
        </FormContainer>
      </FlipContainer>

      <InformationBox
        mobileEnabled={mobileScreen === 'information'}
        initial="initial"
        variants={variantsInformationBox}
        animate={
          isFirstPlayerReady && isSecondPlayerReady ? 'animate' : 'initial'
        }
      >
        <InformationTitle>Informações dos Jogadores</InformationTitle>

        <PlayerInfoContainer>
          <PlayerDetailsHeader>
            <PlayerInfoTitle>Primeiro Jogador</PlayerInfoTitle>
            <InformationEditButton
              onMouseEnter={() => tickSfx()}
              onClick={() => handleEditButton('first')}
            />
          </PlayerDetailsHeader>

          <PlayerDetails>
            <PlayerInfoLabel>NOME:</PlayerInfoLabel>
            <PlayerInfoValue>{firstPlayerName}</PlayerInfoValue>
          </PlayerDetails>
          <PlayerDetails>
            <PlayerInfoLabel>COR:</PlayerInfoLabel>
            <PlayerInfoColor playerColor={selectedColorForFirstPlayer ?? ''} />
          </PlayerDetails>
        </PlayerInfoContainer>

        <PlayerInfoContainer>
          <PlayerDetailsHeader>
            <PlayerInfoTitle>Segundo Jogador</PlayerInfoTitle>
            <InformationEditButton
              onMouseEnter={() => tickSfx()}
              onClick={() => handleEditButton('second')}
            />
          </PlayerDetailsHeader>

          <PlayerDetails>
            <PlayerInfoLabel>NOME:</PlayerInfoLabel>
            <PlayerInfoValue>{secondPlayerName}</PlayerInfoValue>
          </PlayerDetails>
          <PlayerDetails>
            <PlayerInfoLabel>COR:</PlayerInfoLabel>
            <PlayerInfoColor playerColor={selectedColorForSecondPlayer ?? ''} />
          </PlayerDetails>
        </PlayerInfoContainer>

        <Button onClick={handleStartGame} onMouseEnter={() => tickSfx()}>
          JOGAR
        </Button>
      </InformationBox>
    </Container>
  )
}
