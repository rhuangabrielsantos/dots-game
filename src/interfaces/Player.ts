import { AvatarFullConfig } from 'react-nice-avatar'

export interface Player {
  id: string
  name: string
  color: Colors
  pontuation: number
  avatar: AvatarFullConfig

  isReady?: boolean
  unavailableColors?: Colors[]
}

export type Colors =
  | '#e02130'
  | '#429867'
  | '#482344'
  | '#fab243'
  | 'primary'
  | 'tertiary'
  | 'empty'
