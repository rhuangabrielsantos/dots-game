import React, { useContext, useState } from 'react'
import { useEffect } from 'react'
import Lottie from 'react-lottie'
import Avatar from 'react-nice-avatar'

import animationData from '../../assets/animations/success.json'
import { SfxContext } from '../../contexts/SfxContext'
import { ColorOptions } from '../ColorOptions'

import { variantsFlip } from './CardPlayerAnimation'
import { CardPlayerProps } from './CardPlayerProps'
import {
  Button,
  Disabled,
  EditButton,
  Field,
  FlipContainer,
  FormContainer,
  Label,
  NiceAvatarBox,
  PlayerInfo,
  PlayerName,
  RandomIcon,
  WaitingDescription,
  WaitingTitle,
} from './CardPlayerStyle'

export function CardPlayer(props: CardPlayerProps) {
  const { tickSfx, clickSfx } = useContext(SfxContext)

  const [playerName, setPlayerName] = useState<string>(props.playerName)

  useEffect(() => {
    if (props.setPlayerName) {
      props.setPlayerName(playerName)
    }
  }, [playerName])

  return (
    <FlipContainer mobileenabled={props.mobileScreen}>
      <Disabled isMyCard={props.isMyCard} title="This is not your card" />

      <FormContainer
        initial={{ rotateY: 0 }}
        variants={variantsFlip}
        animate={props.playerIsReady ? 'closed' : 'open'}
        backfacevisibility="visible"
      >
        <EditButton
          id={
            props.title === 'First Player'
              ? 'first-player-edit-button'
              : 'second-player-edit-button'
          }
          onMouseEnter={() => tickSfx()}
          onClick={() => {
            clickSfx()
            props.onPlayerReady(false)
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
          isPaused={!props.playerIsReady}
          isStopped={!props.playerIsReady}
          height={200}
          width={200}
          style={{ transform: 'scaleX(-1)' }}
        />
        <WaitingTitle>{props.title} is ready!</WaitingTitle>
        <WaitingDescription>
          Waiting{' '}
          {props.title === 'First Player' ? 'Second player' : 'First player'}
          ...
        </WaitingDescription>
      </FormContainer>

      <FormContainer
        id={
          props.title === 'First Player'
            ? 'first-player-ready-container'
            : 'second-player-ready-container'
        }
        initial={{ rotateY: 0 }}
        variants={variantsFlip}
        animate={props.playerIsReady ? 'closed' : 'open'}
        backfacevisibility="hidden"
      >
        <PlayerInfo>{props.title}</PlayerInfo>

        <NiceAvatarBox>
          <Avatar
            {...props.playerAvatar}
            style={{ width: '7rem', height: '7rem' }}
          />

          {props.onRandomAvatar && (
            <RandomIcon onClick={props.onRandomAvatar} />
          )}
        </NiceAvatarBox>

        <Label htmlFor="firstPlayer">NAME</Label>
        {props.online ? (
          <PlayerName>{props.playerName}</PlayerName>
        ) : (
          <Field
            id={
              props.title === 'First Player'
                ? 'name-input-first-player'
                : 'name-input-second-player'
            }
            type="text"
            name="firstPlayer"
            placeholder="NAME"
            onChange={(event) => setPlayerName(event.target.value)}
            value={playerName}
          />
        )}

        <Label htmlFor="firstPlayerColor">COLOR</Label>
        <ColorOptions
          unavailableColors={props.unavailableColors}
          selectedColor={props.selectedColor}
          onChange={props.onColorSelected}
          id={
            props.title === 'First Player'
              ? 'color-select-first-player'
              : 'color-select-second-player'
          }
        />

        <Button
          onClick={() => {
            clickSfx()
            props.onPlayerReady(true)
          }}
          onMouseEnter={() => tickSfx()}
          id={
            props.title === 'First Player'
              ? 'ready-button-first-player'
              : 'ready-button-second-player'
          }
        >
          READY
        </Button>
      </FormContainer>
    </FlipContainer>
  )
}
