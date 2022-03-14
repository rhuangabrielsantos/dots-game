import UIfx from 'uifx'

import clickWav from '@/assets/sfx/click.wav'
import tickMp3 from '@/assets/sfx/tick.mp3'

const clickSfx = new UIfx(clickWav)
clickSfx.setVolume(0.1)

const tickSfx = new UIfx(tickMp3)
tickSfx.setVolume(0.1)

export { clickSfx, tickSfx }
