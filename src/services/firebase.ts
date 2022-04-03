import { Analytics, getAnalytics, logEvent } from 'firebase/analytics'
import firebase from 'firebase/compat/app'

import 'firebase/compat/auth'
import 'firebase/compat/database'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  database: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
}

const app = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const database = firebase.database()
let analytics: Analytics | undefined

if (process.env.NODE_ENV === 'production') {
  analytics = getAnalytics(app)
  logEvent(analytics, 'notification_received')
}

export { firebase, auth, database, analytics }
