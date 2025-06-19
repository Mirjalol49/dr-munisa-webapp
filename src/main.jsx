import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// Import i18n configuration
import './i18n/i18n.js'

// Set the initial HTML lang attribute based on the user's selected language
const userLanguage = localStorage.getItem('i18nextLng') || 'uz';
document.documentElement.lang = userLanguage;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
