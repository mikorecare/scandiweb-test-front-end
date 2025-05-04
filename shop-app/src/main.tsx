import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './components/component.css';
import './components/cards/product-card.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
