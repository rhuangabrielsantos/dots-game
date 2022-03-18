import { AvatarFullConfig } from 'react-nice-avatar'

import { Colors } from '../../interfaces/Player'

export interface CardPlayerProps {
  online?: boolean
  isMyCard?: boolean
  title: string
  mobileScreen?: boolean
  playerIsReady?: boolean
  playerAvatar?: AvatarFullConfig

  playerName: string
  setPlayerName?: (name: string) => void

  onRandomAvatar?: () => void

  selectedColor: Colors
  unavailableColors?: Colors[]
  onColorSelected: (color: Colors) => void

  onPlayerReady: (status: boolean) => void
}
