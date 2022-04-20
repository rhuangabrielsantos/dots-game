import { useContext, useEffect, useState } from 'react'
import Avatar from 'react-nice-avatar'
import { useNavigate } from 'react-router-dom'

import { AuthContext } from '../../contexts/AuthContext'

import {
  Button,
  ContainerLeft,
  GoogleIcon,
  HomeIcon,
  GameIcon,
  LoggOffIcon,
  MenuContainer,
  MenuItem,
  Name,
  ProfileIcon,
  SignInContainer,
} from './MenuStyle'

export function Menu() {
  const { user, signOut, signInWithGoogle } = useContext(AuthContext)
  const navigate = useNavigate()
  const [path, setPath] = useState('/')

  async function handleLogOff() {
    await signOut()

    navigate('/')
  }

  async function handleSignInGoogle() {
    await signInWithGoogle()
  }

  useEffect(() => {
    setPath(window.location.pathname)
  }, [window.location.pathname])

  return user ? (
    <>
      <ContainerLeft onClick={() => navigate('/profile')}>
        <Avatar {...user?.avatar} style={{ width: '2rem', height: '2rem' }} />
        <Name>{user?.name}</Name>
      </ContainerLeft>

      <MenuContainer>
        <MenuItem onClick={() => navigate('/')}>
          <HomeIcon selected={path === '/'} />
        </MenuItem>

        <MenuItem onClick={() => navigate('/create-game')}>
          <GameIcon selected={path === '/create-game'} />
        </MenuItem>

        <MenuItem onClick={() => navigate('/profile')}>
          <ProfileIcon selected={path === '/profile'} />
        </MenuItem>

        <MenuItem onClick={handleLogOff}>
          <LoggOffIcon />
        </MenuItem>
      </MenuContainer>
    </>
  ) : (
    <SignInContainer>
      <Button color="red" onClick={handleSignInGoogle}>
        <GoogleIcon /> Sign In
      </Button>
    </SignInContainer>
  )
}
