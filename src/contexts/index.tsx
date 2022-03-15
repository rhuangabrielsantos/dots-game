import { GameContextProvider } from './GameContext'
import { SfxContextProvider } from './SfxContext'

interface ProviderProps {
  children: React.ReactNode
}

export function Provider(props: ProviderProps) {
  return (
    <GameContextProvider>
      <SfxContextProvider>{props.children}</SfxContextProvider>
    </GameContextProvider>
  )
}
