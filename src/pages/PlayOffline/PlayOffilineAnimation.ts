export const variantsContainer = {
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

export const variantsFlip = {
  open: {
    rotateY: 0,
    transition: {
      duration: 1,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
  closed: {
    rotateY: 180,
    transition: {
      duration: 1,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
}

export const variantsInformationBox = {
  initial: {
    opacity: 0,
    width: 0,
    height: 420,
    display: 'none',
    transition: {
      duration: 1,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
  animate: {
    opacity: 1,
    width: 300,
    height: 420,
    display: 'flex',
    transition: {
      duration: 1,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
}
