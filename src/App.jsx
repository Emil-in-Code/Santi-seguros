import { lazy, Suspense } from 'react';
import Navbar from './widgets/Navbar/Navbar.jsx'
import HeroSection from './components/Hero/HeroSection.jsx'
import { services } from './Data/Services.js';
import './App.css'
import Services from './components/Services/Services.jsx'
import Footer from './widgets/Footer/Footer.jsx'
import AboutMe from './components/AboutMe/AboutMe.jsx'
import { Routes, Route } from 'react-router-dom';
import ServiceDetail from './pages/ServiceDetail.jsx';

// Carga diferida: estos bundles solo se descargan cuando el usuario navega a la ruta
const PrivacidadPage = lazy(() => import('./pages/PrivacyPage.jsx'));
const CookiesPage = lazy(() => import ('./pages/CookiesPage.jsx')) 

function App() {
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
      </Routes>
      <Footer id="Footer" />
    </>
  )
}

export default App
