import Navbar from './widgets/Navbar/Navbar.jsx'
import HeroSection from './components/Hero/HeroSection.jsx'
import { services } from './Data/Services.js';
import CurvedLoop from './components/CurvedLoop/CurvedLoop.jsx'
import './App.css'
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
          <h1>Nuestros <br/>Seguros</h1>
          {services.map((servicio) => (
              <div className="container-card" key={servicio.id}>
                <h1 className="service-title">{servicio.title}</h1>
                <div className="img-container">
                  <img 
                    src={servicio.image} 
                    className="img" 
                    alt={servicio.title}
                    loading="lazy"                  
                  />
                </div>
              </div>
          ))}
        </section>
      </main>
    </>
  )
}

export default App
