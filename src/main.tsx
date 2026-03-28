import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeContextProvider } from './styles/ThemeContext'
import { GlobalStyles } from './styles/global'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContextProvider>
      <GlobalStyles />
      <App />
    </ThemeContextProvider>
  </StrictMode>,
)
