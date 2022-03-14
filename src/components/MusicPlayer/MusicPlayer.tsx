import { useEffect, useRef, useState } from 'react'
import Lottie from 'react-lottie'

import animationData from '@/assets/animations/music-rhythm.json'

import { variantsTitle } from './MusicPlayerAnimation'
import {
  Container,
  Play,
  PlayDisabled,
  Title,
  LottieBox,
} from './MusicPlayerStyle'
import { musics } from './Songs'

export function MusicPlayer() {
  const playerRef = useRef<HTMLAudioElement>(null)
  const [playPromise, setPlayPromise] = useState<Promise<void>>()

  const randomMusicIndex = Math.floor(Math.random() * musics.length)

  const [isPlaying, setIsPlaying] = useState(false)
  const [currentMusic, setCurrentMusic] = useState(randomMusicIndex)
  const [hover, setHover] = useState(false)

  async function handleNextMusic() {
    await playPromise?.then(() => {
      playerRef.current?.pause()
    })

    if (currentMusic === musics.length - 1) {
      setCurrentMusic(0)
    } else {
      setCurrentMusic(currentMusic + 1)
    }

    const promise = playerRef.current?.play()
    setPlayPromise(promise)

    if (playerRef.current?.volume) {
      playerRef.current.volume = 0.2
    }
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
      <LottieBox
        disabled={!isPlaying}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
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

        {isPlaying ? (
          <Play onClick={() => setIsPlaying(false)} title="Pause the music" />
        ) : (
          <PlayDisabled
            onClick={() => setIsPlaying(true)}
            title="Play the music"
          />
        )}
      </LottieBox>

      <Title
        variants={variantsTitle}
        initial="hidden"
        animate={hover ? 'visible' : 'hidden'}
      >
        {musics[currentMusic].title}
      </Title>

      <audio
        ref={playerRef}
        src={musics[currentMusic].source}
        onEnded={handleNextMusic}
      />
    </Container>
  )
}
