import { AvatarFullConfig } from 'react-nice-avatar'

import { Colors, Player } from '@/interfaces/Player'

type Style = {
  [key: string]: string | number | boolean
}

export interface NiceAvatarProps {
  style?: Style | undefined
  player?: Player
  avatarConfig?: AvatarFullConfig
  isSecondPlayer?: boolean
  isMyTurn?: boolean
  myColor?: Colors
}
