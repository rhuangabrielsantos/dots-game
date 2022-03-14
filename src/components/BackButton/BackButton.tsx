import { tickSfx, clickSfx } from '@/utils/SfxUtils/SfxUtils'

import { variantsContainer } from './BackButtonAnimation'
import { BackContainer, BackIcon } from './BackButtonStyle'

export function BackButton() {
  function handleClick() {
    clickSfx.play()
    window.history.back()
  }

  return (
    <BackContainer
      initial="initial"
      variants={variantsContainer}
      animate="enter"
      onMouseEnter={() => tickSfx.play()}
    >
      <BackIcon onClick={handleClick} />
    </BackContainer>
  )
}
