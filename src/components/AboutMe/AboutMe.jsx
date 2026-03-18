
import styles from "./AboutMe.module.css"
import profilePic from '../../assets/PicSanti.webp'

export default function AboutMe() {
  return (
    <section id="Info" className={styles.gridContainer}>
      {/* Título Superior */}
      <div className={styles.header}>
        <h2 className={styles.title}>SOBRE MI</h2>
      </div>

      {/* Fila 1 */}
      <div className={styles.imageBox1}>
        <img src={profilePic} alt="Santiago de Sandro" />
      </div>
      <div className={styles.textBox1}>
        <p className={styles.highlightText}>
          ¡Hola!<br/> soy <em>Santiago De Sandro</em><br />
          Sé que lo que buscas no es solo una póliza, sino la <strong>certeza </strong>
          de que tu familia y tu hogar estarán siempre a salvo.
          Mi meta es ser tu gestor de confianza en <strong>Preventiva Seguros</strong>,
          esa persona a la que llamas y que siempre tiene una solución.
          Estoy aquí para <strong>simplificarte la vida.</strong>
        </p>
      </div>

      {/* Fila 2 */}
      <div className={styles.textBox2}>
        <p>
          Llevo <strong>17 años</strong> cuidando de personas como tú. Mi formación como <strong>abogado</strong> me permite algo fundamental: entender cada detalle técnico para traducírtelo de forma sencilla y clara.
        </p>
      </div>
      <div className={styles.imageBox2}>
        <img src={profilePic} alt="Santiago de Sandro" />
      </div>
    </section>
  )
}
/*export default function AboutMe(){
  return(
    <section id="Info" className={styles.InfoContainer}>
      <h2 className={styles.InfoTitle}>Sobre mí</h2>

      <div className={styles.contentWrapper}>

        <p className={styles.infoText}>
          "Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et<br/>
          dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat.<br/> Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillu
          m dolore
          eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa
          qui officia deserunt mollit anim id est laborum."
        </p>

        <img 
          src={profilePic}
          alt="foto de santiago de sandro" 
          className={styles.profilePic}
        />
      </div>

      <div className={styles.contentWrapper}>
        <img 
          src={profilePic}
          alt="foto de santiago de sandro" 
          className={styles.profilePic2}
        />
        <p className={styles.infoText2}>
          "Lorem ipsum dolor sit amet, 
          consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, 
          quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillu
          m dolore
          eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa
          qui officia deserunt mollit anim id est laborum."
        </p>


      </div>
      
    </section>
  )
}*/

