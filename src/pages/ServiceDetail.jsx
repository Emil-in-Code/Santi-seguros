import { useParams, Link } from 'react-router-dom';
import { services } from '../Data/Services.js';
import styles from './ServiceDetail.module.css';
import { ServiceSeo } from '../components';


export default function ServiceDetail() {
  const { id } = useParams();
  const servicio = services.find(s => s.id === parseInt(id));

  if (!servicio) return (
    <div className={styles.notFound}>
      <h2>Seguro no encontrado</h2>
      <Link to="/" className={styles.backLink}><strong>← Volver al inicio</strong></Link>
    </div>
  );

  const phoneNumber = "34614866499";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(servicio.waMessage)}`;

  const currentIndex = services.findIndex(s => s.id === parseInt(id));
  const prev = services[currentIndex - 1];
  const next = services[currentIndex + 1];
 
  const pushEvent = (data) => {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);
  };

  return (
    <div className={styles.pageWrapper}>
      
      <ServiceSeo seo={servicio.seo} title={servicio.title} />
      
      {/* HERO con imagen de fondo */}
      <div className={styles.hero} style={{ backgroundImage: `url(${servicio.image})` }}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          {servicio.badge && (
            <span className={styles.badge}>{servicio.badge}</span>
          )}
          <h1 className={styles.heroTitle}>{servicio.title}</h1>
          <p className={styles.heroSubtitle}>{servicio.text}</p>
        </div>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className={styles.contentGrid}>

        {/* Columna izquierda: detalle */}
        <div className={styles.mainCol}>
          {servicio.detail ? (
            <div
              className={styles.detailBody}
              dangerouslySetInnerHTML={{ __html: servicio.detail }}
            />
          ) : (
            <div className={styles.noDetail}>
              <p>Próximamente más información sobre este seguro.</p>
              <p>Mientras tanto, podés consultarnos directamente por WhatsApp.</p>
            </div>
          )}
        </div>

        {/* Columna derecha: CTA sticky */}
        <aside className={styles.sideCol}>

          <div className={styles.ctaCard}>
            <p className={styles.ctaText}>
              ¿Querés saber más o cotizar? Escribinos por WhatsApp ahora.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.waButton}
              onClick={(e) => {
                e.preventDefault();

                pushEvent({
                  event: "generate_lead",
                  method: "whatsapp",
                  item_name: servicio.title,
                  item_id: servicio.id
                });

                setTimeout(() => {
                  window.open(waLink, "_blank");
                }, 150);
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.118 1.533 5.845L.057 23.61a.5.5 0 00.614.614l5.764-1.476A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.925 0-3.727-.512-5.278-1.406l-.378-.218-3.92 1.004 1.003-3.92-.218-.378A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
              </svg>
              Consultar por WhatsApp
            </a>
            <p className={styles.responseTime}>
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1"/>
                <path d="M8 5v3l2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
              Respuesta en menos de 1 hora
            </p>
          </div>

          <div className={styles.trustCard}>
            <ul className={styles.trustList}>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 2L3 6v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V6l-9-4z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                Asesoramiento personalizado
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                Sin burocracia ni letra chica
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                Pólizas de aseguradoras líderes
              </li>
            </ul>
          </div>

          <div className={styles.navRow}>
                     {prev
                       ? <Link to={`/seguro/${prev.id}`} className={styles.navLink}>← {prev.title}</Link>
                       : <span />
                     }
                     <Link to="/" className={styles.backLink}><strong>Inicio</strong></Link>
                     {next
                       ? <Link to={`/seguro/${next.id}`} className={styles.navLink}>{next.title} →</Link>
                       : <span />
                     }
          </div>

        </aside>
      </div>
    </div>
  );
}
