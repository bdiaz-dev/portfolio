import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './styles/index.scss'
import './styles/main.scss'
import { Analytics } from '@vercel/analytics/react'
import { JobProvider } from './context/JobProvider.jsx'
import { LangProvider } from './context/LangProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LangProvider>
      <JobProvider>
        <App />
        <Analytics />
      </JobProvider>
    </LangProvider>
  </React.StrictMode>
)
