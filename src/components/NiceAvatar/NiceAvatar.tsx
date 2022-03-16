import ReactNiceAvatar from 'react-nice-avatar/dist/index'

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
      <ReactNiceAvatar {...props.avatarConfig} />
    </NiceAvatarStyle>
  )
}
