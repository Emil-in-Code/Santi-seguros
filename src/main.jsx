import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.jsx'
import ReactGA from "react-ga4"

ReactGA.initialize("G-561EL0P5T5");
ReactGA.send({ hitType:"pageview", page: window.location.pathname});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider> 
      <BrowserRouter> 
        <App />
      </BrowserRouter>
    </HelmetProvider>   
  </StrictMode>,
)
