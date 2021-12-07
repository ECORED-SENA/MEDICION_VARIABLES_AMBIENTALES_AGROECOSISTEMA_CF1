export default {
  global: {
    componenteFormativo:
      'Variables ambientales',
    descripcionCurso:
      'Conocer las variables ambientales de un agroecosistema con manejo agroecológico o de producción ecológica es de gran utilidad para realizar un diagnóstico en materia ambiental. Dichas variables se pueden identificar a partir de la caracterización del territorio y del análisis de fuentes de información primaria y secundaria.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Producción agropecuaria ecológica y agroecológica',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Marco normativo de la producción agropecuaria ecológica',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Sellos de alimentos ecológicos',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Territorio',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Biodiversidad',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Sintesis',
        nombreRuta: 'sintesis',
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
  referencias: [
    {
      referencia:
        'Acevedo, A. (2004). Agricultura sustentable en el trópico. La Silueta Ediciones.',
    },
    {
      referencia:
        'FAO. (2018). Los 10 elementos de la agroecología. Guía para la transición hacia sistemas alimentarios y agrícolas sostenibles. FAO. ',
      link:
        'https://www.fao.org/agroecology/overview/10-elements/es/',
    },
    {
      referencia:
        'González, H. (2018). Contexto para la planificación, gestión del desarrollo y ordenamiento territorial agropecuario. UPRA.',
    },
    {
      referencia:
        'IFOAM Organics International. (2021). Organic Word Global organic farming statistics.',
      link:
        'https://www.organic-world.net/yearbook/yearbook-2021.html.%20https://www.fibl.org/fileadmin/documents/shop/1150-organic-world-2021.pdf',
    },
    {
      referencia:
        'MinAgricultura. (2006). Normatividad Sello Ecológico. Marco normativo de la Producción Agropecuaria Ecológica.',
      link: 'https://www.minagricultura.gov.co/tramites-servicios/Paginas/Normatividad-Sello-Ecologico.aspx',
    },
    {
      referencia:
        'Sánchez, M. y Praguer, M. (2012). El suelo, su metabolismo, ciclaje de nutrientes y prácticas agroecológicas. Grupo de Investigación en Agroecología, Universidad Nacional de Colombia Sede Palmira, Colombia. Agroecología (7), p. 19-34.',
    },
    {
      referencia:
        'Unidad de Planificación Rural Agropecuaria – UPRA-. (2016). Contexto para la planificación, gestión del desarrollo y ordenamiento territorial agropecuario. MinAgricultura. ',
      link:
        'https://www.upra.gov.co/documents/10184/13821/Planificaci%C3%B3n_gesti%C3%B3n_desarrollo_OTA',
    },
  ],
  glosario: [
    {
      termino: 'Agroecología',
      significado:
        'es una disciplina científica, un conjunto de prácticas y un movimiento social. Como ciencia estudia las interacciones ecológicas de los diferentes componentes del agroecosistema; como conjunto de prácticas busca sistemas agroalimentarios sostenibles que optimicen y estabilicen la producción, y que se basen tanto en los conocimientos locales y tradicionales como en los de la ciencia moderna; y como movimiento social impulsa la multifuncionalidad de la agricultura, promueve la justicia social, nutre la identidad y la cultura, y refuerza la viabilidad económica de las zonas rurales.',
    },
    {
      termino: 'Agroecosistema',
      significado:
        'ecosistema modificado por el ser humano para fines de producción de alimentos y productos agropecuarios.',
    },
    {
      termino: 'Agricultura ecológica',
      significado:
        'sistema holístico de gestión de la producción agropecuaria, acuícola y pesquera que promueve la conservación de la biodiversidad, los ciclos biológicos y la actividad biológica del ecosistema. Esta producción se basa en la reducción de insumos externos a la exclusión de insumos de síntesis química.',
    },
    {
      termino: 'Territorio',
      significado:
        'espacio geográfico en el que una persona, grupo de personas y organizaciones económicas y sociales ejercen control y dominio.',
    },
    {
      termino: 'Variables ambientales',
      significado:
        'representación cualitativa o cuantitativa asignada a un aspecto ambiental, que permite observar algún tipo de variación al realizar la medición. El propósito de la medición es conocer la afectación o impacto de las actividades productivas del agroecosistema sobre el medio ambiente y cómo estas variables pueden afectar a otras con las que están relacionadas.',
    },
  ],
  complementario: [
    {
      texto:
        'MinAgricultura. (2006). Normatividad Sello Ecológico. Marco normativo de la Producción Agropecuaria Ecológica.',
      tipo: 'Página web',
      link: 'https://www.minagricultura.gov.co/tramites-servicios/Paginas/Normatividad-Sello-Ecologico.aspx',
    },
    {
      texto:
        'IFOAM Organics International. (2021). <i>Organic Word Global organic farming statistics.</i>',
      tipo: 'Informe',
      link: 'https://www.organic-world.net/yearbook/yearbook-2021.html.%20https://www.fibl.org/fileadmin/documents/shop/1150-organic-world-2021.pdf',
    },
    {
      texto:
        'Unidad de Planificación Rural Agropecuaria – UPRA-. (2016). Contexto para la planificación, gestión del desarrollo y ordenamiento territorial agropecuario. MinAgricultura.',
      tipo: 'Libro',
      link: 'https://www.upra.gov.co/documents/10184/13821/Planificaci%C3%B3n_gesti%C3%B3n_desarrollo_OTA',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Angélica María Franco Cañas',
        cargo: 'Experta temática - Contratista',
        centro:
          'Centro para el Desarrollo Agroecológico y Agroindustrial – Regional Atlántico (Sabanalarga)',
      },     
      {
        nombre: 'Caterine Bedoya Mejía',
        cargo: 'Diseñadora instruccional',
        centro:
          'Centro de Gestión Industrial – Regional Distrito Capital',
      },      
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },     
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },       
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Jorge Armando Villamizar Moreno',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Luis Fabian Robles Méndez',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },      
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
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
