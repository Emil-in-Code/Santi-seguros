// heroSection.jsx
import React from 'react';
import styles from './HeroSection.module.css';
import CtaButton from '../CtaButton/cta.jsx';

export default function HeroSection() {
  return (
    <section>
      <div className={styles.wrapper}>
        <div className={styles.content}>

          <div className= {styles.textGroup}>
            <h1 className={styles.title}>Seguros Santiago De Sandro</h1>
            <img src="" alt=""/>
            <p className={styles.parrafo}>Tengo el seguro que estás buscando</p>
            <div className={styles.cta}>
              <CtaButton
                to="/registrarme" 
                className={styles.btn} 
                aria-label="Contactar"
                text="Contactar"
              />
              <CtaButton
                to="/pedidos" 
                className={styles.btn}
                aria-label="Buscar seguro"
                text="Buscar Seguro"
              />
            </div>
          </div> 
 
        </div>

      </div>
    </section>

  );
}
