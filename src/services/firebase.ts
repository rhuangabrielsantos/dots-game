import { Analytics, getAnalytics, logEvent } from 'firebase/analytics'
import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APP_API_KEY,
  authDomain: import.meta.env.VITE_APP_AUTH_DOMAIN,
  database: import.meta.env.VITE_APP_DATABASE_URL,
  projectId: import.meta.env.VITE_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_APP_ID,
  measurementId: import.meta.env.VITE_APP_MEASUREMENT_ID,
}

const app = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const database = firebase.database()
let analytics: Analytics | undefined

if (import.meta.env.PROD) {
  analytics = getAnalytics(app)
  logEvent(analytics, 'notification_received')
}

export { firebase, auth, database, analytics }
