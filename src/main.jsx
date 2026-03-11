import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './Containers/Home'
import { GlobalStyle } from './Styles/GlobalSettings'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <Home />
  </StrictMode>,
)
