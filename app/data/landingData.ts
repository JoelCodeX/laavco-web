export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  imagePath: string;
}

export interface EquipmentItem {
  id: string;
  title: string;
  specs: string[];
  imagePath: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  imagePath: string;
}

export interface ClientItem {
  id: string;
  name: string;
  logoPath: string;
}

export const landingData = {
  // Barra de utilidades superior
  topBar: {
    phone: "901 884 606",
    email: "servicioslaavco@gmail.com",
    socials: {
      facebook: "https://web.facebook.com/LAAVCOMYM/about?locale=es_LA",
      tiktok: "https://www.tiktok.com/@laavco.pe?is_from_webapp=1&sender_device=pc",
    }
  },

  // Barra de navegación
  navigation: {
    logoName: "LAAVCO",
    logoSubtitle: "CONSTRUCCIONES & SERVICIOS GENERALES",
    logoImage: "/images/logo.png",
    links: [
      { label: "Inicio", href: "#inicio" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Servicios", href: "#servicios" },
      { label: "Equipos", href: "#equipos" },
      { label: "Proyectos", href: "#proyectos" },
      { label: "Contacto", href: "#contacto" },
    ],
    ctaButton: {
      label: "COTIZAR AHORA",
      href: "https://wa.me/51901884606?text=Hola,%20quisiera%20solicitar%20una%20cotizaci%C3%B3n."
    }
  },

  // Sección Hero
  hero: {
    title: "SOLUCIONES INTEGRALES EN CONSTRUCCIÓN, METALMECÁNICA Y ALQUILER DE EQUIPOS PARA TRABAJOS EN ALTURA.",
    subtitle: "Seguridad, calidad y compromiso en cada proyecto.",
    backgroundImage: "/images/hero-bg.jpg", // Ruta de imagen editable por el usuario
    primaryCta: {
      label: "WHATSAPP",
      href: "https://wa.me/51901884606?text=Hola,%20deseo%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios."
    },
    secondaryCta: {
      label: "SOLICITAR COTIZACIÓN",
      href: "#contacto"
    }
  },

  // Barra de estadísticas / pilares (debajo del hero)
  stats: [
    {
      id: "stat-1",
      title: "Equipos certificados",
      description: "y en óptimas condiciones",
      iconName: "shield"
    },
    {
      id: "stat-2",
      title: "Personal capacitado",
      description: "y calificado",
      iconName: "user"
    },
    {
      id: "stat-3",
      title: "Cobertura nacional",
      description: "a nivel Perú",
      iconName: "globe"
    },
    {
      id: "stat-4",
      title: "Atención rápida",
      description: "y personalizada",
      iconName: "phone"
    }
  ],

  // Sección de Servicios
  servicesSection: {
    tag: "NUESTROS SERVICIOS",
    title: "Soluciones para cada necesidad",
    items: [
      {
        id: "srv-1",
        title: "Construcción Civil",
        description: "Ejecución de obras civiles con altos estándares de calidad.",
        iconName: "building",
        imagePath: "/servicios/construccion-civil.jpg"
      },
      {
        id: "srv-2",
        title: "Metalmecánica",
        description: "Fabricación y montaje de estructuras metálicas y proyectos industriales.",
        iconName: "wrench",
        imagePath: "/servicios/metalmecanica.jpg"
      },
      {
        id: "srv-3",
        title: "Electricidad Industrial",
        description: "Instalaciones eléctricas en media y baja tensión, tableros y más.",
        iconName: "bolt",
        imagePath: "/servicios/electricidad-industrial.jpg"
      },
      {
        id: "srv-4",
        title: "Diseño 3D y Estructural",
        description: "Modelado en 3D, planos de ingeniería de detalle y diseño de estructuras.",
        iconName: "design",
        imagePath: "/servicios/diseno-3d.jpg"
      },
      {
        id: "srv-5",
        title: "Alquiler de Equipos de Elevación",
        description: "Equipos modernos para trabajos en altura y carga pesada.",
        iconName: "crane",
        imagePath: "/servicios/alquiler-equipos.jpg"
      },
      {
        id: "srv-6",
        title: "Mantenimiento Industrial",
        description: "Mantenimiento preventivo y correctivo en plantas e instalaciones.",
        iconName: "settings",
        imagePath: "/servicios/mantenimiento-industrial.jpg"
      }
    ] as ServiceItem[]
  },

  // Sección de Equipos en Alquiler
  equipmentSection: {
    tag: "ALQUILER DE EQUIPOS",
    title: "Equipos modernos y seguros",
    items: [
      {
        id: "eq-1",
        title: "Elevador Tijera Eléctrico",
        specs: [
          "Altura máx. 12 m",
          "Capacidad 320 kg",
          "Uso interior/exterior"
        ],
        imagePath: "equipos/elevador.png"
      },
      {
        id: "eq-2",
        title: "Arnés de Seguridad",
        specs: [
          "Máxima protección en altura",
          "Materiales certificados",
          "Comodidad y ajuste ergonómico"
        ],
        imagePath: "equipos/arnes.png"
      },
      {
        id: "eq-3",
        title: "Manlift Articulado",
        specs: [
          "Altura máx. 16 m",
          "Alcance horizontal 7.5 m",
          "Ideal para accesos difíciles"
        ],
        imagePath: "equipos/manlift-articulado.jpg"
      },
      {
        id: "eq-4",
        title: "Camión Grúa",
        specs: [
          "Izaje y traslado de cargas pesadas",
          "Alcance y precisión garantizada",
          "Operadores calificados"
        ],
        imagePath: "equipos/grua.png"
      },
      {
        id: "eq-5",
        title: "Escalera Telescópica",
        specs: [
          "Altura ajustable",
          "Ligera y fácil de transportar",
          "Seguridad garantizada"
        ],
        imagePath: "equipos/escalera.png"
      }
    ] as EquipmentItem[]
  },

  // Sección ¿Por Qué Elegirnos?
  whyChooseUsSection: {
    tag: "¿POR QUÉ ELEGIRNOS?",
    title: "Tu proyecto en las mejores manos",
    items: [
      {
        id: "wcu-1",
        title: "Experiencia",
        description: "Años de experiencia ejecutando proyectos de gran envergadura.",
        iconName: "award"
      },
      {
        id: "wcu-2",
        title: "Equipos Certificados",
        description: "Equipos modernos, revisados y certificados para tu seguridad.",
        iconName: "shieldCheck"
      },
      {
        id: "wcu-3",
        title: "Personal Capacitado",
        description: "Profesionales y técnicos altamente capacitados y comprometidos.",
        iconName: "users"
      },
      {
        id: "wcu-4",
        title: "Seguridad Garantizada",
        description: "Cumplimos con todas las normas de seguridad y calidad.",
        iconName: "shieldAlert"
      },
      {
        id: "wcu-5",
        title: "Atención Personalizada",
        description: "Asesoría y soluciones a la medida de tus necesidades.",
        iconName: "headset"
      }
    ] as WhyChooseUsItem[]
  },

  // Sección de Proyectos Realizados
  projectsSection: {
    tag: "PROYECTOS REALIZADOS",
    title: "Confianza que construye resultados",
    buttonLabel: "VER TODOS LOS PROYECTOS",
    items: [
      {
        id: "proj-1",
        title: "Estructuras de Acero en Planta Industrial",
        category: "Metalmecánica",
        imagePath: "/images/proyectos/proyecto1.jpg"
      },
      {
        id: "proj-2",
        title: "Montaje Mecánico Minero",
        category: "Construcción",
        imagePath: "/images/proyectos/proyecto2.jpg"
      },
      {
        id: "proj-3",
        title: "Nave Industrial y Soporte Técnico",
        category: "Metalmecánica",
        imagePath: "/images/proyectos/proyecto3.jpg"
      },
      {
        id: "proj-4",
        title: "Diseño y Modelado Estructural de Naves Industriales",
        category: "Diseño 3D",
        imagePath: "/images/proyectos/proyecto4.jpg"
      },
      {
        id: "proj-5",
        title: "Tableros de Control de Alta Tensión",
        category: "Electricidad",
        imagePath: "/images/proyectos/proyecto5.jpg"
      },
      {
        id: "proj-6",
        title: "Mantenimiento Estructural Químico",
        category: "Mantenimiento",
        imagePath: "/images/proyectos/proyecto6.jpg"
      }
    ] as ProjectItem[]
  },

  // Sección de Clientes / Marcas que confían
  clientsSection: {
    tag: "EMPRESAS QUE CONFÍAN EN NOSOTROS",
    items: [
      { id: "cli-1", name: "AGROVEX", logoPath: "/clientes/agrovex.png" },
      { id: "cli-2", name: "CARTAVIO", logoPath: "/clientes/cartavio.png" },
      { id: "cli-3", name: "CHIMÚ", logoPath: "/clientes/chimu.png" },
      { id: "cli-4", name: "CUMMINS", logoPath: "/clientes/cummins.png" },
      { id: "cli-5", name: "TAMBO", logoPath: "/clientes/tambo.png" }
    ] as ClientItem[]
  },

  // Datos del Footer / Formulario / Info de Contacto
  footer: {
    ctaBox: {
      title: "¿TIENES UN PROYECTO EN MENTE?",
      subtitle: "Contáctanos y recibe una cotización personalizada.",
      whatsappBtn: {
        label: "WHATSAPP",
        href: "https://wa.me/51987654321?text=Hola,%20quisiera%20cotizar%20un%20proyecto."
      }
    },
    contactInfo: {
      title: "Contáctanos",
      phone: "901 884 606",
      email: "servicioslaavco@gmail.com",
      address: "Trujillo, Perú",
      website: "www.laavco.com"
    },
    form: {
      title: "Envíanos un mensaje",
      fields: {
        namePlaceholder: "Nombre completo",
        emailPlaceholder: "Correo electrónico",
        messagePlaceholder: "Mensaje"
      },
      submitBtnLabel: "ENVIAR MENSAJE"
    },
    socialsTitle: "Síguenos",
    copyright: `© ${new Date().getFullYear()} LAAVCO Servicios Generales. Todos los derechos reservados.`
  }
};
