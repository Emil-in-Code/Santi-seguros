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
    waMessage: "Hola, estoy interesado en el Seguro para Autónomos ¿me podrías dar más información?",
    detail:
    `
    <p>
      Que un imprevisto de salud no detenga tus ingresos. Nuestro seguro para autónomos está
      diseñado para garantizar tu estabilidad económica mediante un subsidio diario en caso de 
      enfermedad o accidente. Elige la agilidad de nuestro sistema baremado para cobrar tu indemnización
      sin esperar al alta médica y personaliza tu protección según tus necesidades. 
    </p>
    <ul>
      <li>
        <h3>Subsidio Diario por Baja:</h3>
        <article>
            Recibe una indemnización económica por cada día que no puedas desarrollar tu actividad profesional debido a una enfermedad o accidente.
        </article>
      </li>
      <li>
        <h3>Sistema Baremado Ágil:</h3>
        <article>
            Opción de cobrar tu prestación de forma inmediata mediante indemnizaciones fijadas por diagnóstico, sin necesidad de esperar al alta médica definitiva.
        </article>
      </li>
      <li>
        <h3>Coberturas Personalizables:</h3>
        <article>
            Posibilidad de ampliar tu protección con capitales adicionales en caso de hospitalización, intervenciones quirúrgicas o invalidez.
        </article>
      </li>
      <li>
        <h3>Beneficios Fiscales:</h3>
        <article>
            Optimiza tu inversión en seguridad, ya que la prima de este seguro es 100% deducible en tu declaración de IRPF hasta los límites legales.
        </article>
      </li>
      <li>
        <h3>Continuidad del Negocio:</h3>
        <article>
            Garantiza el mantenimiento de tus gastos fijos y tu tranquilidad financiera ante cualquier contratiempo que te obligue a detener tu actividad.
        </article>
      </li>
    </ul>
    `
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
        unos productos adaptados a los posibles imprevistos que puedan paralizar tu actividad, 
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
          <h3>Extensión de garantías</h3>
          <article>Robo y Expoliación</article>
          <article>Daños por actos vandálicos</article>
          <article>Daños por lluvia, viento, pedrisco o nieve</article>
          <article>Daños por caída de astronaves o aeronaves</article>
          <article>Daños por colisión de vehículos terrestres</article>
          <article>Daños por inundación</article>
          <article>mucho más...</article>
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
    waMessage: "Hola, estoy interesado en el Seguro para Residentes ¿me podrías dar más información?",
    detail:
    `
    <p><em>La protección</em> diseñada específicamente <em>para extranjeros</em> con residencia legal en España. 
      Brindamos tranquilidad ante cualquier imprevisto, garantizando respaldo total para ti y
      tus seres queridos con coberturas de repatriación, asistencia médica y apoyo familiar.
    </p>
    <ul>
      <li>
        <h3>Asistencia en Repatriación y Traslados:</h3>
        <article>
          Incluye el traslado nacional e internacional por fallecimiento, repatriación sanitaria
          al país de origen por incapacidad o enfermedad grave, y el retorno de menores o mayores de 65 años.
        </article>
      </li>
      <li>
        <h3>Protección para Acompañantes:</h3>
        <article>
          Cubre los gastos de estancia y desplazamiento de un acompañante en caso de hospitalización del 
          asegurado en España o para la repatriación de restos mortales.
        </article>
      </li>
      <li>
        <h3>Soporte Médico y de Emergencia:</h3>
        <article>
          Orientación médica telefónica 24 horas, envío de medicamentos al país de origen, servicio de 
          traducción y transmisión de mensajes urgentes.
        </article>
      </li>
      <li>
        <h3>Indemnizaciones y Garantías:</h3>
        <article>
          Capital garantizado en caso de invalidez total y permanente, muerte por accidente o diagnóstico 
          de enfermedades graves ocurridas en España.
        </article>
      </li>
      <li>
        <h3>Gestión en Viajes y Hogar:</h3>
        <article>
          Regreso anticipado al país de origen por fallecimiento de padres, acompañamiento en el extranjero
          y envío de objetos personales desde el domicilio en España.
        </article>
      </li>
    </ul>
    `
  },
  { 
    id: 7, 
    title: "Accidente Personal",
    text: "Haz lo que más amas sin preocuparte, estás cubierto",
    image: accidentesPers,
    waMessage: "Hola, estoy interesado en el Seguro de Accidente Personal ¿me podrías dar más información?",
    detail:
    `
    <p>
      El <em>respaldo</em> que garantiza tu <em>estabilidad</em> y la de tu <em>familia</em> frente a cualquier imprevisto.
      Diseñado para cubrir riesgos en el ámbito laboral, familiar o durante tus viajes, 
      asegurando que un accidente no altere tu futuro financiero ni tu calidad de vida.
    </p>
    <ul>
      <li>
          <h3>Cobertura por Fallecimiento:</h3>
          <article>
              Protección económica en caso de fallecimiento por accidente, incluyendo accidentes de circulación, infarto agudo de miocardio o accidentes vasculares cerebrales.
          </article>
      </li>
      <li>
          <h3>Invalidez Permanente y Absoluta:</h3>
          <article>
              Garantías ante invalidez permanente (parcial o absoluta) y Gran Invalidez derivadas de accidentes generales o de circulación, asegurando el respaldo necesario ante situaciones críticas.
          </article>
      </li>
      <li>
          <h3>Asistencia Sanitaria Completa:</h3>
          <article>
              Cobertura de gastos médicos y asistencia sanitaria especializada necesaria para la recuperación total tras sufrir un accidente.
          </article>
      </li>
      <li>
          <h3>Protección de Ingresos:</h3>
          <article>
              Indemnización por incapacidad temporal, diseñada para mitigar la pérdida de ingresos mientras el asegurado se encuentre imposibilitado para realizar su actividad habitual.
          </article>
      </li>
      <li>
          <h3>Prevención en Todo Ámbito:</h3>
          <article>
              Asunción de riesgos en el entorno familiar, laboral, traslados o actividades de ocio, ofreciendo una red de seguridad permanente frente a situaciones fortuitas.
          </article>
      </li>
    </ul>
    `
  },
  { 
    id: 8, 
    title: "Prevision Personal",
    text: "Para quienes ponen primero el futuro de su familia",
    image: previsionPer,
    waMessage: "Hola, estoy interesado en el Plan de Previsión Personal ¿me podrías dar más información?",
    detail:
    `
    <p>
      La solución definitiva para quienes no dejan el futuro de su familia al azar. 
      Nuestro plan ofrece una <em>protección integral</em> que combina seguridad financiera en caso de fallecimiento
      con un respaldo sólido ante enfermedades graves y hospitalizaciones, garantizando que tu tranquilidad
      y la de los tuyos sea innegociable.
    </p>
    <ul>
      <li>
        <h3>Fallecimiento por Cualquier Causa:</h3>
        <article>
          Garantiza un capital de respaldo para tus beneficiarios ante cualquier circunstancia,
          asegurando que tu familia mantenga su calidad de vida.
        </article>
      </li>
      <li>
        <h3>Invalidez Absoluta y Permanente:</h3>
        <article>
          Protección financiera inmediata en caso de que una situación de salud
          te impida volver a trabajar de forma definitiva.
        </article>
      </li>
      <li>
        <h3>Respaldo ante Enfermedades Graves:</h3>
        <article>
          Cobertura específica que incluye diagnósticos críticos como cáncer, infarto de miocardio,
          insuficiencia renal, trasplantes y accidentes cerebrovasculares.
        </article>
      </li>
      <li>
        <h3>Indemnización por Hospitalización:</h3>
        <article>
          Apoyo económico diario durante periodos de hospitalización quirúrgica, cubriendo gastos
          imprevistos y compensando la interrupción de tu rutina.
        </article>
      </li>
      <li>
        <h3>Cirugía de Arterias Coronarias:</h3>
        <article>
          Garantía extendida para intervenciones cardíacas complejas, asegurando acceso a los recursos
          necesarios en momentos de alta vulnerabilidad.
        </article>
      </li>
    </ul>
    `
  },
  { 
    id: 9, 
    title: "Plan dental familiar",
    text: "Contamos con una red nacional de clínicas especializadas en salud dental...",
    image: planDentalF,
    waMessage: "Hola, estoy interesado en el Plan Dental Familiar ¿me podrías dar más información?",
    detail:
    `
    <p>
      La <em>protección bucodental más completa</em> para toda tu familia, con un enfoque especial
      en la salud de los más pequeños. Accede a una red nacional de <em>más de 1.900 clínicas</em>
      con precios máximos garantizados y servicios gratuitos preventivos que aseguran la mejor sonrisa para todos.
    </p>
    <ul>
      <li>
        <h3>Servicio Dental Integral:</h3>
        <article>
          Cobertura para hasta 5 miembros de la familia en más de 1.900 clínicas. Incluye 43 servicios gratuitos
          (como limpieza anual y extracciones) y precios baremados muy por debajo del mercado.
        </article>
      </li>
      <li>
        <h3>Plan de Salud Bucal Infantil:</h3>
        <article>
          Atención preferente para menores de 16 años sin listas de espera ni carencias.
          Incluye 12 servicios gratuitos y promociones especiales en ortodoncia.
        </article>
      </li>
      <li>
        <h3>Innovación y Asesoramiento:</h3>
        <article>
          Acceso a asesoramiento online en 175 clínicas seleccionadas para consultas rápidas
          y mayor comodidad en la gestión de tu salud bucodental.
        </article>
      </li>
      <li>
        <h3>Seguro de Accidentes Incluido:</h3>
        <article>
          Tranquilidad adicional con un capital de 3.000 € garantizado para uno de los asegurados
          en caso de fallecimiento por accidente.
        </article>
      </li>
      <li>
        <h3>Transparencia de Costes:</h3>
        <article>
          Precios máximos garantizados en más de 240 tratamientos y comparador de precios por clínica 
          para que siempre elijas la opción que mejor se adapte a tu presupuesto.
        </article>
      </li>
    </ul>
    `
  },
  { 
    id: 10,
    title: "Seguro para Mascotas",
    text: "Porque son un integrante más de la familia",
    image: mascotas,
    waMessage: "Hola, estoy interesado en el Seguro para Mascotas ¿me podrías dar más información?",
    detail:
    `
    <p>
      La solución definitiva para cumplir con la nueva <em>Ley de Bienestar Animal (7/2023)</em>.<br>
      Protege a tu perro y garantiza tu tranquilidad con una cobertura completa que incluye 
      responsabilidad civil sin franquicia, asistencia veterinaria baremada y defensa jurídica especializada
    </p>
    <ul>
      <li>
        <h3>Responsabilidad Civil Total:</h3>
        <article>
          Capital de hasta 200.000€ sin franquicia para cubrir daños materiales o personales causados
          por tu perro a terceros, cumpliendo con la normativa legal vigente.
        </article>
      </li>
      <li>
        <h3>Asistencia Veterinaria Baremada:</h3>
        <article>
          Acceso preferente a una red de más de 450 clínicas en toda España con precios cerrados y 
          descuentos exclusivos en múltiples servicios de salud animal.
        </article>
      </li>
      <li>
        <h3>Protección Jurídica Especializada:</h3>
        <article>
          Hasta 6.000€ para gastos legales (abogados, tasas y peritos) con consultas telefónicas 
          ilimitadas y la primera consulta presencial gratuita en nuestra red de despachos.
        </article>
      </li>
      <li>
        <h3>Asistencia Telefónica Experta:</h3>
        <article>
          Información detallada sobre trámites de pedigrí, seguros obligatorios para razas
          específicas y toda la documentación necesaria para viajar con perros y gatos.
        </article>
      </li>
      <li>
        <h3>Bienestar y Garantía:</h3>
        <article>
          Un respaldo sólido que garantiza el cuidado integral de tu fiel compañero frente
          a cualquier imprevisto legal o sanitario en el territorio nacional.
        </article>
      </li>
    </ul>
    `
  }
]
