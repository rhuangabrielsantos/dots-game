import { createContext, useEffect, useState } from 'react'

import clickWav from '@/assets/sfx/click.wav'
import tickMp3 from '@/assets/sfx/tick.mp3'
import winnerWav from '@/assets/sfx/winner.wav'

type SfxContextType = {
  clickSfx: HTMLAudioElement | null
  tickSfx: HTMLAudioElement | null
  winnerSfx: HTMLAudioElement | null
}

export const SfxContext = createContext({} as SfxContextType)

type SfxContextProviderType = {
  children: React.ReactNode
}

export function SfxContextProvider(props: SfxContextProviderType) {
  const [clickSfx, setClickSfx] = useState<HTMLAudioElement | null>(null)
  const [tickSfx, setTickSfx] = useState<HTMLAudioElement | null>(null)
  const [winnerSfx, setWinnerSfx] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    const click = new Audio(clickWav)
    click.volume = 0.05
    setClickSfx(click)

    const tick = new Audio(tickMp3)
    tick.volume = 0.05
    setTickSfx(tick)

    const winner = new Audio(winnerWav)
    winner.volume = 0.05
    setWinnerSfx(winner)
  }, [])

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
