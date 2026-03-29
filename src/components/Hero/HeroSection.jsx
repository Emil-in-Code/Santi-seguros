import React, { useState, useEffect, lazy, Suspense } from 'react';
import styles from './HeroSection.module.css';
import CtaButton from '../CtaButton/cta.jsx';
import heroImage from '../../assets/heroimg.webp';

//  Lazy load 
const LightPillar = lazy(() => import('../LightPillar/LightPillar.jsx'));

function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState(() => {
    if (typeof window === 'undefined') return 'desktop';
    const w = window.innerWidth;
    if (w < 768) return 'mobile';
    if (w < 1024) return 'tablet';
    return 'desktop';
  });

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 768) setBreakpoint('mobile');
      else if (w < 1024) setBreakpoint('tablet');
      else setBreakpoint('desktop');
    };
    window.addEventListener('resize', update, { passive: true });
    return () => window.removeEventListener('resize', update);
  }, []);

  return breakpoint;
}

export default function HeroSection() {
  const breakpoint = useBreakpoint();
  const isMobile = breakpoint === 'mobile';
  const isTablet = breakpoint === 'tablet';

  //  Delay controlado (mejora LCP)
  const [showEffect, setShowEffect] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowEffect(true);
    }, 500); // se puede ajustar 300–800ms

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={`${styles.heroContainer} ${styles[breakpoint]}`}>

      {/* Fondo optimizado */}
      {!isMobile ? (
        <div className={styles.pillarBackground}>

          {/* 👇 Fallback SIEMPRE presente */}
          <div className={styles.mobileBg} />

          {/* 👇 Solo carga si pasa condiciones */}
          {showEffect && (
            <Suspense fallback={null}>
              <LightPillar
                topColor="#587b98"
                bottomColor="#587b98"
                intensity={isTablet ? 0.35 : 0.4}
                rotationSpeed={0.9}
                glowAmount={0.002}
                pillarWidth={isTablet ? 6 : 8}
                pillarHeight={0.4}
                noiseIntensity={0.5}
                pillarRotation={225}
                interactive={false}
                mixBlendMode="screen"
                quality={isTablet ? 'low' : 'medium'}
              />
            </Suspense>
          )}

        </div>
      ) : (
        <div className={styles.mobileBg} aria-hidden="true" />
      )}

      {/* Contenido */}
      <div className={styles.wrapper}>

        {(isTablet || isMobile) && (
          <img
            src={heroImage}
            alt="foto de familia con perro"
            className={styles.imgHero}
            loading="eager"
            decoding="async"
          />
        )}

        <div className={styles.textGroup}>
          <h1 className={styles.title}>
            DE SANDRO<br />AGENTE DE SEGUROS
          </h1>

          <p className={styles.parrafo}>
            Deja de pelear con seguros que no responden.<br />
            Yo gestiono todo el proceso, tú descansas.
          </p>

          <div className={styles.cta}>
            <CtaButton
              wp="34614866499"
              className={styles.ctaBtn}
              text="Contactar"
            />
            <CtaButton
              to="/seguro/1"
              className={styles.buscarBtn}
              text="Ver Seguros"
            />
            {/* <CtaButton
              href="#services"
              className={styles.buscarBtn}
              text="Ver Seguros"
            />*/}
          </div>
        </div>

        {!isTablet && !isMobile && (
          <img
            src={heroImage}
            alt="foto de familia con perro"
            className={styles.imgHero}
            loading="eager"
            decoding="async"
          />
        )}

      </div>
    </section>
  );
}
