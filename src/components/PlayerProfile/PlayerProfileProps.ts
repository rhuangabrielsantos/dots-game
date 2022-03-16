import { Player } from '@/interfaces'

export interface PlayerProfileProps {
  size?: 'small' | 'large'
  player?: Player
  isSecondPlayer?: boolean
  isMyTurn?: boolean
}
