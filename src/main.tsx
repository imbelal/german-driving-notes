import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import { ProgressProvider } from './hooks/useProgress.tsx'
import { ThemeProvider } from './hooks/useTheme.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <ProgressProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </ProgressProvider>
    </ThemeProvider>
  </StrictMode>,
)
