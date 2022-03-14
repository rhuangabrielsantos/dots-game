export const variantsContainer = {
  initial: {
    opacity: 0,
    y: '-100%',
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
}
