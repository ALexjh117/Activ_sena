import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HeaderHome from '../src/components/HeaderHome.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HeaderHome />
  </StrictMode>,
)
