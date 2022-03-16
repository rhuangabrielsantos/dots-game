import { NiceAvatar } from '../NiceAvatar'

import { PlayerProfileProps } from './PlayerProfileProps'
import { Container, PlayerName } from './PlayerProfileStyle'

export function PlayerProfile(props: PlayerProfileProps) {
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

      <PlayerName>{props.player?.name}</PlayerName>

      <PlayerName>{props.player?.pontuation}</PlayerName>
    </Container>
  )
}
