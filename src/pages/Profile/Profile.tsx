import { useState } from 'react'
import { genConfig } from 'react-nice-avatar'
import Avatar from 'react-nice-avatar'

import { UserProps } from '../../contexts/AuthContext'
import { useAuth } from '../../hooks/useAuth'

import {
  BoxAvatar,
  Container,
  Name,
  Description,
  RandomIcon,
} from './ProfileStyle'

export function Profile() {
  const { user, updateUser } = useAuth()
  const [avatarFocus, setAvatarFocus] = useState(false)

  async function handleEditAvatar() {
    const newUser: UserProps = {
      id: user?.id || '',
      name: user?.name || '',
      avatar: genConfig(),
    }

    await updateUser(newUser)
  }

  return user ? (
    <Container>
      <BoxAvatar
        onMouseEnter={() => setAvatarFocus(true)}
        onMouseLeave={() => setAvatarFocus(false)}
        onClick={handleEditAvatar}
      >
        <Avatar
          {...user?.avatar}
          style={{
            width: '10rem',
            height: '10rem',
          }}
        />
        <RandomIcon avatarFocus={avatarFocus} />
      </BoxAvatar>

      <Name>{user?.name}</Name>

      <Description>Click icon to change your profile icon</Description>
    </Container>
  ) : (
    <></>
  )
}
