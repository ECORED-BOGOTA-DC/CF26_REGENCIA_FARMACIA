export default {
  global: {
    componenteFormativo: 'Recepción de productos farmacéuticos',
    descripcionCurso:
      'En este componente formativo se abordan los conocimientos de la competencia "Lanzar la promoción comercial según objetivos y herramientas promocionales" para que los aprendices conozcan las herramientas necesarias para diseñar las estrategias de mercadeo y venta de los productos farmacéuticos teniendo presentes las características de estos y la normatividad legal vigente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Recepción de productos farmacéuticos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Procedimiento de recibo de productos',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Acta de recepción',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Verificación técnica',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Clasificación de defectos o niveles de aceptabilidad',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Tablas militares',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo: 'Control del proceso de inspección',
            hash: 't_1_6',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Equipos y dotación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Lectores de código de barras',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Estibas',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/331502_CF26_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Clasificación de defectos o niveles de aceptabilidad',
      referencia:
        'INVIMA. (2002). <em>Manual de normas técnicas de calidad, guía técnica de análisis</em>. INVIMA.',
      tipo: 'Documento',
      descarga: '/downloads/Anexo2_CF026_MNTC.pdf',
    },
    {
      tema: 'Verificación técnica',
      referencia:
        'Unidad Administrativa Especial de Catastro Distrital. (2011). <em>Instructivo para la elaboración de muestreo/em>. Unidad Administrativa Especial de Catastro Distrital.',
      tipo: 'Documento',
      descarga:
        '/downloads/Anexo1_CF026_instructivo_para_la_elaboracion_de_Muestreos.pdf',
    },
    {
      tema: 'Tabla militar',
      referencia:
        'Reinoso, E. (2020). Tabla militar estándar [video]. YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=HZFSSg7cx5c&ab_channel=ErubielReynoso',
    },
  ],
  glosario: [
    {
      termino: 'Ac',
      significado: 'número de aceptabilidad.',
    },
    {
      termino: 'Agrafe',
      significado:
        'pieza de metal que sirve para sujetar el cierre de botellas, frascos, etc.',
    },
    {
      termino: 'Blister',
      significado:
        'envase unitario para varios manufacturados pequeños, que consiste en un soporte de cartón o cartulina sobre la que va pegada una lámina de plástico transparente con cavidades en las que se alojan los distintos artículos.',
    },
    {
      termino: 'Compacto',
      significado:
        'cuerpo o materia que tiene una estructura apretada y poco porosa. Que está muy junto.',
    },
    {
      termino: 'Defecto',
      significado:
        'cualquier discrepancia o inconformidad de la unidad de producto con respecto a sus especificaciones.',
    },
    {
      termino: 'DSSA',
      significado: ' Dirección Seccional de Salud de Antioquia.',
    },
    {
      termino: 'EAN',
      significado:
        'siglas en inglés de Número de Artículo Europeo (European Article Number).',
    },
    {
      termino: 'Encelofanado',
      significado:
        'es un proceso de embalaje mediante el cual se unen dos capas de alufoil (papel aluminio) para crear una barrera impermeable y resistente a la luz.',
    },
    {
      termino: 'Heterodispersos',
      significado:
        'en forma farmacéutica tipo de suspensiones, es cuando no se forma una mezcla homogénea entre la parte sólida con la líquida y la apariencia es dividida.',
    },
    {
      termino: 'IAC',
      significado:
        ' Instituto Colombiano de Codificación y Automatización Comercial.',
    },
    {
      termino: 'Indeleble',
      significado: 'escrito o dibujo que no puede ser borrado.',
    },
    {
      termino: 'Inspección',
      significado:
        'es un proceso que consiste en observar, examinar, medir y comparar las características de calidad de la unidad en estudio con respecto a sus especificaciones.',
    },
    {
      termino: 'ISO',
      significado:
        'siglas en inglés para Organización Internacional de Normalización (International Organization for Standardization).',
    },
    {
      termino: 'Lote',
      significado:
        'cantidad de un producto de calidad homogénea, que se elabora en un mismo ciclo controlado de fabricación y posee un código de identificación específico.',
    },
    {
      termino: 'Muestreo probabilístico',
      significado:
        'es un método de muestreo (se refiere al estudio o el análisis de grupos pequeños de una población) que utiliza formas de métodos de selección aleatoria.',
    },
    {
      termino: 'NTC',
      significado: ' Norma Técnica Colombiana.',
    },
    {
      termino: 'Pirograbado',
      significado:
        'es una técnica de dibujo y se trata de quemar un soporte, ya sea este de papel, cartón, madera, etc., con el pirograbador marcando un dibujo sobre esa superficie.',
    },
    {
      termino: 'Polvo redisparable',
      significado:
        'deriva del comportamiento o “dispersión” de las partículas al entrar en contacto con el agua.',
    },
    {
      termino: 'Prospecto de un medicamento',
      significado:
        'es el texto que incluyen todos los medicamentos en el envase y que contiene la información para el paciente sobre las características del fármaco.',
    },
    {
      termino: 'Registro sanitario',
      significado:
        'es el documento público expedido por el Invima o la autoridad delegada, previo el procedimiento tendiente a verificar el cumplimiento de los requisitos técnicos-legales establecidos en el Decreto 677/95, el cual faculta a una persona natural o jurídica para producir, comercializar, importar, exportar, envasar, procesar y/o expender los medicamentos, cosméticos, preparaciones farmacéuticas a base de recursos naturales, productos de aseo, higiene, limpieza y otros productos de uso doméstico.',
    },
    {
      termino: 'Rotulación',
      significado:
        'es un sistema escrito utilizado para identificar y dar información sobre un producto.',
    },
    {
      termino: '<em>Sachet</em>',
      significado:
        'envase sellado de plástico flexible o papel plastificado que se usa para contener diversos líquidos, como leche o champú.',
    },
    {
      termino: 'Tiempo de vida útil',
      significado:
        'intervalo de tiempo durante el cual se espera que un medicamento almacenado correctamente mantenga las especificaciones de calidad establecidas. La vida útil se determina a través de estudios de estabilidad y sirve para establecer la fecha de expiración.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'serie de procedimientos que permiten seguir el proceso de evolución de un producto en cada una de sus etapas.',
    },
    {
      termino: 'Turbidez',
      significado:
        'medida del grado de transparencia del agua que va perdiéndose por la presencia de partículas en suspensión.',
    },
  ],
  referencias: [
    {
      referencia:
        'Ar Racking. (2020). <em>Tipos de estibas y características</em>. Ar Racking.',
      link:
        'https://www.ar-racking.com/co/actualidad/blog/calidad-y-seguridad-4/tipos-de-estibas-y-caracteristicas',
    },
    {
      referencia:
        'Capitalcolombia.com. (s.f.). <em>¿Qué es el código de barras?</em> Capitalcolombia.com.',
      link:
        'https://www.capitalcolombia.com/articulo/informacion_que_es_codigo_de_barras',
    },
    {
      referencia:
        'INVIMA. (2002). <em>Manual de normas técnicas de calidad, guía técnica de análisis</em>. INVIMA.',
      link: '',
    },
    {
      referencia:
        'Resolución 1403 de 2007. [Ministerio de la Protección Social]. Por la cual se determina el modelo de gestión del servicio farmacéutico, se adopta el manual de condiciones esenciales y procedimientos de dicho servicio y se dictan otras disposiciones. Mayo 14 de 2007.',
      link: '',
    },
    {
      referencia:
        'Semana.com. (2014). <em>10 beneficios del código de barras</em>. Semana.com.',
      link:
        'https://www.semana.com/empresas/articulo/para-que-sirve-codigo-barras/202025/',
    },
    {
      referencia:
        'Unidad Administrativa Especial de Catastro Distrital. (2011). <em>Instructivo para la elaboración de muestreo</em>. Ideca.',
      link:
        'https://www.ideca.gov.co/sites/default/files/documentacion/instructivoparalaelaboraciondemuestreos11.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lina Marcela Ayala Pardo',
          cargo: 'Experta temática',
          centro: 'Regional Antioquia - Centro de Servicios de Salud',
        },
        {
          nombre: 'Gustavo Santis Mancipe',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora metodológica y pedagógica',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo desarrollo curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Correctora de estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Gloria Lida Alzáte Suárez',
          cargo: 'Adecuación instruccional',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Adriana Marcela Suárez Eljure',
          cargo: 'Diseño web',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollo Fullstack',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo:
            'Validación de recursos educativos digitales y vinculación al LMS',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
