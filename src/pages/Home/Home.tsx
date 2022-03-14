import { ImGoogle } from 'react-icons/im'
import { RiWifiOffLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'
import UIfx from 'uifx'

import enter from '@/assets/sfx/enter.wav'
import tick from '@/assets/sfx/tick.mp3'

import { buttonsVariants, textVariants, useAnimation } from './HomeAnimations'
import { Container, Title, Description, BoxButton, Button } from './HomeStyle'

export function Home() {
  const navigate = useNavigate()
  const tickSfx = new UIfx(tick)
  tickSfx.setVolume(0.3)

  const enterSfx = new UIfx(enter)
  enterSfx.setVolume(0.3)

  const [textAnimation, setTextAnimation] = useAnimation()
  const [buttonAnimation, setButtonAnimation] = useAnimation()

  function handlePlayOffline() {
    enterSfx.play()

    setTextAnimation('initial')
    setButtonAnimation('initial')

    setTimeout(() => {
      navigate('/play-offline')
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
          onMouseEnter={() => tickSfx.play()}
        >
          <RiWifiOffLine size={20} style={{ marginRight: '10px' }} />
          Play Offline
        </Button>
        <Button color="red" onMouseEnter={() => tickSfx.play()}>
          <ImGoogle size={20} style={{ marginRight: '10px' }} />
          Play Online
        </Button>
      </BoxButton>
    </Container>
  )
}
