import React from 'react'
import { useContext } from 'react'

import { ThemeContext } from '../../contexts/ThemeContext'
import { DarkModeSwitch } from '../DarkModeSwitch'
import { Menu } from '../Menu'

import { HeaderStyle } from './HeaderStyle'

export function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <HeaderStyle>
      <Menu />

      <DarkModeSwitch
        onClick={toggleTheme}
        checked={theme === 'dark'}
        id="dark-mode-button"
      />
    </HeaderStyle>
  )
}
