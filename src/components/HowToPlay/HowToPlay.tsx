import { useContext, useEffect, useState } from 'react'

import { SfxContext } from '../../contexts/SfxContext'
import { Button as ButtonComponent } from '../Button'

import { variantsDescription } from './HowToPlayAnimation'
import {
  Button,
  HelpIcon,
  CloseButton,
  Description,
  ModalStyle,
  Title,
  Text,
} from './HowToPlayStyle'
import { Scenario } from './Scenario'
import { ScenarioEnum } from './Scenario/ScenarioProps'

ModalStyle.setAppElement('#root')

if (ModalStyle.defaultStyles.overlay) {
  ModalStyle.defaultStyles.overlay.backgroundColor = 'rgba(0, 0, 0, 0.5)'
  ModalStyle.defaultStyles.overlay.zIndex = 100
}

export function HowToPlay() {
  const { clickSfx, tickSfx } = useContext(SfxContext)

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [buttonIsDisabled, setButtonIsDisabled] = useState(true)

  const [initialScenario, setInitialScenario] = useState(false)
  const [firstScenario, setFirstScenario] = useState(false)
  const [secondScenario, setSecondScenario] = useState(false)
  const [thirdScenario, setThirdScenario] = useState(false)

  function handleButtonClick() {
    clickSfx()
    setModalIsOpen(true)
  }

  function handleScenarioCallback(scenario: ScenarioEnum) {
    setInitialScenario(false)
    setFirstScenario(false)
    setSecondScenario(false)
    setThirdScenario(false)

    switch (scenario) {
      case ScenarioEnum.FIRST_SCENARIO:
        setFirstScenario(true)
        break
      case ScenarioEnum.SECOND_SCENARIO:
        setSecondScenario(true)
        break
      case ScenarioEnum.THIRD_SCENARIO:
        setThirdScenario(true)
        setButtonIsDisabled(false)
        break
      default:
        setInitialScenario(true)
    }
  }

  useEffect(() => {
    setInitialScenario(true)
    setFirstScenario(false)
    setSecondScenario(false)
    setThirdScenario(false)

    setButtonIsDisabled(true)
  }, [modalIsOpen])

  return (
    <>
      <Button
        color="black"
        onMouseEnter={() => tickSfx()}
        onClick={handleButtonClick}
        title="How To Play"
      >
        <HelpIcon />
        <Text>How to Play</Text>
      </Button>

      <ModalStyle
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="How To Play"
      >
        <CloseButton onClick={() => setModalIsOpen(false)} />

        <Title>How To Play</Title>
        <Description
          variants={variantsDescription}
          animate={initialScenario ? 'animate' : 'initial'}
        >
          Click between the dots to mark a line
        </Description>

        <Description
          variants={variantsDescription}
          animate={firstScenario ? 'animate' : 'initial'}
        >
          Be the last to close the square line to earn points
        </Description>

        <Description
          variants={variantsDescription}
          animate={secondScenario ? 'animate' : 'initial'}
        >
          When you earn points you will play again
        </Description>

        <Description
          variants={variantsDescription}
          animate={thirdScenario ? 'animate' : 'initial'}
        >
          The player with the most points wins the game.
        </Description>

        <Scenario callback={handleScenarioCallback} />

        <ButtonComponent
          color="red"
          disabled={buttonIsDisabled}
          style={{ marginTop: '2rem' }}
          onClick={() => setModalIsOpen(false)}
        >
          FINISH
        </ButtonComponent>
      </ModalStyle>
    </>
  )
}
