import decesos from '../assets/services/Decesosr.webp'
import hogar from '../assets/services/hogarR.webp'
import autonomo from '../assets/services/Autonomosr.webp'
import comunidades from '../assets/services/comunidadesr.webp'
import comercio from '../assets/services/comercior.webp'
import residentes from '../assets/services/residentesr.webp'
import accidentesPers from '../assets/services/accidentePerR.webp'
import previsionPer from '../assets/services/Previr.webp'
import planDentalF from '../assets/services/Dentalr.webp'
import mascotas from '../assets/services/Mascotasr.webp'

export const services = [
  { 
    id: 1, 
    title: "Seguro de Decesos",
    text: "Llegado el momento, nos hacemos cargo de todo.",
    image: decesos,
    waMessage: "Hola, estoy interesado en el Seguro de Decesos ¿me podrías dar más información?",
    badge:"más contratado",
    detail:
    `
      <p>Es el Seguro de Decesos que tú y tu familia necesitáis, porque llegado el momento, es la forma de asegurarte que no tengan que preocuparse por nada, porque con <br><strong>Preventiva VIVO</strong>, tu tranquilidad y la de los tuyos es lo que más nos importa.</p>
      <h2>Coberturas Incluídas</h2>
      <ul>
        <li>
          <h3>Traslado completo</h3>
          <article>Gestión y gastos desde cualquier parte del mundo al cementerio elegido en España. Incluye gastos de acompañante (hasta 1.500€) y retorno de menores.</article>
        </li>
        <li>
          <h3>Asistenecia psicológica</h3>
          <article>Orientación y apoyo profesional en momentos de crisis o angustia tras la pérdida.</article>
        </li>
        <li> 
          <h3>Asistenecia al servicio funerario</h3>
          <article>Apoyo total a la familia desde el primer momento hasta el final del servicio.</article>
        </li>
        <li>
          <h3>Testamento abierto Notarial</h3>
          <article>Asistencia web/telefónica y firma ante notario (incluso a domicilio si hay movilidad reducida).</article>
        </li>
        <li>
          <h3>Testamento vital</h3>
          <article>Asesoría legal para dejar instrucciones sobre cuidados de salud y destino final del cuerpo u órganos.</article>
        </li>
        <li>
          <h3>Gestiones jurídicas</h3>
          <article>Tramitación de herencias, pensiones y redacción de documentos ante cualquier organismo.</article>
        </li>
      </ul>`
  },
  {
    id: 2, 
    title: "Seguro de Hogar",
    text: "Seguro flexible que se adapta a cualquier tipo de necesidad y perfil familiar...",
    image: hogar,
    waMessage: "Hola, estoy interesado en el Seguro de Hogar ¿me podrías dar más información?"
  },
  { 
    id: 3, 
    title: "Autónomo",
    text: "Protege tu nivel de ingresos ante cualquier enfermedad o accidente",
    image: autonomo,
    waMessage: "Hola, estoy interesado en el Seguro para Autónomos ¿me podrías dar más información?"
  },
  { 
    id: 4, 
    title: "Seguro para comunidades",
    text: "Una póliza con numerosas coberturas para los posibles riesgos edilicios...",
    image: comunidades,
    waMessage: "Hola, estoy interesado en el Seguro de Comunidades ¿me podrías dar más información?"
  },
  { 
    id: 5, 
    title: "Comercios/Pymes",
    text: "Pase lo que pase tu negocio no debe parar",
    image: comercio,
    waMessage: "Hola, estoy interesado en el Seguro de Comercio y Pymes ¿me podrías dar más información?"
  },
  { 
    id: 6, 
    title: "Residentes",
    text: "Seguro para extranjeros que tengan residencia legal en España...",
    image: residentes,
    waMessage: "Hola, estoy interesado en el Seguro para Residentes ¿me podrías dar más información?"
  },
  { 
    id: 7, 
    title: "Accidente Personal",
    text: "Haz lo que más amas sin preocuparte, estás cubierto",
    image: accidentesPers,
    waMessage: "Hola, estoy interesado en el Seguro de Accidente Personal ¿me podrías dar más información?"
  },
  { 
    id: 8, 
    title: "Prevision Personal",
    text: "Para quienes ponen primero el futuro de su familia",
    image: previsionPer,
    waMessage: "Hola, estoy interesado en el Plan de Previsión Personal ¿me podrías dar más información?"
  },
  { 
    id: 9, 
    title: "Plan dental familiar",
    text: "Contamos con una red nacional de clínicas especializadas en salud dental...",
    image: planDentalF,
    waMessage: "Hola, estoy interesado en el Plan Dental Familiar ¿me podrías dar más información?"
  },
  { 
    id: 10,
    title: "Seguro para Mascotas",
    text: "Porque son un integrante más de la familia",
    image: mascotas,
    waMessage: "Hola, estoy interesado en el Seguro para Mascotas ¿me podrías dar más información?"
  }
]
