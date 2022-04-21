import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Header } from './components/Header'
import { CreateGame } from './pages/CreateGame'
import { Home } from './pages/Home'
import { Lobby as LobbyOffline } from './pages/Offline/Lobby'
import { Play as PlayOffline } from './pages/Offline/Play'
import { Winner as WinnerOffline } from './pages/Offline/Winner'
import { Lobby as LobbyOnline } from './pages/Online/Lobby'
import { Play as PlayOnline } from './pages/Online/Play'
import { Winner as WinnerOnline } from './pages/Online/Winner'
import { Profile } from './pages/Profile'
import { Lobby as LobbySinglePlayer } from './pages/SinglePlayer/Lobby'
import { Play as PlaySinglePlayer } from './pages/SinglePlayer/Play'
import { Winner as WinnerSinglePlayer } from './pages/SinglePlayer/Winner'

export default function Router() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-game" element={<CreateGame />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/single-player/lobby" element={<LobbySinglePlayer />} />
        <Route path="/single-player/game" element={<PlaySinglePlayer />} />
        <Route path="/single-player/winner" element={<WinnerSinglePlayer />} />

        <Route path="/lobby" element={<LobbyOffline />} />
        <Route path="/game" element={<PlayOffline />} />
        <Route path="/winner" element={<WinnerOffline />} />

        <Route path="/:id/lobby" element={<LobbyOnline />} />
        <Route path="/:id/game" element={<PlayOnline />} />
        <Route path="/:id/winner" element={<WinnerOnline />} />
      </Routes>
    </BrowserRouter>
  )
}
