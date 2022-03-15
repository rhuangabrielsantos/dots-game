import UIfx from 'uifx'

import clickWav from '@/assets/sfx/click.wav'
import tickMp3 from '@/assets/sfx/tick.mp3'
import winnerWav from '@/assets/sfx/winner.wav'

const clickSfx = new UIfx(clickWav)
clickSfx.setVolume(0.05)

const tickSfx = new UIfx(tickMp3)
tickSfx.setVolume(0.05)

const winnerSfx = new UIfx(winnerWav)
winnerSfx.setVolume(0.05)

export { clickSfx, tickSfx, winnerSfx }
