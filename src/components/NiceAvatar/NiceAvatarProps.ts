import {
  Sex,
  EarSize,
  HairStyle,
  HatStyle,
  EyeStyle,
  GlassesStyle,
  NoseStyle,
  MouthStyle,
  ShirtStyle,
  EyeBrowStyle,
} from 'react-nice-avatar'

import { Colors, Player } from '@/interfaces/Player'

export interface AvatarConfig {
  sex?: Sex
  faceColor?: string
  earSize?: EarSize
  hairColor?: string
  hairStyle?: HairStyle
  hairColorRandom?: boolean
  hatColor?: string
  hatStyle?: HatStyle
  eyeStyle?: EyeStyle
  glassesStyle?: GlassesStyle
  noseStyle?: NoseStyle
  mouthStyle?: MouthStyle
  shirtStyle?: ShirtStyle
  shirtColor?: string
  bgColor?: string
  isGradient?: boolean
  eyeBrowStyle?: EyeBrowStyle
}

export interface NiceAvatarProps {
  size?: 'small' | 'large' | undefined
  player?: Player
  avatarConfig?: AvatarConfig
  isSecondPlayer?: boolean
  isMyTurn?: boolean
  myColor?: Colors
}
