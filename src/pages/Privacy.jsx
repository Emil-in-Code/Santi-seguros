import React from 'react';
import styles from "../styles/Privacy.module.css";

export default function PrivacyPolicy() {
  return (
    <section className={styles.container}>
      <h1>Política de Privacidad</h1>
      <p className={styles.updated}>Última actualización: 25 de marzo de 2026</p>

      <p>
        Este Aviso de Privacidad de <strong>Santiago De Sandro</strong> (operando como
        <strong> De Sandro Seguros</strong>) describe cómo recopilamos, usamos y protegemos
        tu información personal cuando utilizas nuestros servicios.
      </p>

      <h2>Resumen de puntos clave</h2>
      <ul>
        <li>Recopilamos información según tu interacción con el sitio.</li>
        <li>No procesamos datos sensibles.</li>
        <li>No obtenemos datos de terceros.</li>
        <li>Usamos la información para mejorar nuestros servicios.</li>
      </ul>

      <h2>1. Información que recopilamos</h2>
      <h3>Información proporcionada por el usuario</h3>
      <p>
        Recopilamos la información que nos proporcionas voluntariamente cuando
        te contactas con nosotros o utilizas nuestros servicios.
      </p>

      <h3>Información automática</h3>
      <p>
        Podemos recopilar automáticamente:
      </p>
      <ul>
        <li>Dirección IP</li>
        <li>Navegador y dispositivo</li>
        <li>Sistema operativo</li>
        <li>Datos de uso</li>
      </ul>

      <h2>2. Cómo usamos tu información</h2>
      <ul>
        <li>Prestar y mejorar nuestros servicios</li>
        <li>Analizar el comportamiento de los usuarios</li>
        <li>Mostrar contenido personalizado</li>
        <li>Cumplir obligaciones legales</li>
      </ul>

      <h2>3. Base legal</h2>
      <p>Procesamos tus datos bajo:</p>
      <ul>
        <li>Consentimiento</li>
        <li>Interés legítimo</li>
        <li>Obligaciones legales</li>
      </ul>

      <h2>4. Compartición de datos</h2>
      <p>
        Podemos compartir información con proveedores de servicios, herramientas
        de marketing y socios comerciales cuando sea necesario.
      </p>

      <h2>5. Cookies</h2>
      <p>
        Utilizamos cookies para mejorar la experiencia del usuario, analizar el
        tráfico y mostrar publicidad relevante.
      </p>

      <h2>6. Transferencias internacionales</h2>
      <p>
        Tus datos pueden ser almacenados fuera de tu país, aplicando medidas de
        protección adecuadas.
      </p>

      <h2>7. Conservación de datos</h2>
      <p>
        Conservamos la información durante un máximo de 2 años, salvo obligación legal.
      </p>

      <h2>8. Seguridad</h2>
      <p>
        Aplicamos medidas técnicas y organizativas para proteger tus datos,
        aunque no podemos garantizar seguridad absoluta.
      </p>

      <h2>9. Menores</h2>
      <p>No recopilamos datos de menores de 18 años.</p>

      <h2>10. Tus derechos</h2>
      <ul>
        <li>Acceder a tus datos</li>
        <li>Rectificarlos</li>
        <li>Solicitar su eliminación</li>
        <li>Limitar su tratamiento</li>
      </ul>

      <h2>11. Actualizaciones</h2>
      <p>
        Podemos modificar esta política en cualquier momento para cumplir con la normativa vigente.
      </p>

      <h2>12. Contacto</h2>
      <p>
        Email:{" "}
        <a href="mailto:desandroseguros@gmail.com">
          desandroseguros@gmail.com
        </a>
      </p>
    </section>
  );
}
