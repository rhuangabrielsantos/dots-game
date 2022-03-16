import { useEffect, useState } from 'react'
import { genConfig, AvatarFullConfig } from 'react-nice-avatar'

import { PlayerProfileProps } from './PlayerProfileProps'
import { Container, NiceAvatar, PlayerName } from './PlayerProfileStyle'

export function PlayerProfile(props: PlayerProfileProps) {
  const [avatarConfig, setAvatarConfig] = useState<AvatarFullConfig | null>()

  useEffect(() => {
    const config = genConfig({
      bgColor: props.player.color,
    })

    return setAvatarConfig(config)
  }, [])

  return (
    <Container>
      <NiceAvatar
        {...avatarConfig}
        isSecondPlayer={props.isSecondPlayer}
        isMyTurn={props.isMyTurn ?? false}
        myColor={props.player.color}
      />

      <PlayerName>{props.player.name}</PlayerName>

      <PlayerName>{props.player.pontuation}</PlayerName>
    </Container>
  )
}
