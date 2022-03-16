import Avatar from 'react-nice-avatar'

import { NiceAvatarProps } from './NiceAvatarProps'
import { NiceAvatarStyle } from './NiceAvatarStyle'

export function NiceAvatar(props: NiceAvatarProps) {
  return (
    <NiceAvatarStyle
      size={props.size}
      isSecondPlayer={props.isSecondPlayer}
      isMyTurn={props.isMyTurn ?? false}
      myColor={props.player?.color}
    >
      <Avatar bgColor={props.avatarConfig?.bgColor} />
    </NiceAvatarStyle>
  )
}
