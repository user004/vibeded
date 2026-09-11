import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'open-props/style'
import 'open-props/normalize'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
