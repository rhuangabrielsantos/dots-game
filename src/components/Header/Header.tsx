import React from 'react'
import { useContext } from 'react'

import { ThemeContext } from '../../contexts/ThemeContext'
import { DarkModeSwitch } from '../DarkModeSwitch'

import { HeaderProps } from './HeaderProps'
import { HeaderStyle } from './HeaderStyle'

export function Header({ children }: HeaderProps) {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <HeaderStyle>
      {children}
      <DarkModeSwitch
        onClick={toggleTheme}
        checked={theme === 'dark'}
        id="dark-mode-button"
      />
    </HeaderStyle>
  )
}
