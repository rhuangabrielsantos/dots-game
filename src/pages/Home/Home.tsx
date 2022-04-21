import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { Button } from '../../components/Button'
import { SfxContext } from '../../contexts/SfxContext'
import { useAnimation } from '../../hooks/useAnimation'

import { buttonsVariants, textVariants } from './HomeAnimation'
import { Container, Title, Description, BoxButton } from './HomeStyle'

export function Home() {
  const { tickSfx, clickSfx } = useContext(SfxContext)
  const navigate = useNavigate()

  const [textAnimation, setTextAnimation] = useAnimation(300)
  const [buttonAnimation, setButtonAnimation] = useAnimation(300)

  function handleSinglePlayer() {
    clickSfx()

    setTextAnimation('initial')
    setButtonAnimation('initial')

    setTimeout(() => {
      navigate('/single-player/lobby')
    }, 900)
  }

  async function handleMultiplayer() {
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
          onClick={handleSinglePlayer}
          onMouseEnter={() => tickSfx()}
        >
          Single Player
        </Button>

        <Button
          color="red"
          onMouseEnter={() => tickSfx()}
          onClick={handleMultiplayer}
        >
          Multiplayer
        </Button>
      </BoxButton>
    </Container>
  )
}
