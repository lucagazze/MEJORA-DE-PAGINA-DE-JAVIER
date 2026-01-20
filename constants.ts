import { Testimonial, Benefit } from './types';

export const IMAGES = {
  javier: "https://omnidental.es/wp-content/uploads/2025/01/javierBN.jpg",
  logoIvoria: "https://omnidental.es/wp-content/uploads/2025/03/logo-color-oscuro.svg",
  logoSanchezA: "https://omnidental.es/wp-content/uploads/2025/01/logo-4.png",
  logoDentalEstetic: "https://omnidental.es/wp-content/uploads/2025/01/logo-dental-estetic.png",
  placeholder: "https://picsum.photos/600/400"
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'barrientos',
    clinicName: 'Clínica Barrientos Menéndez',
    headline: '+ 2X facturación en tres meses',
    quote: "Con Omnidental hemos duplicado la facturación respecto al trimestre anterior. Sesenta primeras visitas en tres meses. Teníamos una agencia antes que solo nos dio 2 pacientes en 3 meses.",
    videoUrl: "https://player.vimeo.com/video/1078317594",
    result: "2X facturación",
    treatment: "Implantes",
    date: "01/2025",
    logoUrl: "https://omnidental.es/wp-content/uploads/2025/04/logo.webp",
    photoUrl: "https://omnidental.es/wp-content/uploads/2025/04/67b35689939d7.jpeg"
  },
  {
    id: 'stardental',
    clinicName: 'Clínica Star Dental',
    headline: 'Aumento significativo de primeras visitas',
    quote: "Ha aumentado el número de primeras visitas en la clínica y estoy muy contenta con el servicio. Todo el equipo hace un trabajo extraordinario.",
    videoUrl: "https://omnidental.es/wp-content/uploads/2025/10/testimonio-Star-dental-V2-1.mp4",
    result: "Aumento primeras visitas",
    treatment: "Implantes",
    date: "01/2025",
  },
  {
    id: 'ivoria',
    clinicName: 'Clínica Ivoria',
    headline: '+ 31.000 euros en 45 días',
    quote: "Con Omnidental hemos logrado facturar 31.000 euros adicionales a nuestra facturación habitual en el mes y medio que llevamos trabajando con ellos.",
    videoUrl: "https://player.vimeo.com/video/1072545158",
    result: "+31.000€ en 45 días",
    treatment: "Implantes",
    date: "11/2024",
    logoUrl: IMAGES.logoIvoria,
    photoUrl: "https://omnidental.es/wp-content/uploads/2025/03/dental-chamartin-entrada-1024x683.webp"
  },
  {
    id: 'baste',
    clinicName: 'Centro Dental Basté',
    headline: 'Captación automática de pacientes',
    quote: "Es real y entran casos. Se monetiza. Entran rehabilitaciones. Hemos creado un sistema que casi no lo tenemos que tocar.",
    videoUrl: "https://player.vimeo.com/video/934345465",
    result: "Pacientes implantes customizados",
    treatment: "Implantes",
    date: "04/2023",
  },
  {
    id: 'dentalstar',
    clinicName: 'Clínica Dental Star Huelva',
    headline: '+55.000€ en 5 semanas',
    quote: "Mi clínica personalmente, ha dado un giro brutal. Tenemos agendas de 13 o 15 primeras visitas diarias. Ha sido el punto clave que necesitábamos.",
    videoUrl: "https://player.vimeo.com/video/801993341",
    result: "+55.000€ en 5 semanas",
    treatment: "Implantes",
    date: "01/2023",
    photoUrl: "https://omnidental.es/wp-content/uploads/2025/01/dentalstar-qicpsgaf763py50std7gle2yrdzu94i4tnia7a4cu8.jpg"
  },
  {
    id: 'carranza',
    clinicName: 'Clínica Dental Carranza',
    headline: '+ 47.000€ en 5 semanas',
    quote: "El primer mes hemos conseguido los objetivos con creces, 100% satisfechos. Me reportáis primeras visitas que es exactamente lo que yo quería.",
    videoUrl: "https://player.vimeo.com/video/723482011",
    result: "+47.000€ en 5 semanas",
    treatment: "Implantes",
    date: "05/2022",
  },
  {
    id: 'sanchez',
    clinicName: 'Clínica Sánchez Arranz',
    headline: '+ 4 Pacientes Implantes en 5 semanas',
    quote: "Nos ha subido muchísimo el trabajo. La facilidad que te da el hecho de recibir pacientes y de ya saber a qué vienen es increíble.",
    videoUrl: "https://player.vimeo.com/video/889234237",
    result: "+ 4 pacientes implantes",
    treatment: "Implantes y Carillas",
    date: "05/2023",
    logoUrl: IMAGES.logoSanchezA
  },
  {
    id: 'shine',
    clinicName: 'Dental Shine',
    headline: '+ 60 Oportunidades Implantes en 12 semanas',
    quote: "Lo que han conseguido ha sido SOBRESALIENTE... BRUTAL. Si tuviese que poner las 5 estrellas os las pondría.",
    videoUrl: "https://player.vimeo.com/video/765035578",
    result: "+60 Primeras Implantes",
    treatment: "Implantes",
    date: "09/2022",
  },
  {
    id: 'garcia',
    clinicName: 'García Marí',
    headline: '+ 47.000€ en 7 semanas',
    quote: "Estamos pensando en contratar gente porque estamos desbordados. Es una buena señal evidentemente. Más o menos ha habido 60 primeras visitas de implantes.",
    videoUrl: "https://player.vimeo.com/video/620112926",
    result: "+47.000€ en 7 semanas",
    treatment: "Implantes",
    date: "07/2021"
  },
  {
    id: 'home',
    clinicName: 'Clínica Dental Home',
    headline: '+ 31.000€ en 8 semanas',
    quote: "El número de pacientes en implantología ha crecido mucho. Esto es algo muy bueno para la clínica ya que las primeras visitas y los tratamientos están funcionando bastante bien.",
    videoUrl: "https://player.vimeo.com/video/801996841",
    result: "+31.000€ en 8 semanas",
    treatment: "Implantes",
    date: "10/2022"
  },
  {
    id: 'merida',
    clinicName: 'DentalEstetic Mérida',
    headline: '+ 43.000€ en 6 semanas',
    quote: "En las primeras 6 semanas hemos cerrado en euros unos 43.000€ aproximadamente. Yo lo que le diría a una clínica dental que esté en dudas y demás es que Omni Dental es de fiar.",
    videoUrl: "https://player.vimeo.com/video/540721322",
    result: "+43.000€ en 6 semanas",
    treatment: "Implantes",
    date: "11/2020"
  },
  {
    id: 'smilecare',
    clinicName: 'SmileCare',
    headline: '+ 10 nuevos Tratamientos de implantes',
    quote: "De verdad que sí hemos tenido muchos pacientes nuevos que hemos captado y que hemos podido materializar. Sobre todo trabajamos con la parte de implantes.",
    videoUrl: "https://player.vimeo.com/video/646829695",
    result: "Aumento tratamientos Implantes",
    treatment: "Implantes y Ortodoncia",
    date: "03/2021"
  },
  {
    id: 'odontoclinic',
    clinicName: 'OdontoClinic',
    headline: '+ 10 pacientes en 4 semanas',
    quote: "Nos sorprendieron muchísimo los resultados. La facturación de la clínica ha subido mucho. Cada día tenemos de 4 a 7 primeras visitas.",
    videoUrl: "https://player.vimeo.com/video/540963406",
    result: "+10 pacientes en 4 semanas",
    treatment: "Cirugía, Implantes",
    date: "06/2020"
  },
  {
    id: 'palomero',
    clinicName: 'Clínica Dental Palomero',
    headline: '+ 35.000€ en 6 semanas',
    quote: "Hemos tenido 21 primeras visitas... Hemos convertido por ahora 4 pacientes de esas 21 primeras visitas, y nos ha supuesto una facturación de 35.000€.",
    videoUrl: "https://player.vimeo.com/video/540962928",
    result: "+35.000€ en 6 semanas",
    treatment: "Implantes",
    date: "03/2021"
  },
  {
    id: 'alonso',
    clinicName: 'Clínica Dental Dr. Alonso',
    headline: '+ 200% facturación en 8 semanas',
    quote: "En el primer mes ingresé unos 12 o 14 pacientes nuevos con este método y calculo que nuestra facturación ha subido un 200%.",
    videoUrl: "https://player.vimeo.com/video/553567947",
    result: "+200% facturación",
    treatment: "Implantes",
    date: "02/2021"
  },
  {
    id: 'lucas',
    clinicName: 'Clínica Dr. Lucas Carrasco',
    headline: '2X facturación en 6 semanas',
    quote: "Sinceramente, de verdad te lo digo, he duplicado la facturación. Muchas veces en la vida hay que arriesgarse.",
    videoUrl: "https://player.vimeo.com/video/556912899",
    result: "Doblar facturación en 6 semanas",
    treatment: "Implantes",
    date: "04/2021"
  },
  {
    id: 'badajoz',
    clinicName: 'Clínica DentalEstetic Badajoz',
    headline: '+ 45.000€ ingresados en 8 semanas',
    quote: "Son 2 meses y medio y no exagero si digo que ha habido + de un 40% de oportunidades de venta gracias a Omni.",
    videoUrl: "https://player.vimeo.com/video/556223788",
    result: "+45.000€ en 8 semanas",
    treatment: "Implantes",
    date: "12/2020"
  },
  {
    id: 'peopledent',
    clinicName: 'Centro Dental PeopleDent',
    headline: '+ 42 primeras visitas en 2 semanas',
    quote: "42 primeras visitas agendadas en 2 semanas. Los resultados han sido extraordinarios.",
    videoUrl: "https://player.vimeo.com/video/540963796",
    result: "+42 primeras visitas",
    treatment: "Implantes",
    date: "06/2020"
  },
  {
    id: 'marisol',
    clinicName: 'Clínica Dentalife. Dra. Marisol',
    headline: '+ 14 primeras visitas en 2 semanas',
    quote: "14 primeras visitas en 2 semanas con Omni Dental. 2 pacientes cerrados con una facturación de 22.000€.",
    videoUrl: "https://omnidental.es/wp-content/uploads/2025/01/marisol-1.jpg", 
    result: "+22.000€ facturación",
    treatment: "Implantes",
    date: "06/2020",
    photoUrl: "https://omnidental.es/wp-content/uploads/2025/01/marisol-1.jpg"
  }
];

