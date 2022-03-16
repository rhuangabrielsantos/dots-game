import { genConfig, AvatarFullConfig } from 'react-nice-avatar'

export function useAvatar(props: AvatarFullConfig) {
  const config = genConfig(props)

  return config
}
