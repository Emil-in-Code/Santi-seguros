// HeroSection.jsx
import React from 'react';
import styles from './HeroSection.module.css';
import CtaButton from '../CtaButton/cta.jsx';
import heroImage from '../../assets/heroimg.webp';
import LightPillar from '../LightPillar/LightPillar.jsx';

export default function HeroSection() {
  return (
    <section className={styles.heroContainer}>
      {/* 1. Contenedor del LightPillar como Fondo */}
      <div className={styles.pillarBackground}>
        <LightPillar
          topColor="#587b98"   
          bottomColor="#587b98"  
          intensity={0.4}
          rotationSpeed={0.9}
          glowAmount={0.002}
          pillarWidth={8}
          pillarHeight={0.4}
          noiseIntensity={0.5}
          pillarRotation={225}
          interactive={false}
          mixBlendMode="screen"
          quality="high"
        />
      </div>

      {/* 2. Contenido del Hero */}
      <div className={styles.wrapper}>
        <div className={styles.textGroup}>
          <h1 className={styles.title}>
            DE SANDRO<br />AGENTE DE SEGUROS
          </h1>
          <p className={styles.parrafo}>
            Deja de pelear con seguros que no responden.<br/> 
            Yo gestiono todo el proceso, tú descansas.
          </p>

          <div className={styles.cta}>
            <CtaButton
              to="/registrarme" 
              className={styles.ctaBtn} 
              text="Contactar"
            />
            <CtaButton
              to="/pedidos" 
              className={styles.buscarBtn}
              text="Ver Seguros"
            />
          </div> 
        </div> 

        <img src={heroImage} alt="foto de familia con perro" className={styles.imgHero}/>
      </div>
    </section>
  );
}
