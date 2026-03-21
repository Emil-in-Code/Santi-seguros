// HeroSection.jsx
import React, { useState, useEffect } from 'react';
import styles from './HeroSection.module.css';
import CtaButton from '../CtaButton/cta.jsx';
import heroImage from '../../assets/heroimg.webp';
import LightPillar from '../LightPillar/LightPillar.jsx';

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

  return (
    <section className={`${styles.heroContainer} ${styles[breakpoint]}`}>

      {/* Fondo: LightPillar en desktop/tablet, CSS gradient en mobile */}
      {!isMobile ? (
        <div className={styles.pillarBackground}>
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
        </div>
      ) : (
        <div className={styles.mobileBg} aria-hidden="true" />
      )}

      {/* Contenido */}
      <div className={styles.wrapper}>

        {/* En tablet y mobile: imagen va ARRIBA del texto */}
        {(isTablet || isMobile) && (
          <img
            src={heroImage}
            alt="foto de familia con perro"
            className={styles.imgHero}
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
              href="#services"
              className={styles.buscarBtn}
              text="Ver Seguros"
            />
          </div>
        </div>

        {/* En desktop: imagen va a la DERECHA del texto */}
        {!isTablet && !isMobile && (
          <img
            src={heroImage}
            alt="foto de familia con perro"
            className={styles.imgHero}
          />
        )}

      </div>
    </section>
  );
}
