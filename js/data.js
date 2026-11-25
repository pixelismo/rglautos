// Catálogo oficial de datos para RGL Cars Automotores (Río Gallegos, Santa Cruz)
// Datos estrictos según alcance solicitado: sin inventar precios.

const RGL_WHATSAPP_NUMBER = "5492966680024";
const RGL_WHATSAPP_DISPLAY = "2966-680024";

const VEHICLES_DATA = [
  {
    id: "jeep-compass-limited-2025",
    brand: "Jeep",
    model: "Compass",
    version: "Limited 1.3 Turbo AT6",
    year: 2025,
    km: 11293,
    kmDisplay: "~11.293 km",
    engine: "1.3 Turbo T270 (175 CV)",
    transmission: "Automática 6 velocidades",
    fuel: "Nafta",
    drivetrain: "Tracción delantera 4x2",
    color: "Gris Grafito Perlado",
    priceType: "consultar", // 'consultar' | 'desde' | 'entrega'
    priceDisplay: "Consultar",
    priceNote: "Precio y condiciones especiales a consultar con nuestros asesores comerciales.",
    featured: true,
    badges: ["Nuevo ingreso", "Venta online"],
    highlights: [
      "Tapizado de cuero bi-tono de fábrica",
      "Techo solar panorámico corredizo doble panel",
      "Central multimedia Uconnect 10.1\" con Apple CarPlay y Android Auto inalámbrico",
      "Asistencias avanzadas a la conducción (ADAS) y control crucero adaptativo",
      "Garantía oficial vigente e historial de mantenimiento verificado"
    ],
    images: [
      {
        url: "ims/jeep_compass_ext.jpg",
        caption: "Vista exterior principal",
        alt: "Jeep Compass Limited 2025"
      },
      {
        url: "ims/jeep_compass_int.jpg",
        caption: "Interior tapizado en cuero premium",
        alt: "Interior cuero Jeep Compass"
      },
      {
        url: "ims/jeep_compass_rear.jpg",
        caption: "Vista posterior y detalles",
        alt: "Jeep Compass vista posterior"
      },
      {
        url: "ims/Vehicle_driving_on_snowy_road_412c06cd_2K.jpg",
        caption: "En ruta patagónica con nieve",
        alt: "Jeep en ruta patagónica"
      }
    ]
  },
  {
    id: "ford-ranger-4x2-2020",
    brand: "Ford",
    model: "Ranger",
    version: "4x2 3.2 TDCi",
    year: 2020,
    km: 99000,
    kmDisplay: "99.000 km",
    engine: "3.2 TDCi Puma 5 Cilindros (200 CV)",
    transmission: "Manual 6 velocidades",
    fuel: "Diésel",
    drivetrain: "Tracción trasera 4x2",
    color: "Blanco Oxford",
    priceType: "consultar",
    priceDisplay: "Consultar",
    priceNote: "Consultá por opciones de permuta o financiamiento personalizado.",
    featured: true,
    badges: ["Venta online"],
    highlights: [
      "Motor 3.2 de 5 cilindros con excelente torque para carga y ruta",
      "Control electrónico de estabilidad y de tracción (ESP/TCS)",
      "Caja de carga con cobertor plástico y lona marítima",
      "Estribos laterales y barra de protección posterior"
    ],
    images: [
      {
        url: "ims/ford_ranger_ext.jpg",
        caption: "Vista exterior Ford Ranger 3.2",
        alt: "Ford Ranger 4x2 3.2 2020"
      }
    ]
  },
  {
    id: "fiat-palio-essence-2016",
    brand: "Fiat",
    model: "Palio",
    version: "Essence 1.6 16v",
    year: 2016,
    km: 130000,
    kmDisplay: "130.000 km",
    engine: "1.6 16v E-torQ (115 CV)",
    transmission: "Manual 5 velocidades",
    fuel: "Nafta",
    drivetrain: "Tracción delantera",
    color: "Rojo Alpino",
    priceType: "desde",
    priceDisplay: "Desde $15.000.000",
    priceNote: "Financiación hasta 100% con Banco Nación en cuotas fijas o UVA.",
    featured: true,
    badges: ["Financiación 100% BNA", "Venta online"],
    highlights: [
      "Financiación total hasta el 100% disponible con Banco Nación",
      "Climatizador, dirección asistida y levantavidrios eléctricos",
      "Llantas de aleación originales y faros antiniebla",
      "Mantenimiento al día, listo para transferir en Río Gallegos"
    ],
    images: [
      {
        url: "ims/fiat_palio_ext.jpg",
        caption: "Fiat Palio Essence perfil exterior",
        alt: "Fiat Palio Essence 2016"
      }
    ]
  },
  {
    id: "peugeot-208-2016",
    brand: "Peugeot",
    model: "208",
    version: "Allure / Feline 1.6 VTi",
    year: 2016,
    km: 110000,
    kmDisplay: "110.000 km",
    engine: "1.6 VTi 16v (115 CV)",
    transmission: "Manual 5 velocidades",
    fuel: "Nafta",
    drivetrain: "Tracción delantera",
    color: "Gris Shark Metalizado",
    priceType: "desde",
    priceDisplay: "Desde $14.800.000",
    priceNote: "Financiación hasta 100% con Banco Nación.",
    featured: true,
    badges: ["Financiación 100% BNA"],
    highlights: [
      "Techo panorámico cielo con iluminación LED de ambiente",
      "Pantalla multimedia táctil con conectividad y mandos al volante",
      "Excelente confort de marcha y consumo contenido",
      "Financiable 100% a través de convenio Banco Nación"
    ],
    images: [
      {
        url: "ims/peugeot_208_ext.jpg",
        caption: "Peugeot 208 vista exterior",
        alt: "Peugeot 208 2016"
      }
    ]
  },
  {
    id: "chevrolet-tracker-4x4-2016",
    brand: "Chevrolet",
    model: "Tracker",
    version: "LTZ+ 4x4 AT",
    year: 2016,
    km: 90000,
    kmDisplay: "90.000 km",
    engine: "1.8 16v Ecotec (140 CV)",
    transmission: "Automática secuencial 6 vel.",
    fuel: "Nafta",
    drivetrain: "Tracción integral 4x4 AWD",
    color: "Azul Patagonia Oscuro",
    priceType: "entrega",
    priceDisplay: "Entrega $12–13M",
    priceNote: "Seña / Entrega inicial. El saldo restante se financia en cuotas con Banco Nación.",
    featured: true,
    badges: ["Venta online", "Tracción 4x4"],
    highlights: [
      "Tracción integral AWD automática ideal para clima patagónico",
      "Tapizado de cuero y techo solar corredizo eléctrico",
      "Cámara y sensores de estacionamiento con pantalla MyLink",
      "Excelente balance de entrega inicial y saldo en cuotas BNA"
    ],
    images: [
      {
        url: "ims/chevrolet_tracker_ext.jpg",
        caption: "Chevrolet Tracker en entorno patagónico",
        alt: "Chevrolet Tracker 4x4 AT 2016"
      }
    ]
  },
  {
    id: "fiat-toro-freedom-at-2020",
    brand: "Fiat",
    model: "Toro",
    version: "Freedom 1.8 AT6",
    year: 2020,
    km: null,
    kmDisplay: "Consultar km",
    engine: "1.8 e-TorQ Evo (130 CV)",
    transmission: "Automática 6 velocidades",
    fuel: "Nafta",
    drivetrain: "Tracción 4x2 delantera",
    color: "Bordeaux Metalizado",
    priceType: "consultar",
    priceDisplay: "Consultar",
    priceNote: "Unidad recién ingresada al salón. Consultá disponibilidad para verla hoy.",
    featured: false,
    badges: ["Nuevo ingreso"],
    highlights: [
      "Caja automática de 6 velocidades con levas al volante",
      "Climatizador automático bi-zona y pantalla táctil con cámara",
      "Llantas de aleación de 17 pulgadas y capota marítima trasera",
      "Excelente estado general y andar suave de SUV con capacidad de pickup"
    ],
    images: [
      {
        url: "ims/fiat_toro_ext.jpg",
        caption: "Fiat Toro Freedom perfil exterior",
        alt: "Fiat Toro Freedom 1.8 AT 2020"
      }
    ]
  },
  {
    id: "fiat-toro-manual-2018",
    brand: "Fiat",
    model: "Toro",
    version: "Freedom 4x2 Manual",
    year: 2018,
    km: 93000,
    kmDisplay: "93.000 km",
    engine: "1.8 e-TorQ Evo (130 CV)",
    transmission: "Manual 6 velocidades",
    fuel: "Nafta",
    drivetrain: "Tracción 4x2 delantera",
    color: "Blanco Ambiente",
    priceType: "entrega",
    priceDisplay: "Entrega $10–11M",
    priceNote: "Seña / Entrega inicial ($10M a $11M). El resto se abona financiado mediante Banco Nación.",
    featured: false,
    badges: ["Financiación BNA"],
    highlights: [
      "Opción económica con entrega accesible y saldo en cuotas BNA",
      "Caja manual de 6 velocidades para óptimo consumo en ruta",
      "Sensores traseros con cámara de asistencia al estacionamiento",
      "Documentación completa al día en el registro de Río Gallegos"
    ],
    images: [
      {
        url: "ims/fiat_toro_manual.jpg",
        caption: "Fiat Toro 4x2 manual",
        alt: "Fiat Toro 4x2 manual 2018"
      }
    ]
  },
  {
    id: "vw-suran-2017",
    brand: "Volkswagen",
    model: "Suran",
    version: "Highline 1.6 MSI",
    year: 2017,
    km: 100000,
    kmDisplay: "100.000 km",
    engine: "1.6 16v MSI (110 CV)",
    transmission: "Manual 6 velocidades",
    fuel: "Nafta",
    drivetrain: "Tracción delantera",
    color: "Plata Reflex",
    priceType: "entrega",
    priceDisplay: "Entrega $10M",
    priceNote: "Seña / Entrega inicial ($10M). El saldo restante se cancela con crédito Banco Nación.",
    featured: false,
    badges: ["Financiación BNA"],
    highlights: [
      "Insuperable espacio de habitáculo y baúl familiar modulable",
      "Motor 1.6 MSI con caja manual de 6 marchas",
      "Control de estabilidad (ESP), control de crucero y sensores de lluvia",
      "Entrega inicial de $10M y saldo financiado a tasa accesible"
    ],
    images: [
      {
        url: "ims/vw_suran_ext.jpg",
        caption: "Volkswagen Suran exterior",
        alt: "VW Suran 2017"
      }
    ]
  },
  {
    id: "renault-clio-2014",
    brand: "Renault",
    model: "Clio",
    version: "Mio Confort Plus 1.2",
    year: 2014,
    km: null,
    kmDisplay: "Consultar km",
    engine: "1.2 16v (75 CV)",
    transmission: "Manual 5 velocidades",
    fuel: "Nafta",
    drivetrain: "Tracción delantera",
    color: "Gris Estrella",
    priceType: "entrega",
    priceDisplay: "Entrega $5–7M",
    priceNote: "Seña / Entrega inicial ($5M a $7M). El saldo se liquida financiado con Banco Nación.",
    featured: false,
    badges: ["Financiación BNA", "Económico"],
    highlights: [
      "El valor de entrada más accesible: entrega desde $5M a $7M",
      "Motor 1.2 de consumo súper reducido y repuestos muy accesibles",
      "Aire acondicionado, dirección asistida y cierre centralizado",
      "Ideal como primer auto o movilidad diaria confiable en la ciudad"
    ],
    images: [
      {
        url: "ims/renault_clio_ext.jpg",
        caption: "Renault Clio Mio exterior",
        alt: "Renault Clio 2014"
      }
    ]
  }
];

