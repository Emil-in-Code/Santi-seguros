import styles from './Footer.module.css'

export default function Footer({id}) {

  return(
    <footer id={id} className={styles.footer}>

      <div className={styles.containerLinks}>
        
        <a 
          className={styles.footLink}
          href="https://wa.me/34614866499" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          📱34614866499
        </a>

        <a
          className={styles.footLink}
          href="https://instagram.com/" target="_blank" 
          rel="noopener noreferrer"
        >
          📷 mi instagram 
        </a>
        
        <a 
          className={styles.footLink}
          href="mailto:desandroseguros@gmail.com">
          ✉️ desandroseguros@gmail.com
        </a>

        <p className={styles.footLink}>
          📍 Valencia - España
        </p>

      </div>

      <div className={styles.devText}>
        <p>Diseñado y desarrollado con ♥ por</p>
        <a
          href="#" className={styles.devLink}>  
          Emilio Flor
        </a>
      </div>

    </footer>
  );
}
