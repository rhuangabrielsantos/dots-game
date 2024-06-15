import { useEffect, useState } from 'react'

interface SoundOptions {
  volume: number
  loop: boolean
  timeout: number
}

export function useSound(soundUrl: string, options: SoundOptions) {
  const [sound, setSound] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    const audio = new Audio(soundUrl)
    audio.load()
    audio.volume = options.volume
    audio.loop = options.loop

    setSound(audio)
  }, [])

  return () => {
    if (sound && import.meta.env.PROD) {
      sound.play()
      setTimeout(() => {
        sound.pause()
        sound.currentTime = 0
      }, options.timeout)
    }
  }
}
