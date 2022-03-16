import Avatar from 'react-nice-avatar'

import { NiceAvatarProps } from './NiceAvatarProps'
import { NiceAvatarStyle } from './NiceAvatarStyle'

export function NiceAvatar(props: NiceAvatarProps) {
  return (
    <NiceAvatarStyle>
      <Avatar {...props.avatarConfig} />
    </NiceAvatarStyle>
  )
}
