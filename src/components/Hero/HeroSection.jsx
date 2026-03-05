// heroSection.jsx
import React from 'react';
import styles from './HeroSection.module.css';

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
               <button className={`${styles.btn} ${styles.btnContact}`}>Contactar</button>
               <button className={`${styles.btn} ${styles.btnProject}`}>Buscar seguro</button>
            </div>
          </div> 
 
        </div>

      </div>
    </section>

  );
}
