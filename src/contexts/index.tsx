import { AuthContextProvider } from './AuthContext'
import { GameContextProvider } from './GameContext'
import { SfxContextProvider } from './SfxContext'
import { ThemeContextProvider } from './ThemeContext'

interface ProviderProps {
  children: React.ReactNode
}

export function Provider(props: ProviderProps) {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>
        <GameContextProvider>
          <SfxContextProvider>{props.children}</SfxContextProvider>
        </GameContextProvider>
      </ThemeContextProvider>
    </AuthContextProvider>
  )
}
