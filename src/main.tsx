import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './routes'
import './index.css'
import { Footer } from './components/footer'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <body className='min-h-screen'>
      <Router />
      <Footer />
    </body>

  </React.StrictMode>,
)
