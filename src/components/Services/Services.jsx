import { Link } from 'react-router-dom';
import styles from './Services.module.css';

export default function Services({ id, imgSrc, imgAlt, title, text, badge,waMessage, loading = "lazy"}) {
  
  const phoneNumber = "34614866499"

  //función de seguimiento, se sabe por cuál seguro clickearon
  const handleWhatsAppTracking = () => {
     ReactGA.event({
       category: "Conversión",
       action: "Clic WhatsApp - Home",
       label: title, // Ejemplo: "Seguro de Hogar"
     });

     const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(waMessage)}`;
     window.open(waLink, "_blank", "noopener,noreferrer");
  }; 
  return (
    <div className={styles.containerCard}>
      <img src={imgSrc} alt={imgAlt} className={styles.cardImgFull} loading={loading} />
      <div className={styles.cardOverlay}></div>
      <h2 className={styles.cardTitleStatic}>{title}</h2>
      {badge && <span className={styles.cardBadge}>{badge}</span>}

      <div className={styles.serviceGlassPanel}>
        <div className={styles.glassPanelTitle}>{title}</div>
        <p className={styles.glassPanelText}>{text}</p>
        <Link
          to={`/seguro/${id}`}
          target="_blank"
          className={styles.glassPanelCta}
        > 
        Ver +
        </Link>
        
        <span 
          onClick={handleWhatsAppTracking}
          target="_blank" 
          className={styles.glassPanelCta}
        >
        WP →
        </span>
      </div>
    </div>
  );
}
