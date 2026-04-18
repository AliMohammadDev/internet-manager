import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './utils/router.jsx'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* for loading */}
    <RouterProvider router={router} />
  </StrictMode>

)
