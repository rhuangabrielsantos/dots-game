import { createContext } from 'react'

import clickWav from '@/assets/sfx/click.wav'
import tickMp3 from '@/assets/sfx/tick.mp3'
import winnerWav from '@/assets/sfx/winner.wav'
import { useSound } from '@/hooks/useSound'

type SfxContextType = {
  clickSfx: () => void
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

  const clickSfx = useSound(clickWav, options)
  const tickSfx = useSound(tickMp3, options)
  const winnerSfx = useSound(winnerWav, { ...options, timeout: 550 })

  return (
    <SfxContext.Provider
      value={{
        clickSfx,
        tickSfx,
        winnerSfx,
      }}
    >
      {props.children}
    </SfxContext.Provider>
  )
}
