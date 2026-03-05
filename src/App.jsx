import Navbar from '../widgets/Navbar/Navbar.jsx'
import HeroSection from './components/Hero/HeroSection.jsx'
function App() {

  return (
    <>
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
          <h1>Mis Servicios</h1>
          <>
            seguros de vida<br></br>
            seguro automotor<br></br>
            seguro contra incencios<br></br>
          </>
        </section>

      </main>
    </>
  )
}

export default App
