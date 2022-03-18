import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Menu } from './components/Menu'
import { Game } from './pages/Game'
import { Home } from './pages/Home'
import { Lobby } from './pages/Lobby'
import { LoggedHome } from './pages/LoggedHome'
import { PlayOffline } from './pages/PlayOffline'
import { PlayOnline } from './pages/PlayOnline'
import { Profile } from './pages/Profile'
import { Winner } from './pages/Winner'

export default function Router() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play-offline" element={<PlayOffline />} />
        <Route path="/game" element={<Game />} />
        <Route path="/winner" element={<Winner />} />

        <Route path="/home" element={<LoggedHome />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/:id/lobby" element={<Lobby />} />
        <Route path="/:id/game" element={<PlayOnline />} />
      </Routes>
    </BrowserRouter>
  )
}
