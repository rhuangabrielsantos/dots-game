import UIfx from 'uifx'

import clickkMp3 from '@/assets/sfx/click.mp3'
import selectWav from '@/assets/sfx/select.wav'
import tickMp3 from '@/assets/sfx/tick.mp3'

const clickSfx = new UIfx(clickkMp3)
clickSfx.setVolume(0.2)

const tickSfx = new UIfx(tickMp3)
tickSfx.setVolume(0.3)

const selectSfx = new UIfx(selectWav)
selectSfx.setVolume(0.5)

export { clickSfx, tickSfx, selectSfx }
