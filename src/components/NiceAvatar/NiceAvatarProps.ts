import { AvatarFullConfig } from 'react-nice-avatar'

import { Colors, Player } from '../../interfaces/Player'

export interface NiceAvatarProps {
  size?: 'small' | 'large' | undefined
  player?: Player
  avatarConfig?: AvatarFullConfig
  isSecondPlayer?: boolean
  isMyTurn?: boolean
  myColor?: Colors
}
