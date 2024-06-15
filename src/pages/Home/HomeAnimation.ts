import { Variants } from 'framer-motion'

export const textVariants: Variants = {
  initial: {
    opacity: 0,
    y: -270,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
}

export const buttonsVariants: Variants = {
  initial: {
    opacity: 0,
    y: +130,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
}
