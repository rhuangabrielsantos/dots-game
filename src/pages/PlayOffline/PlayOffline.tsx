import { useContext, useState } from 'react'
import Lottie from 'react-lottie'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import animationData from '@/assets/animations/success.json'
import { BackButton } from '@/components/BackButton'
import { ColorOptions } from '@/components/ColorOptions'
import { GameContext } from '@/contexts/GameContext'
import { Colors } from '@/interfaces/Player'
import { generateGameBySize } from '@/utils/GameUtils'
import { clickSfx, tickSfx } from '@/utils/SfxUtils'
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
} from './PlayOfflineStyle'

export function PlayOffline() {
  const { createNewGame } = useContext(GameContext)
  const navigate = useNavigate()

  const [firstPlayerName, setFirstPlayerName] = useState<string>()
  const [secondPlayerName, setSecondPlayerName] = useState<string>()

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

  function handleFirstPlayerColorChange(color: Colors) {
    setUnavailableColorsForSecondPlayer([color])
    setSelectedColorForFirstPlayer(color)
  }

  function handleSecondPlayerColorChange(color: Colors) {
    setUnavailableColorsForFirstPlayer([color])
    setSelectedColorForSecondPlayer(color)
  }

  function handleFirstPlayerReady() {
    clickSfx.play()

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
  }

  function handleSecondPlayerReady() {
    clickSfx.play()

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
    }
  }

  function handleBackButton() {
    setContainerAnimation(false)

    setTimeout(() => {
      window.history.back()
    }, 900)
  }

  function handleStartGame() {
    clickSfx.play()

    const { board, marks } = generateGameBySize(4, 4)

    createNewGame({
      firstPlayer: {
        id: '1',
        name: firstPlayerName ?? '',
        color: selectedColorForFirstPlayer,
        pontuation: 0,
      },
      secondPlayer: {
        id: '2',
        name: secondPlayerName ?? '',
        color: selectedColorForSecondPlayer,
        pontuation: 0,
      },
      board,
      marks,
      turn: 1,
    })

    navigate('/game')
  }

  return (
    <Container
      initial="initial"
      animate={containerAnimation ? 'animate' : 'initial'}
      variants={variantsContainer}
    >
      <BackButton onClick={handleBackButton} />

      <FlipContainer>
        <FormContainer
          initial={{ rotateY: 0 }}
          variants={variantsFlip}
          animate={isFirstPlayerReady ? 'closed' : 'open'}
          backfaceVisibility="visible"
        >
          <EditButton
            onMouseEnter={() => tickSfx.play()}
            onClick={() => {
              clickSfx.play()
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
            onMouseEnter={() => tickSfx.play()}
          >
            PRONTO
          </Button>
        </FormContainer>
      </FlipContainer>

      <FlipContainer>
        <FormContainer
          initial={{ rotateY: 0 }}
          variants={variantsFlip}
          animate={isSecondPlayerReady ? 'closed' : 'open'}
          backfaceVisibility="visible"
        >
          <EditButton
            onMouseEnter={() => tickSfx.play()}
            onClick={() => {
              clickSfx.play()
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
            onMouseEnter={() => tickSfx.play()}
          >
            PRONTO
          </Button>
        </FormContainer>
      </FlipContainer>

      <InformationBox
        initial="initial"
        variants={variantsInformationBox}
        animate={
          isFirstPlayerReady && isSecondPlayerReady ? 'animate' : 'initial'
        }
      >
        <InformationTitle>Informações dos Jogadores</InformationTitle>

        <PlayerInfoContainer>
          <PlayerInfoTitle>Primeiro Jogador</PlayerInfoTitle>

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
          <PlayerInfoTitle>Segundo Jogador</PlayerInfoTitle>

          <PlayerDetails>
            <PlayerInfoLabel>NOME:</PlayerInfoLabel>
            <PlayerInfoValue>{secondPlayerName}</PlayerInfoValue>
          </PlayerDetails>
          <PlayerDetails>
            <PlayerInfoLabel>COR:</PlayerInfoLabel>
            <PlayerInfoColor playerColor={selectedColorForSecondPlayer ?? ''} />
          </PlayerDetails>
        </PlayerInfoContainer>

        <Button onClick={handleStartGame} onMouseEnter={() => tickSfx.play()}>
          JOGAR
        </Button>
      </InformationBox>
    </Container>
  )
}
