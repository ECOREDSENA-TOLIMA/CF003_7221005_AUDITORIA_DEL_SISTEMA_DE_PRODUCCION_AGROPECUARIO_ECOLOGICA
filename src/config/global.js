export default {
  global: {
    componenteFormativo: 'Ejecución de auditoría',
    descripcionCurso:
      'Este componente contiene los elementos necesarios para que el aprendiz desarrolle conocimientos sobre cómo redactar un informe de auditoría, revisando la documentación de una unidad productiva y utilizando los instrumentos de auditoría para la recolección de información, con el fin de realizar un informe final con los resultados (hallazgos) encontrados a la junta directiva para acciones de mejora continua.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
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
        titulo: 'Técnicas de evaluación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Evidencia objetiva',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Observación',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Entrevistas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Instrumentos de auditoría',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Comunicación ',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Hallazgos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Informe de auditoría',
        desarrolloContenidos: true,
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
        icono: 'fas fa-download',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_03_72210005.zip',
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
      tema: '8. Informe de auditoría al final de la sección',
      referencia:
        'Segovia, K. (2020). Elaboración de un Informe de Auditoría. Bureau Veritas Formación. [Video] YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=vGq5AF8-0FI',
    },
    {
      tema: '8. Informe de auditoría al final de la sección',
      referencia:
        'Martínez, C. (2015). Informe de Auditoría. Universidad Católica de Murcia. [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=IEPhVzz5gZo',
    },
    {
      tema: '8. Informe de auditoría al final de la sección',
      referencia:
        'ICONTEC. (s.f.).  ISO 19011:2018. Directrices para la Auditoría de Sistemas de Gestión.',
      tipo: 'PDF',
      link:
        'https://siga.unal.edu.co/images/informes-presentaciones/ISO_19011_2018_Directrices_auditoria_sistemas_gestion.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Conformidad',
      significado:
        'cumplimiento de un requisito encontrado en la auditoría; puede ser observación y oportunidad de mejora.',
    },
    {
      termino: 'Entrevista',
      significado:
        'tipo de técnica para recopilar información, conformada de un grupo de preguntas preparadas que se van adaptando a medida que recibe información dependiendo de las circunstancias, buscando la información más útil para realizar la auditoría.',
    },
    {
      termino: 'Evidencia objetiva',
      significado:
        'información que respalda la existencia o veracidad de algo, atendiendo a los hechos y a la lógica y no dependen de la opinión, sentimientos, sensaciones o punto de vista del auditor.',
    },
    {
      termino: 'Informe final de auditoría',
      significado:
        'es en documento que formaliza los resultados de la auditoría, donde el auditor plasma las conclusiones y recomendaciones sobre los aspectos evaluados, como temas administrativos, financieros y operativos.',
    },
    {
      termino: 'Instrumentos de auditoría',
      significado:
        'son todas aquellas herramientas que el auditor y su equipo de trabajo pueden utilizar para evidenciar los resultados, procesos, hallazgos en los diversos tipos de auditorías que se pueden realizar, es decir, es la manera en cómo se presenta la información o los resultados.',
    },
    {
      termino: 'Hallazgo',
      significado:
        'es el resultado de la evaluación de la evidencia de la auditoría recopilada frente a los criterios de auditoría.',
    },
    {
      termino: 'No conformidad',
      significado: 'incumplimiento de un requisito encontrado en la auditoría.',
    },
    {
      termino: 'Observación',
      significado:
        'sí cumple, pero que puede convertirse en incumplimiento porque existe una inconsistencia en cómo se desarrolla la actividad o proceso. Es necesario realizar correcciones.',
    },
    {
      termino: 'Oportunidad de mejora',
      significado:
        'sí cumple, pero existe posibilidad de mejorar para optimizar la actividad o proceso. No es obligatorio realizar correcciones.',
    },
    {
      termino: 'Técnicas de evaluación',
      significado:
        'son los recursos de investigación que el auditor utiliza para obtener la información necesaria que ha obtenido o la organización le ha suministrado (evidencia primaria) para realizar la verificación.',
    },
  ],
  referencias: [
    {
      referencia:
        'Escuela europea de excelencia. (s.f.). Técnicas y métodos de auditoría. ',
      link:
        'https://www.escuelaeuropeaexcelencia.com/2019/11/tecnicas-y-metodos-de-auditoria/',
    },
    {
      referencia:
        'ICONTEC. (2015). Norma Técnica Colombiana NTC- ISO 9000. Sistemas de gestión de calidad. Fundamentos y vocabulario. ',
      link:
        'https://www.ramajudicial.gov.co/documents/5454330/14491339/d2.+NTC+ISO+9000-2015.pdf/ccb4b35c-ee63-44b5-ba1e-7459f8714031',
    },
    {
      referencia:
        'IFAC- Federación Internacional de Contadores. (s.f.). Norma Internacional de Auditoría NIA- 500. Evidencia de auditoría. ',
      link:
        'https://asocex.es/wp-content/uploads/2017/02/GPF-OCEX-1500_Evidencia-de-auditoria.pdf',
    },
    {
      referencia:
        'ISO- Organización Internacional de Normalización. (2018). Norma internacional ISO 19011. ',
      link:
        'https://www.cecep.edu.co/documentos/calidad/norma-iso-19011-2018.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Responsable de línea de producción',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Víctor Julián Ardila',
          cargo: 'Experto Temático',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
        {
          nombre: 'Diana Carolina Sánchez Rodríguez',
          cargo: 'Experto Temático',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
        {
          nombre: 'Ana Vela Rodríguez Velásquez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Asesora Metodológico',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable Equipo Desarrollo Curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Corrector de Estilo',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
        },
        {
          nombre: 'Sergio Augusto Ardila Ortiz',
          cargo: 'Diseñador Instruccional',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Viviana Esperanza Herrera Quiñonez',
          cargo: 'Asesor Metodológico',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Aruzidna Sánchez Alonso',
          cargo: 'Diseñadora Web',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marín',
          cargo: 'Desarrollador Fullstack',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Junior Rodríguez Rodríguez',
          cargo: 'Storyboarde Ilustración',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Produccióon Audiovisual',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oleg Litvin',
          cargo: 'Animador',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Oscar Daniel Espitia Marín',
          cargo: 'Actividad Didáctica',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validación y Vinculación en Plataforma LMS',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
        {
          nombre: 'Gilberto Naranjo Farfán',
          cargo: 'Validación de Contenidos Accesibles',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
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
