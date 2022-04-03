import React, { useContext } from 'react'

import { SfxContext } from '../../contexts/SfxContext'

import { variantsInformationBox } from './InformationBoxAnimation'
import { InformationBoxProps } from './InformationBoxProps'
import {
  InformationBoxStyle,
  InformationEditButton,
  InformationTitle,
  PlayerDetails,
  PlayerDetailsHeader,
  PlayerInfoColor,
  PlayerInfoContainer,
  PlayerInfoLabel,
  PlayerInfoTitle,
  PlayerInfoValue,
  Button,
} from './InformationBoxStyle'

export function InformationBox(props: InformationBoxProps) {
  const { tickSfx } = useContext(SfxContext)

  return (
    <InformationBoxStyle
      id="information-game-container"
      mobileenabled={props.mobileScreen}
      initial="initial"
      variants={variantsInformationBox}
      animate={
        props.isFirstPlayerReady && props.isSecondPlayerReady
          ? 'animate'
          : 'initial'
      }
    >
      <InformationTitle>Informações dos Jogadores</InformationTitle>

      <PlayerInfoContainer>
        <PlayerDetailsHeader>
          <PlayerInfoTitle>First Player</PlayerInfoTitle>
          <InformationEditButton
            onMouseEnter={() => tickSfx()}
            onClick={() => props.onEditPlayer('first')}
          />
        </PlayerDetailsHeader>

        <PlayerDetails>
          <PlayerInfoLabel>NAME:</PlayerInfoLabel>
          <PlayerInfoValue>{props.firstPlayerName}</PlayerInfoValue>
        </PlayerDetails>
        <PlayerDetails>
          <PlayerInfoLabel>COLOR:</PlayerInfoLabel>
          <PlayerInfoColor playerColor={props.firstPlayerColor} />
        </PlayerDetails>
      </PlayerInfoContainer>

      <PlayerInfoContainer>
        <PlayerDetailsHeader>
          <PlayerInfoTitle>Second Player</PlayerInfoTitle>
          <InformationEditButton
            onMouseEnter={() => tickSfx()}
            onClick={() => props.onEditPlayer('second')}
          />
        </PlayerDetailsHeader>

        <PlayerDetails>
          <PlayerInfoLabel>NAME:</PlayerInfoLabel>
          <PlayerInfoValue>{props.secondPlayerName}</PlayerInfoValue>
        </PlayerDetails>
        <PlayerDetails>
          <PlayerInfoLabel>COLOR:</PlayerInfoLabel>
          <PlayerInfoColor playerColor={props.secondPlayerColor} />
        </PlayerDetails>
      </PlayerInfoContainer>

      <Button
        id="play-button"
        onClick={props.onStartGame}
        onMouseEnter={() => tickSfx()}
      >
        PLAY
      </Button>
    </InformationBoxStyle>
  )
}
