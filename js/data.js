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
        url: "https://lh3.googleusercontent.com/aida/ALJJyrCL8Yewpxl6xgghGxCoHSt7DhgF0OzK9sdSA5Xb4QluFC0fhmlstlby7lTbuXC6-8yGHm-1D5UezsYwMTXbmPowTApMW_PvflB0nOggenQsbsAYnnEqAZadXTEL1eu3-a93ejxXlV74BOlK_7eLnis-oyEue3_bUIk3CWv_r_RDhFYUyPCQJGizgpMdorgQmU3DTsayMIFU9S7JvXNcWIFSKMpUMZm4DwAetKV_YIzZN5cDBbsTZ7S2a8ftF2SdG5IXvdfxr-4",
        caption: "Vista exterior principal de estudio",
        alt: "Jeep Compass Limited 2025"
      },
      {
        url: "https://lh3.googleusercontent.com/aida/ALJJyrCf8_zTv1Bn_mEamfj0OfAsMUUPhDTh8tdx4GHYRSn1dwbk803eOIoJ0pHpOxi54izHrZjMYhSzVPCNc_TcH8Ke2y4kfmsNRZCpXu7McdV5pTWhhYvtpA13uAj69gu-QsNgbe4fFjnNfMJZK159js0RPYCkRarhjUJlizO_kYgR2DD8ibUe-X2M104JbgYMQb2rGRvtG3_4yl6NiBlPVMhq61Cjum-4EN6yLzvGzOJDXq9M7sRNM5WsEZabe54JPOTGxTsjEOcU9EDK",
        caption: "Interior tapizado en cuero premium",
        alt: "Interior cuero Jeep Compass"
      },
      {
        url: "https://lh3.googleusercontent.com/aida/ALJJyrAv67f7L2uGGE9GENYyPGsO47_5CJCAkZOLQE5epw6HC6PuUz7kBuwsomjgTBfXFcz0DJ6roXEaizs_kwAqHVyjAa4EknT2sSdVV4b0GzLEUfSq_y-TYQYHFqbmFQXcM87xHTBDROorkWrnlz2L0rzZoxoL4L-TgZ1MDb1NrTKTbVxh1_XhZQgngbJ4W59Cq6Ny6gn2qI0j8kVt3bq01_4t2Dj1mG1HMs3laNoo4XEZx7NZQtKiYydXprTTMy1neJDurDrAb_42vQ",
        caption: "Techo panorámico de cristal corredizo",
        alt: "Techo panorámico Jeep Compass"
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
        url: "https://lh3.googleusercontent.com/aida/ALJJyrC3YL-I9Ld4LQgVVFnwBwWpGWM_Klrp83HDI5sx6zNooaUw5WWspUTqF4Br-mm7P7pzALfkifmjrqeUD6le4D0noHzFxdHuMFllZy3aDZCHl6kxAf6Xo-7pon31EUHl4hsgaCAOMKnM7fggkgDYlD8G6Zc2va79uQztLPhnPQHgwLzvhhypNlXO4dy9u0zKHZSzGGvbgYCbH3wPK9KelmGHZqzIF7f3ToeVNVfBb0W7ct8eaYNhkZ681VFk7pr4X1I",
        caption: "Vista lateral Ford Ranger 3.2",
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
        url: "https://lh3.googleusercontent.com/aida/ALJJyrBNoWCpF4BeuKkmwGl-L-fLbwGeyReJEOr28qzYoleI9Ggjdj20L6IGQdYZdAbMJz1klR1iV3GJC1BmRNIjyl8KSy1WhIOIyqIY9T2ls_6pzZgoiJvQrWCMLTDhxuNAv5DsVSNtf6UIOwCwrA1cSNr7J517ott9uYahwlb9CuZmbSHTlV_-kA_-cJTgC6E5mmDxjCgyGNGtJzSTSxSM47zOtpsE6Jh9Q1zSao_vKHVaPzE7bx5-DtnxP86jK_RbFA",
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
        url: "https://lh3.googleusercontent.com/aida/ALJJyrBB38mNru_8BrYn2rtvxiWz8c0J2rTNqO73ttGHwQB5NfFoiqqxXciAyWonj9-hhclPBzhpt6i5Q_W4pYR_z_kwbNaHjFBxBQkL3JRv6x6P8Zznp_aSeqdsg5uQUUPvb31FDlfIB-fg8vnrK95QUurs2u5-PRz4XjcqZSBjE7lC5acP9jGpcqFp5vixMjfxzrsddIXhTwMyRfXsczIu61TZcMjtgvz5ZzRVaJrysbeJjRWeIwQSPNTF9lTFvy6heXI",
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
        url: "https://lh3.googleusercontent.com/aida/ALJJyrARKspU04EKt4qDSJ6DyUVg2_zaj8L7eZ-d8Q7UpnFqoiNa3gikA1Uk_hsTB0NoERIM-l6nL2eW5zXbTPmDrBSGnl6Qwg8s95mUApV6Jz3PCjODArpyKIeosI28IKEpG0DcHgFGuvF1NjESNmoaEX8GWZnxLC6plFIwSIu-DusB7wbbMFuOd3a2y4Xu-M5BoHVoIf1FSDIGyYbwm5aBl-eZkRkgQM0dGTyD1EUm9-2tTIYU2pwtEgKLU_cAPjNo_d24gbGZ",
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
        url: "https://lh3.googleusercontent.com/aida/ALJJyrA5Luma3zynEbacV5Re91KBJ3tFYg1da7YaOgL9xf7IAJwFIQhYKB20WsPZGATvlRbmdpofabIlWyBnvGRq9QqK2Ni7jo7G7Bk7D-N38fmg9h07sz3bSYbx5u93dcqkpcQ-Nh5JhS0XOBOvPzg8kXnKwAmNJ7I_cFgj-poPcaZb6qTD9mwnK_9mBqsQRA-MWfM4Ap6OAaN3l4MJAplzrst4SpuyGhJ0rTzFahhk8P_wMa-0hN9pfsapcKti5Q-M",
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
        url: "https://lh3.googleusercontent.com/aida/ALJJyrA5Luma3zynEbacV5Re91KBJ3tFYg1da7YaOgL9xf7IAJwFIQhYKB20WsPZGATvlRbmdpofabIlWyBnvGRq9QqK2Ni7jo7G7Bk7D-N38fmg9h07sz3bSYbx5u93dcqkpcQ-Nh5JhS0XOBOvPzg8kXnKwAmNJ7I_cFgj-poPcaZb6qTD9mwnK_9mBqsQRA-MWfM4Ap6OAaN3l4MJAplzrst4SpuyGhJ0rTzFahhk8P_wMa-0hN9pfsapcKti5Q-M",
        caption: "Fiat Toro 4x2",
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
        url: "https://lh3.googleusercontent.com/aida/ALJJyrBlEt1wpM6cDN_oqH0m3BPJpUbaPqstwWldcF9ByRmq6vY_07PCqFHt8qh1aIA97t-0SZ088Z8dyWMmMwhYUGZUFJBZXAYUfmJEBeo5xCX8HZ7b2kvaultxdecThsh7KOdJ6pUIHXqYlV-WyNDIPZEBKe6KjpwXMMvM_NXy0tlnRtD93vLplqH_Q9DcLKuBOvbNGTJ3dbe3Ph63fH5Apx-mf1Kx5-OBVXhxngnhWPNS53CmxxZ_pX2MDcwQT6M",
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
        url: "https://lh3.googleusercontent.com/aida/ALJJyrDWnJVWOI4oqYIYyuGAg8CT35Qk4IHx_r3vmPFDKdYzRV8KwO8pMJD_1aPFJKXzcArREtsoXxPTU91-OQd1hk8vgbLRNcD7q6yFyHwZ7E7trewWL5FoWBJNCD2zxfR5jPIzErU26dt6Y9l7Ye7gwNSqeuOZEEkKvNKzN2C7jFndYad-jmYfUZBM15d6Kw9ct2exU2VzGlLBNgxVsT_ql5CZ9Jqf-r3V8ffkudXyh9DQTp9sKqSZxdVFn1591FAjwpBm",
        caption: "Renault Clio Mio exterior",
        alt: "Renault Clio 2014"
      }
    ]
  }
];

// Helper para armar link de WhatsApp
function buildWhatsAppLink(vehicle, customText = "") {
  let message = "";
  if (vehicle) {
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
