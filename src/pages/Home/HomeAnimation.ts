import { useEffect, useState } from 'react'

export const textVariants = {
  initial: {
    opacity: 0,
    y: -270,
    transition: {
      duration: 1,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
}

export const buttonsVariants = {
  initial: {
    opacity: 0,
    y: +130,
    transition: {
      duration: 1,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
}

export function useAnimation() {
  const [animation, setAnimation] = useState<'initial' | 'animate'>('initial')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimation('animate')
    }, 300)

    return () => clearTimeout(timeout)
  }, [])

  return [animation, setAnimation] as const
}
