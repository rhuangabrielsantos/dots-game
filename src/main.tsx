import React from 'react'
import ReactDOM from 'react-dom/client'
import * as Sentry from '@sentry/react'

import App from './App.tsx'
import { Provider } from './contexts/index.tsx'

Sentry.init({
  dsn: import.meta.env.VITE_SENTRY_DNS,
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1.0,
  tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider>
  </React.StrictMode>
)
