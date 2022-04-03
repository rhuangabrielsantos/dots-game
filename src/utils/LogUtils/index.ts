import { logEvent } from 'firebase/analytics'

import { analytics } from '../../services/firebase'

export function registerLog(name: string) {
  if (typeof analytics !== 'undefined') {
    logEvent(analytics, name)
  }
}
