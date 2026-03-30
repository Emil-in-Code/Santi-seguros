import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import { services } from './Data/Services.js';
import ServiceDetail from './pages/ServiceDetail.jsx';

import './App.css';
import { HeroSection, Services, AboutMe } from './components';
import { Navbar, Footer } from './widgets';

// Carga diferida: estos bundles solo se descargan cuando el usuario navega a la ruta
const PrivacidadPage = lazy(() => import('./pages/PrivacyPage.jsx'));
const CookiesPage = lazy(() => import ('./pages/CookiesPage.jsx')) 
const LegalNoticePage = lazy(() => import ('./pages/LegalNoticePage.jsx')) 
import ReactGA from "react-ga4"

function App() {

  const location = useLocation();

  useEffect(() => {
    // Esto avisa a Google cada vez que la URL cambia (ej: de / a /servicios)
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);
  
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <main>
                <HeroSection />

                <section id="services" className="services-grid">
                  <h1 className="section-title">Nuestros <br/>Seguros</h1>
                  {services.map((servicio) => (
                    <Services
                      key={servicio.id}
                      id={servicio.id}
                      imgSrc={servicio.image}
                      imgAlt={servicio.title}
                      title={servicio.title}
                      text={servicio.text}
                      badge={servicio.badge}
                      waMessage={servicio.waMessage}
                      loading="lazy"
                    />
                  ))}
                </section>
              </main>
              <AboutMe />
            </>
          }
        />

        {/* RUTA DE DETALLE */}
        <Route
          path="/seguro/:id"
          element={<ServiceDetail />}
        />

        {/* RUTAS LEGALES — lazy loaded */}
        <Route
          path="/privacidad"
          element={
            <Suspense fallback={<div style={{ padding: '4rem', textAlign: 'center', color: '#6b6b6b' }}>Cargando...</div>}>
              <PrivacidadPage />
            </Suspense>
          }
        />

        <Route
          path="/cookies"
          element={
            <Suspense fallback={<div style={{ padding: '4rem', textAlign: 'center', color: '#6b6b6b' }}>Cargando...</div>}>
              <CookiesPage />
            </Suspense> 
          }
        />

        <Route
          path="/legal"
          element={
            <Suspense fallback={<div style={{ padding: '4rem', textAlign: 'center', color: '#6b6b6b' }}>Cargando...</div>}>
              <LegalNoticePage />
            </Suspense> 
          }
        />

      </Routes>


      <Footer id="Footer" />
    </>
  )
}

export default App
