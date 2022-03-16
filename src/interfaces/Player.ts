import { AvatarConfig } from '@/components/NiceAvatar/NiceAvatarProps'

export interface Player {
  id: string
  name: string
  color: Colors
  pontuation: number
  avatar: AvatarConfig
}

export type Colors =
  | '#e02130'
  | '#429867'
  | '#482344'
  | '#fab243'
  | 'primary'
  | undefined
