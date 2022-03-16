import { Player } from '../../interfaces'

export interface PlayerProfileProps {
  size?: 'small' | 'large' | undefined
  player?: Player
  isSecondPlayer?: boolean
  isMyTurn?: boolean
}
