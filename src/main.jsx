import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CartaoPerfil from './components/CartaoPerfil'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartaoPerfil />
  </StrictMode>,
)
