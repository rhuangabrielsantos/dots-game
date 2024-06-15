import { createContext } from 'react'

import { useSound } from '../hooks/useSound'

type SfxContextType = {
  clickSfx: () => void
  completedSfx: () => void
  tickSfx: () => void
  winnerSfx: () => void
}

export const SfxContext = createContext({} as SfxContextType)

type SfxContextProviderType = {
  children: React.ReactNode
}

export function SfxContextProvider(props: SfxContextProviderType) {
  const options = {
    volume: 0.05,
    loop: false,
    timeout: 300,
  }

  const clickPath = '/sfx/click.wav'
  const completedPath = '/sfx/completed.wav'
  const tickPath = '/sfx/tick.mp3'
  const winnerPath = '/sfx/winner.wav'

  const clickSfx = useSound(clickPath, options)
  const completedSfx = useSound(completedPath, { ...options, timeout: 4000 })
  const tickSfx = useSound(tickPath, options)
  const winnerSfx = useSound(winnerPath, { ...options, timeout: 550 })

  return (
    <SfxContext.Provider
      value={{
        clickSfx,
        completedSfx,
        tickSfx,
        winnerSfx,
      }}
    >
      {props.children}
    </SfxContext.Provider>
  )
}
