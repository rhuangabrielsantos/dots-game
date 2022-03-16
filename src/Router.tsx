import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { Game } from './pages/Game'
import { Home } from './pages/Home'
import { PlayOffline } from './pages/PlayOffline'
import { Winner } from './pages/Winner'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play-offline" element={<PlayOffline />} />
        <Route path="/game" element={<Game />} />
        <Route path="/winner" element={<Winner />} />
      </Routes>
    </BrowserRouter>
  )
}
