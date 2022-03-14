export const variantsContainer = {
  initial: {
    opacity: 0,
    x: '-100%',
  },
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
}
