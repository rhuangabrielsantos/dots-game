import { useContext } from 'react'

import { SfxContext } from '../../contexts/SfxContext'

import { variantsContainer } from './BackButtonAnimation'
import { BackButtonProps } from './BackButtonProps'
import { BackContainer, BackIcon } from './BackButtonStyle'

export function BackButton(props: BackButtonProps) {
  const { tickSfx, clickSfx } = useContext(SfxContext)

  function handleClick() {
    clickSfx()
    props.onClick()
  }

  return (
    <BackContainer
      initial="initial"
      variants={variantsContainer}
      animate="enter"
      onMouseEnter={() => tickSfx()}
    >
      <BackIcon onClick={handleClick} />
    </BackContainer>
  )
}
