import { createContext, useState, useEffect } from 'react'
import { AvatarFullConfig, genConfig } from 'react-nice-avatar'

import { auth, database, firebase } from '../services/firebase'

type AuthContextType = {
  user: UserProps | undefined
  updateUser: (user: UserProps) => Promise<void>
  signInWithGoogle: () => Promise<void>
  signOut: () => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

type AuthContextProviderType = {
  children: React.ReactNode
}

export type UserProps = {
  id: string
  name: string
  avatar?: AvatarFullConfig
}

export type AuthUserProps = {
  displayName: string
  photoURL: string
  uid: string
}

export function AuthContextProvider({ children }: AuthContextProviderType) {
  const [user, setUser] = useState<UserProps>()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName, uid } = user

        if (!displayName) {
          throw new Error('Missing information from Google Account.')
        }

        const userRef = database.ref(`users/${uid}`)

        userRef.on('value', (user) => {
          const userInformation = user.val()

          if (!userInformation) {
            setUser({
              id: uid,
              name: displayName,
            })
            return
          }

          setUser(userInformation)
        })
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

  async function signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()

    const result = await auth.signInWithPopup(provider)

    if (result.user) {
      const { displayName, uid } = result.user

      if (!displayName) {
        throw new Error('Missing information from Google Account.')
      }

      const userRef = database.ref(`users/${uid}`)

      userRef.on('value', (user) => {
        const userInformation = user.val()

        if (!userInformation) {
          const newUser: UserProps = {
            id: uid || '',
            name: displayName || '',
            avatar: genConfig(),
          }

          userRef.update(newUser)
          setUser(newUser)
          return
        }

        setUser(userInformation)
      })
    }
  }

  async function signOut() {
    await auth.signOut()
    setUser(undefined)
  }

  async function updateUser(user: UserProps) {
    const userRef = database.ref(`users/${user?.id}`)
    await userRef.update(user)
    setUser(user)
  }

  return (
    <AuthContext.Provider
      value={{ user, updateUser, signInWithGoogle, signOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}
