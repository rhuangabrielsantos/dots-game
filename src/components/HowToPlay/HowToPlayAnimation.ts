import { Variants } from 'framer-motion'

export const variantsDescription: Variants = {
  initial: {
    opacity: 0,
    y: -10,
    display: 'none',
    transition: {
      duration: 0,
      ease: 'easeIn',
    },
  },
  animate: {
    opacity: 1,
    y: 0,
    display: 'block',
    transition: {
      duration: 0.5,
      ease: 'easeIn',
    },
  },
}
