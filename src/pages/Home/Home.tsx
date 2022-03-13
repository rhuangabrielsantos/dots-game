import { ImGoogle } from 'react-icons/im'
import { RiWifiOffLine } from 'react-icons/ri'
import { useNavigate } from 'react-router-dom'

import { buttonsVariants, textVariants, useAnimation } from './HomeAnimations'
import { Container, Title, Description, BoxButton, Button } from './HomeStyle'

export function Home() {
  const navigate = useNavigate()

  const [textAnimation, setTextAnimation] = useAnimation()
  const [buttonAnimation, setButtonAnimation] = useAnimation()

  function handlePlayOffline() {
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
        <Button color="black" onClick={handlePlayOffline}>
          <RiWifiOffLine size={20} style={{ marginRight: '10px' }} />
          Play Offline
        </Button>
        <Button color="red">
          <ImGoogle size={20} style={{ marginRight: '10px' }} />
          Play Online
        </Button>
      </BoxButton>
    </Container>
  )
}