export const PAIN_POINTS: Benefit = {
  title: "DI ADIÓS A:",
  type: 'pain',
  items: [
    "Leads falsos que no responden a tus llamadas.",
    "Despilfarrar dinero en marketing inefectivo.",
    "Falsas promesas.",
    "Leads de baja calidad.",
    "Leads compartidos."
  ]
};

export const GAIN_POINTS: Benefit = {
  title: "ESTO ES LO QUE HACEMOS:",
  type: 'gain',
  items: [
    "Pacientes potenciales de Implantes y Ortodoncia de alta calidad.",
    "Convertimos esos contactos en citas en tu calendario.",
    "Mayor exposición en tu zona frente a tus competidores.",
    "Nuestro trabajo es poner a los pacientes en la puerta.",
    "Tu trabajo es recibirlos y realizar el tratamiento."
  ]
};

export const SERVICES: Benefit = {
  title: "¿QUÉ OFRECEMOS?",
  type: 'gain',
  items: [
    "Te Conseguimos Primeras Visitas de Implantes y Ortodoncia.",
    "Appointment setter exclusivo para ti.",
    "Calculadora de ROI en tiempo real.",
    "Software de gestión de citas y leads.",
    "Gestor de cuentas dedicado y soporte ilimitado.",
    "Automatizaciones: recordatorios, seguimientos, etc.",
    "Formación en ventas y gestión clínica."
  ]
};