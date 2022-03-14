import { useEffect, useRef, useState } from 'react'
import Lottie from 'react-lottie'

import animationData from '@/assets/animations/music-rhythm.json'
import { tickSfx } from '@/utils/SfxUtils'
import { clickSfx } from '@/utils/SfxUtils/SfxUtils'

import { variantsControls, variantsTitle } from './MusicPlayerAnimation'
import {
  Container,
  Play,
  PlayDisabled,
  Title,
  ControlsBox,
  Skip,
  AnimationContainer,
} from './MusicPlayerStyle'
import { musics } from './Songs'

export function MusicPlayer() {
  const playerRef = useRef<HTMLAudioElement>(null)
  const [playPromise, setPlayPromise] = useState<Promise<void>>()

  const randomMusicIndex = Math.floor(Math.random() * musics.length)

  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [currentMusic, setCurrentMusic] = useState<number>(randomMusicIndex)
  const [hover, setHover] = useState<boolean>(false)

  async function handleNextMusic(): Promise<void> {
    await playPromise?.then(() => {
      playerRef.current?.pause()
    })

    setCurrentMusic(randomizeMusic())

    const promise = playerRef.current?.play()
    setPlayPromise(promise)

    if (playerRef.current?.volume) {
      playerRef.current.volume = 0.2
    }
  }

  function randomizeMusic(): number {
    const newMusicIndex = Math.floor(Math.random() * musics.length)

    if (newMusicIndex === currentMusic) {
      return newMusicIndex + 1
    }

    return newMusicIndex
  }

  useEffect(() => {
    if (isPlaying) {
      const promise = playerRef.current?.play()
      setPlayPromise(promise)

      if (playerRef.current?.volume) {
        playerRef.current.volume = 0.2
      }

      return
    }

    playerRef.current?.pause()
  }, [isPlaying])

  return (
    <Container>
      <ControlsBox
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <AnimationContainer
          initial="hidden"
          variants={variantsControls}
          animate={isPlaying ? 'visible' : 'hidden'}
        >
          <Lottie
            options={{
              loop: true,
              autoplay: false,
              animationData,
              rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice',
              },
            }}
            height={40}
            width={40}
            isPaused={!isPlaying}
            isClickToPauseDisabled
          />
        </AnimationContainer>

        {isPlaying ? (
          <Play
            onClick={() => {
              setIsPlaying(false)
              clickSfx.play()
            }}
            onMouseEnter={() => tickSfx.play()}
            title="Pause the music"
          />
        ) : (
          <PlayDisabled
            onClick={() => {
              setIsPlaying(true)
              clickSfx.play()
            }}
            onMouseEnter={() => tickSfx.play()}
            title="Play the music"
          />
        )}

        <AnimationContainer
          initial="hidden"
          variants={variantsControls}
          animate={isPlaying ? 'visible' : 'hidden'}
          title="Skip this music"
          onClick={() => {
            handleNextMusic()
            clickSfx.play()
          }}
          onMouseEnter={() => tickSfx.play()}
        >
          <Skip />
        </AnimationContainer>
      </ControlsBox>

      <Title
        variants={variantsTitle}
        initial="hidden"
        animate={hover ? 'visible' : 'hidden'}
      >
        {musics[currentMusic].title} by {musics[currentMusic].artist}
      </Title>

      <audio
        ref={playerRef}
        src={musics[currentMusic].source}
        onEnded={handleNextMusic}
      />
    </Container>
  )
}
