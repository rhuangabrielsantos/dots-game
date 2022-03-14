import { tickSfx, clickSfx } from '@/utils/SfxUtils/SfxUtils'

import { variantsContainer } from './BackButtonAnimation'
import { BackButtonProps } from './BackButtonProps'
import { BackContainer, BackIcon } from './BackButtonStyle'

export function BackButton(props: BackButtonProps) {
  function handleClick() {
    clickSfx.play()
    props.onClick()
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
