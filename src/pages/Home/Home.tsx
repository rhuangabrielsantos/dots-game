import { ImGoogle } from 'react-icons/im'
import { RiWifiOffLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

import { useAnimation } from '@/hooks/useAnimation'
import { clickSfx, tickSfx } from '@/utils/SfxUtils'

import { buttonsVariants, textVariants } from './HomeAnimation'
import { Container, Title, Description, BoxButton, Button } from './HomeStyle'

export function Home() {
  const navigate = useNavigate()

  const [textAnimation, setTextAnimation] = useAnimation(300)
  const [buttonAnimation, setButtonAnimation] = useAnimation(300)

  function handlePlayOffline() {
    clickSfx.play()

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
