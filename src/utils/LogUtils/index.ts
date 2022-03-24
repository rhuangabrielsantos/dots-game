import { logEvent } from 'firebase/analytics'

import { analytics } from '../../services/firebase'

export function registerLog(name: string) {
  if (process.env.NODE_ENV === 'production') {
    logEvent(analytics, name)
  }
}
