import { useContext, useState } from 'react'
import { ImGoogle } from 'react-icons/im'
import { RiWifiOffLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

import { Button } from '../../components/Button'
import { GameContext } from '../../contexts/GameContext'
import { SfxContext } from '../../contexts/SfxContext'
import { useAnimation } from '../../hooks/useAnimation'
import { useAuth } from '../../hooks/useAuth'
import { database } from '../../services/firebase'
import { generateGameBySize } from '../../utils/GameUtils'
import { registerLog } from '../../utils/LogUtils'

import { buttonVariants, containerVariants } from './CreateGameAnimation'
import { BoxButton, BoxSize, Container, ContainerBox } from './CreateGameStyle'

export function CreateGame() {
  const { user, signInWithGoogle } = useAuth()
  const navigate = useNavigate()
  const { createNewGame } = useContext(GameContext)

  const [containerAnimation, setContainerAnimation] = useAnimation(300)
  const [buttonAnimation, setButtonAnimation] = useAnimation(300)

  const { clickSfx, tickSfx } = useContext(SfxContext)
  const [gameSize, setGameSize] = useState('4x4')

  function handleClick(size: string) {
    clickSfx()
    setGameSize(size)
  }

  function handleCreateOfflineGame() {
    clickSfx()

    const number = Number(gameSize.split('x')[0])
    const { board, marks } = generateGameBySize(number, number)

    createNewGame({
      firstPlayer: {
        name: user?.name || '',
        id: user?.id || '',
        avatar: user?.avatar || {},
        color: '#429867',
        pontuation: 0,
        isReady: false,
        unavailableColors: [],
      },
      secondPlayer: {
        name: user?.name || '',
        id: user?.id || '',
        avatar: user?.avatar || {},
        color: '#429867',
        pontuation: 0,
        isReady: false,
        unavailableColors: [],
      },
      board,
      marks,
      turn: 1,
    })

    setContainerAnimation('initial')
    setButtonAnimation('initial')

    setTimeout(() => {
      navigate('/lobby')
    }, 900)
  }

  async function handleCreateMultiplayerGame() {
    if (!user) {
      await signInWithGoogle()
      return
    }

    clickSfx()
    const number = Number(gameSize.split('x')[0])
    const { board, marks } = generateGameBySize(number, number)

    const gameRef = database.ref('games')

    const game = {
      firstPlayer: {
        id: user?.id || '',
        name: user?.name || '',
        avatar: user?.avatar || {},
        pontuation: 0,
        isReady: false,
        color: '',
      },
      turn: 1,
      board,
      marks,
      isStarted: false,
      date: new Date().toISOString(),
    }

    const firebaseGame = await gameRef.push(game)

    registerLog('create_online_game')

    setContainerAnimation('initial')
    setButtonAnimation('initial')

    setTimeout(() => {
      navigate(`/${firebaseGame.key}/lobby`)
    }, 900)
  }

  return (
    <Container>
      <ContainerBox
        initial="initial"
        variants={containerVariants}
        animate={containerAnimation}
      >
        <BoxSize
          enabled={gameSize === '4x4'}
          onClick={() => handleClick('4x4')}
          onMouseEnter={() => tickSfx()}
        >
          4x4
        </BoxSize>
        <BoxSize
          enabled={gameSize === '6x6'}
          onClick={() => handleClick('6x6')}
          onMouseEnter={() => tickSfx()}
        >
          6x6
        </BoxSize>
        <BoxSize
          enabled={gameSize === '8x8'}
          onClick={() => handleClick('8x8')}
          onMouseEnter={() => tickSfx()}
        >
          8x8
        </BoxSize>
        <BoxSize
          enabled={gameSize === '10x10'}
          onClick={() => handleClick('10x10')}
          onMouseEnter={() => tickSfx()}
        >
          10x10
        </BoxSize>
      </ContainerBox>

      <BoxButton
        initial="initial"
        variants={buttonVariants}
        animate={buttonAnimation}
      >
        <Button
          id="offline-game-create"
          color="black"
          onClick={handleCreateOfflineGame}
        >
          <RiWifiOffLine size="20" style={{ marginRight: '10px' }} />
          Offline Game
        </Button>
        <Button color="red" onClick={handleCreateMultiplayerGame}>
          <ImGoogle size="20" style={{ marginRight: '10px' }} />
          Online Game
        </Button>
      </BoxButton>
    </Container>
  )
}
