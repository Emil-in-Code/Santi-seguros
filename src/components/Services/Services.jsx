import { Link } from 'react-router-dom';
import styles from './Services.module.css';

export default function Services({ id, imgSrc, imgAlt, title, text, badge,waMessage, loading = "lazy"}) {
  
  const phoneNumber = "34614866499"
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(waMessage)}`;
 
  const pushEvent = (data) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);
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
          className={styles.glassPanelCta}
          onClick={() => {
            pushEvent({
              event: "select_content",
              content_type:"service",
              item_name: title,
              item_id: id
            });
          }}
        > 
          Ver +
        </Link>
        
        <a 
          href={waLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={styles.glassPanelCta}
          onClick={(e) => {
            e.preventDefault();

            pushEvent({
              event: "generate_lead",
              content_type:"whatsapp",
              item_name: title,
              item_id: id
            });

            setTimeout(() => {
              window.open(waLink,"_blank");
            },150)
          }}
        >
          WP →
        </a>
      </div>
    </div>
  );
}
