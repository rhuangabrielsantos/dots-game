export interface InformationBoxProps {
  mobileScreen?: boolean

  isFirstPlayerReady?: boolean
  firstPlayerName?: string
  firstPlayerColor?: string

  isSecondPlayerReady?: boolean
  secondPlayerName?: string
  secondPlayerColor?: string

  onEditPlayer: (player: string) => void
  onStartGame: () => void
}
