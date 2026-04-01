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

const BASE_URL = "https://desandroseguros.es";

export const services = [
  { 
    id: 1, 
    title: "Seguro de Decesos",
    text: "Llegado el momento, nos hacemos cargo de todo.",
    image: decesos,
    waMessage: "Hola, estoy interesado en el Seguro de Decesos ¿me podrías dar más información?",
    badge:"más contratado", 
    seo: {
      title:"Seguro de Decesos | Tranquilidad Total para tu Familia | Preventiva VIVO",
      description: "Protege a los tuyos cuando más lo necesitan. Con Preventiva VIVO nos ocupamos de traslados, trámites legales y apoyo psicológico. Infórmate sin compromiso.",
      keywords: "Seguro de decesos, mejor seguro funerario, gastos de sepelio, asistencia familiar, cobertura de fallecimiento, seguro funerario, servicio funerario en Valencia",
      //og:image específica por servicio, tiene que ser de 1200 x 630 px
      //ogImage: `${BASE_URL}`,
    },
    detail:
    `
      <p>Es el Seguro de Decesos que tú y tu familia necesitáis, porque llegado el momento, 
        es la forma de asegurarte que no tengan que preocuparse por nada, porque con <br>
        <em>Preventiva VIVO</em>, tu tranquilidad y la de los tuyos es lo que más nos
        importa.
      </p>
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
    waMessage: "Hola, estoy interesado en el Seguro de Hogar ¿me podrías dar más información?",
    detail:
    `
      <p>Tu casa evoluciona. Tu seguro también. Presentamos <em>Prevehogar</em>, el seguro de hogar que 
      no solo te protege, sino que acompaña. Con el respaldo de la Garantía de <em>Calidad Aenor</em>,
      combinamos la tecnología más avanzada con la rapidez que necesitáis:<br> <em>soluciones reales</em> las
      24 horas, los 365 días del año.
      Desde asistencia informática hasta apoyo para el empleo, nos adaptamos a vuestra familia y 
      presupuesto con la mejor relación cobertura-precio del mercado.
      Prevehogar: Protegemos lo que más queréis, impulsamos vuestra tranquilidad.</p>
    `
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
    waMessage: "Hola, estoy interesado en el Seguro de Comunidades ¿me podrías dar más información?",
    detail:
    `
    <p>
      Una póliza con numerosas coberturas para los posibles riesgos tanto de los grandes como
      de los pequeños edificios, lo cual garantiza que nuestros hogares también estarán protegidos, y
      eso es una tranquilidad para todos.
    </p>
    <h2>Garantías básicas</h2>
    <ul>
      <li>
        <h3>Incendio, exploción y caída de rayo</h3>
      </li>
      <li>
        <h3>Humo u Hollín</h3>
      </li>
      <li>
        <h3>Colisión de vehículos o caída de aeronaves</h3>
      </li>
      <li>
        <h3>Daños eléctricos a instalaciones comunes</h3>
      </li>
      <li>
        <h3>Inundación</h3>
      </li>
      <li>
        <h3>Rotura de loza sanitaria</h3>
      </li>
      <li>
        <h3>Caída de árboles,postes y antenas</h3>
      </li>
      <li>
        <h3>Actos de vandalismo</h3>
      </li>
      <li>
        <h3>Y mucho más...</h3>
      </li>
    </ul>
    `
  },
  { 
    id: 5, 
    title: "Comercios/Pymes",
    text: "Pase lo que pase tu negocio no debe parar",
    image: comercio,
    waMessage: "Hola, estoy interesado en el Seguro de Comercio y Pymes ¿me podrías dar más información?",
    detail:
    `
      <p> 
        Porque tu negocio o empresa es tu medio de vida y el de los tuyos, Preventiva dispone de
        unos productos adaptados a los posibles imprevistos que te puedan paralizar tu actividad, 
        con el consiguiente perjuicio para la economía familiar.
      </p>
      <ul>
        <li>
          <h3>Incendio, exploción y caída de rayo</h3>
        </li>
        <li>
          <h3>Gastos de salvamento, demolición y desescombro</h3>
        </li>
        <li>
          <h3>Gastos de extinción de incendios</h3>
        </li>
        <li>
          <h3>Inhabitabilidad</h3>
        </li>
        <li>
          <h3>Pérdida de alquileres</h3>
        </li>
        <li>
          <h3>Daños eléctricos</h3>
        </li>
        <li>
          <h3>Extensión de garantías</h3>
          <article>Daños por actos vandálicos</article>
          <article>Daños por lluvia, viento, pedrisco o nieve</article>
          <article>Daños por caída de astronaves o aeronaves</article>
          <article>Daños por colisión de vehículos terrestres</article>
          <article>Daños por inundación</article>
          <article>mucho más...</article>
        </li>
         <li>
          <h3>Daños producidos por el agua</h3>
          <article>Daños agua con búsqueda y reparación de averías</article>
        </li> 
        <li>
          <h3>Sustitución de cerraduras</h3>
        </li> 
        <li>
          <h3>Recomposición estética</h3>
        </li>
         <li>
          <h3>Responsabilidad civil,defensa jurídica y fianzas</h3>
          <article>R.C. de Explotación</article>
          <article>R.C. Locativa</article>
          <article>R.C. Inmobiliaria</article>
          <article>Defensa jurídica y fianzas</article>
          <article>Reclamo de daños</article>
        </li>  
        <li>
          <h3>Asistencia a comercios 24hs.</h3>
        </li>
        <li>
          <h3>Preguntar por garatías opcionales</h3>
        </li>
      </ul>
    `,
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
