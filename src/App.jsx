import Navbar from './widgets/Navbar/Navbar.jsx'
import HeroSection from './components/Hero/HeroSection.jsx'
import { services } from './Data/Services.js';
import CurvedLoop from './components/CurvedLoop/CurvedLoop.jsx'
import './App.css'
import Services from './components/Services/Services.jsx'
function App() {

  return (
    <>
      <Navbar />
      <main>

        <HeroSection />
        <section id="companies" className="spacer">
          <div className="loopContainer">
            <CurvedLoop 
              marqueeText="Protege lo que más amas✦"
              speed={2}
              curveAmount={200}
              direction="left"
              interactive 
              className="custom-text-style"
            />
          </div>
        </section>

        <section id="services" className="services-grid">
          <h1 className="section-title">Nuestros <br/>Seguros</h1>
          {services.map((servicio) => (
            <Services
              key={servicio.id}
              imgSrc={servicio.image}
              imgAlt={servicio.title}
              title={servicio.title}
              text={servicio.text}
              badge={servicio.badge}
            />
          ))}
        </section>

      </main>
    </>
  )
}

export default App

