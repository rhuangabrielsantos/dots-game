import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Menu } from './components/Menu'
import { HomeLogged } from './pages/HomeLogged'
import { HomeNotLogged } from './pages/HomeNotLogged'
import { Lobby as LobbyOffline } from './pages/Offline/Lobby'
import { Play as PlayOffline } from './pages/Offline/Play'
import { Winner as WinnerOffline } from './pages/Offline/Winner'
import { Lobby as LobbyOnline } from './pages/Online/Lobby'
import { Play as PlayOnline } from './pages/Online/Play'
import { Winner as WinnerOnline } from './pages/Online/Winner'
import { Profile } from './pages/Profile'

export default function Router() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<HomeNotLogged />} />
        <Route path="/lobby" element={<LobbyOffline />} />
        <Route path="/game" element={<PlayOffline />} />
        <Route path="/winner" element={<WinnerOffline />} />

        <Route path="/home" element={<HomeLogged />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/:id/lobby" element={<LobbyOnline />} />
        <Route path="/:id/game" element={<PlayOnline />} />
        <Route path="/:id/winner" element={<WinnerOnline />} />
      </Routes>
    </BrowserRouter>
  )
}
