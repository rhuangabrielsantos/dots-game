export const variantsInformationBox = {
  initial: {
    opacity: 0,
    x: -270,
    width: 300,
    height: 480,
    display: 'none',
    transition: {
      duration: 1,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
  animate: {
    opacity: 1,
    x: 0,
    width: 300,
    height: 480,
    display: 'flex',
    transition: {
      duration: 1,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
}
