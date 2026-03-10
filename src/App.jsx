import Navbar from './widgets/Navbar/Navbar.jsx'
import HeroSection from './components/Hero/HeroSection.jsx'
import { services } from './Data/Services.js';
function App() {

  return (
    <>
      <Navbar />
      <main>

        <HeroSection />
        <section id="companies" className="spacer">
          <div className="loopContainer">
            <h3 className="title-loop">Trabajo con</h3>
            {/*<CurvedLoop 
              marqueeText="Bonddex ✦ Sailor Paint ✦ Xingyi ✦ Aurand ✦ HG ✦ Monster ✦"
              speed={2}
              curveAmount={-0}
              direction="left"
              interactive 
              className="custom-text-style"
            />*/}
          </div>
        </section>

        <section id="services" className="services-grid"> 
          <h1>Nuestros Servicios</h1>
          {services.map((servicio) => (
              <div className="container-card" key={servicio.id}>
                <h1 className="service-title">{servicio.title}</h1>
                <div className="img-container">
                  <img 
                    src={servicio.image} 
                    className="img" 
                    loading="lazy"                  />
                </div>
              </div>
          ))}
        </section>
      </main>
    </>
  )
}

export default App