// Helper para armar link de WhatsApp
const BANK_RATES_DATA = [
  { id: "bna", name: "Banco Nación", rate: 46, note: "Tasa general préstamos personales / prendarios" },
  { id: "bna-cliente", name: "Banco Nación (Cliente)", rate: 36, note: "Tasa preferencial para haberes en BNA" },
  { id: "frances", name: "BBVA Francés", rate: 42, note: "Prendario prendario automotores" },
  { id: "santander", name: "Banco Santander", rate: 47, note: "Crédito automotor cuota fija" },
  { id: "santacruz", name: "Banco Santa Cruz", rate: 47, note: "Línea provincial Santa Cruz" }
];

function buildWhatsAppLink(vehicle, customText = "") {
  let message = "";
  if (customText) {
    message = customText;
  } else if (vehicle) {
    message = `Hola RGL Cars! Me interesa consultar por el ${vehicle.brand} ${vehicle.model} ${vehicle.version} (${vehicle.year}) que vi en su web. ¿Sigue disponible?`;
    if (vehicle.priceType === 'entrega') {
      message += ` Quisiera saber más sobre la entrega de ${vehicle.priceDisplay} y la financiación con Banco Nación.`;
    } else if (vehicle.priceType === 'consultar') {
      message += ` Quisiera consultar el precio y condiciones de entrega/permuta.`;
    }
  } else if (customText) {
    message = customText;
  } else {
    message = "Hola RGL Cars! Me gustaría recibir información sobre su catálogo de autos y financiación con Banco Nación en Río Gallegos.";
  }
  return `https://wa.me/${RGL_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
