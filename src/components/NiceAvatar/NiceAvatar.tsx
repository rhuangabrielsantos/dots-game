import { NiceAvatarProps } from './NiceAvatarProps'
import { NiceAvatarStyle } from './NiceAvatarStyle'

export function NiceAvatar(props: NiceAvatarProps) {
  return (
    <NiceAvatarStyle
      {...props.avatarConfig}
      size={props.size}
      isSecondPlayer={props.isSecondPlayer}
      isMyTurn={props.isMyTurn ?? false}
      myColor={props.player?.color}
    />
  )
}
