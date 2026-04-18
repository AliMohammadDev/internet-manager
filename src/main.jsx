import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import router from './utils/router.jsx'

createRoot(document.getElementById('root')).render(
  <Providers>
    {/* for loading */}
    <RouterProvider router={router} />
  </Providers>
)
