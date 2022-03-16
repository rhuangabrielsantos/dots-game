import { NiceAvatarProps } from './NiceAvatarProps'
import { NiceAvatarStyle } from './NiceAvatarStyle'

export function NiceAvatar(props: NiceAvatarProps) {
  return (
    <NiceAvatarStyle
      {...props.avatarConfig}
      style={props.style}
      // isSecondPlayer={props.isSecondPlayer}
      // isMyTurn={props.isMyTurn ?? false}
      // myColor={props.player?.color}
    />
  )
}
