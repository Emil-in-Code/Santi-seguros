import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: "GTM-M42XXBCG"
};
TagManager.initialize(tagManagerArgs)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider> 
      <BrowserRouter> 
        <App />
      </BrowserRouter>
    </HelmetProvider>   
  </StrictMode>,
)
