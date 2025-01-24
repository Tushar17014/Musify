import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Auth0Provider } from '@auth0/auth0-react'
import AuthProvider from './providers/authProvider.tsx'
import { Provider } from 'react-redux'
import { store } from './store/store.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain={`${import.meta.env.VITE_AUTH0_DOMAIN}`}
        clientId={`${import.meta.env.VITE_AUTH0_CLIENT_ID}`}
        authorizationParams={{
          redirect_uri: window.location.origin,
          audience: `${import.meta.env.VITE_AUTH0_AUDIENCE}`
        }}
      >
        <AuthProvider>
          <App />
        </AuthProvider>
      </Auth0Provider>
    </Provider>
  </StrictMode>,
)
