
import styles from "./AboutMe.module.css"
import profilePic from '../../assets/aboutme.webp'
import profile2 from "../../assets/aboutme2.webp"

export default function AboutMe() {
  return (
    <section id="Info" className={styles.gridContainer}>
      {/* Título Superior */}
      <div className={styles.header}>
        <h2 className={styles.title}>SOBRE MI</h2>
      </div>

      {/* Fila 1 */}
      <div className={styles.imageBox1}>
        <img src={profilePic} alt="foto de perfil de Santiago de Sandro" />
      </div>
      <div className={styles.textBox1}>
        <p className={styles.highlightText}>
          ¡Hola!<br/> soy <em><strong>Santiago De Sandro</strong> </em> 
          sé que lo que buscas no es solo una póliza, sino la <strong>certeza </strong>
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
        <img src={profile2} alt="foto de perfil de Santiago de Sandro" />
      </div>
    </section>
  )
}

