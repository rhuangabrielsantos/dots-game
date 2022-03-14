import { useEffect, useState } from 'react'

export function useAnimation(time: number) {
  const [animation, setAnimation] = useState<'initial' | 'animate'>('initial')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimation('animate')
    }, time)

    return () => clearTimeout(timeout)
  }, [])

  return [animation, setAnimation] as const
}
