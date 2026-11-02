import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { ProgressProvider } from './hooks/useProgress.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ProgressProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ProgressProvider>
  </StrictMode>,
)
