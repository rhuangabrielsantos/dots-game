import { createContext } from 'react'
import useSound from 'use-sound'
import { PlayFunction } from 'use-sound/dist/types'

import clickWav from '@/assets/sfx/click.wav'
import tickMp3 from '@/assets/sfx/tick.mp3'
import winnerWav from '@/assets/sfx/winner.wav'

type SfxContextType = {
  clickSfx: PlayFunction
  tickSfx: PlayFunction
  winnerSfx: PlayFunction
}

export const SfxContext = createContext({} as SfxContextType)

type SfxContextProviderType = {
  children: React.ReactNode
}

export function SfxContextProvider(props: SfxContextProviderType) {
  const [clickSfx] = useSound(clickWav, { volume: 0.05 })
  const [tickSfx] = useSound(tickMp3, { volume: 0.05 })
  const [winnerSfx] = useSound(winnerWav, { volume: 0.05 })

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
