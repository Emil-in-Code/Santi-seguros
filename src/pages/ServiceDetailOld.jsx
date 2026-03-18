import { useParams } from 'react-router-dom';
import { services } from '../Data/Services.js';
import styles from './ServiceDetail.module.css'

export default function ServiceDetail() {
  const { id } = useParams();
  const servicio = services.find(s => s.id === parseInt(id));

  if (!servicio) return <h1>Seguro no encontrado</h1>;

  return (
    <div className={styles.detailWrapper}>
      <div className={styles.detailHeader}>
        <img src={servicio.image} alt={servicio.title} />
      </div>
      <div 
        className={styles.detailBody} 
        dangerouslySetInnerHTML={{ __html: servicio.detail }} 
      />
    </div>
  );
}
