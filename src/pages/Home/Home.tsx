import { useContext } from 'react'
import { FaRobot } from 'react-icons/fa'
import { ImGoogle } from 'react-icons/im'
import { RiWifiOffLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

import { Button } from '../../components/Button'
import { SfxContext } from '../../contexts/SfxContext'
import { useAnimation } from '../../hooks/useAnimation'
import { useAuth } from '../../hooks/useAuth'

import { buttonsVariants, textVariants } from './HomeAnimation'
import { Container, Title, Description, BoxButton } from './HomeStyle'

export function Home() {
  const { user, signInWithGoogle } = useAuth()
  const { tickSfx, clickSfx } = useContext(SfxContext)
  const navigate = useNavigate()

  const [textAnimation, setTextAnimation] = useAnimation(300)
  const [buttonAnimation, setButtonAnimation] = useAnimation(300)

  function handlePlayOffline() {
    clickSfx()

    setTextAnimation('initial')
    setButtonAnimation('initial')

    setTimeout(() => {
      navigate('/lobby')
    }, 900)
  }

  function handleSinglePlayer() {
    clickSfx()

    setTextAnimation('initial')
    setButtonAnimation('initial')

    setTimeout(() => {
      navigate('/single-player/lobby')
    }, 900)
  }

  async function handleLogin() {
    if (!user) {
      await signInWithGoogle()
    }

    setTextAnimation('initial')
    setButtonAnimation('initial')

    setTimeout(() => {
      navigate('/create-game')
    }, 900)
  }

  return (
    <Container>
      <Title initial="initial" variants={textVariants} animate={textAnimation}>
        Dots Game
      </Title>
      <Description
        initial="initial"
        variants={textVariants}
        animate={textAnimation}
      >
        Play with your friends and try to get the highest score.
      </Description>

      <BoxButton
        initial="initial"
        variants={buttonsVariants}
        animate={buttonAnimation}
      >
        <Button
          color="black"
          onClick={handlePlayOffline}
          onMouseEnter={() => tickSfx()}
          id="offline-game-button"
        >
          <RiWifiOffLine size={20} style={{ marginRight: '10px' }} />
          Play Offline
        </Button>

        <Button
          color="#533535"
          onClick={handleSinglePlayer}
          onMouseEnter={() => tickSfx()}
        >
          <FaRobot size={20} style={{ marginRight: '10px' }} />
          Single Player
        </Button>

        <Button
          color="red"
          onMouseEnter={() => tickSfx()}
          onClick={handleLogin}
        >
          <ImGoogle size={20} style={{ marginRight: '10px' }} />
          Play Online
        </Button>
      </BoxButton>
    </Container>
  )
}
