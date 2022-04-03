import { useEffect, useState } from 'react'

import { NiceAvatar } from '../NiceAvatar'

import { PlayerProfileProps } from './PlayerProfileProps'
import { Container, PlayerName } from './PlayerProfileStyle'

export function PlayerProfile(props: PlayerProfileProps) {
  const [firstName, setFirstName] = useState('')

  useEffect(() => {
    if (props.player?.name) {
      setFirstName(props.player?.name.split(' ')[0])
    }
  }, [props.player?.name])

  return (
    <Container>
      <NiceAvatar
        size={props.size}
        player={props.player}
        avatarConfig={props.player?.avatar}
        isSecondPlayer={props.isSecondPlayer}
        isMyTurn={props.isMyTurn ?? false}
        myColor={props.player?.color}
      />

      <PlayerName>{firstName}</PlayerName>

      <PlayerName
        id={
          props.isSecondPlayer
            ? 'second-player-pontuation'
            : 'first-player-pontuation'
        }
      >
        {props.player?.pontuation}
      </PlayerName>
    </Container>
  )
}
