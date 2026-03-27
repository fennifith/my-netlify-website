import { createRoot } from 'react-dom/client'
import './index.css'
import { HomePage } from './App.jsx'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomePage />
  </StrictMode>,
)
