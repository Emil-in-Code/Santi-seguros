import Navbar from './widgets/Navbar/Navbar.jsx';
import HeroSection from './components/Hero/HeroSection.jsx';
import { services } from './Data/Services.js';
import './App.css';
import Services from './components/Services/Services.jsx';
import Footer from './widgets/Footer/Footer.jsx';
import AboutMe from './components/AboutMe/AboutMe.jsx';
import { Routes, Route } from 'react-router-dom'; 
import ServiceDetail from './pages/ServiceDetail.jsx'; 

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* RUTA PRINCIPAL (Home) */}
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
      </Routes>
      <Footer id="Footer" />
    </>
  )
}

export default App
