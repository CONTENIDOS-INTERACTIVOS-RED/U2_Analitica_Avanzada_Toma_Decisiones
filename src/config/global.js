export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Técnicas Avanzadas para el Análisis de Datos',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Modelos de simulación para análisis de escenarios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Redes Bayesianas y su aplicación en la toma de decisiones estratégicas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Algoritmos de agrupamiento y segmentación en inteligencia de negocios',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Análisis de sensibilidad y evaluación de impacto en modelos predictivos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
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
    ],
  },
  referencias: [
    {
      referencia:
        'Ardaraz, M. (2002). Teoría de las tres dimensiones de desarrollo sostenible: . Ecosistemas, 11(2)',
      link:
        'https://www.revistaecosistemas.net/index.php/ecosistemas/article/view/614',
    },
    {
      referencia:
        'Beltrán, D. J. (2002). La estrategia de desarrollo sostenible de la Unión Europea en el contexto global: de Río a Johannesburgo. ICE. Revista de Economía, (800).',
      link: '',
    },
  ],
  glosario: [
    {
      termino: 'Algoritmo de agrupamiento',
      significado:
        'técnica de machine learning utilizada para dividir un conjunto de datos en grupos con características similares.',
    },
    {
      termino: 'Análisis de impacto',
      significado:
        'evaluación del efecto de una variable o decisión en los resultados de un modelo predictivo.',
    },
    {
      termino: 'Análisis de sensibilidad',
      significado:
        'método para medir cómo los cambios en las variables de entrada afectan la salida de un modelo.',
    },
    {
      termino: 'Big data',
      significado:
        'conjunto de datos masivos que requieren técnicas avanzadas para su procesamiento y análisis.',
    },
    {
      termino: 'Clasificación',
      significado:
        'método de segmentación que asigna datos a categorías predefinidas en modelos predictivos.',
    },
    {
      termino: 'Clusterización',
      significado:
        'técnica de agrupamiento que organiza datos en subconjuntos según similitudes.',
    },
    {
      termino: 'Datos de entrada',
      significado:
        'variables utilizadas en un modelo predictivo para generar resultados.',
    },
    {
      termino: 'Dirección estratégica',
      significado:
        'proceso de toma de decisiones que guía a una organización hacia sus objetivos a largo plazo.',
    },
    {
      termino: 'Evaluación de impacto',
      significado:
        'proceso de medición de los efectos de una intervención o estrategia en un modelo o negocio.',
    },
    {
      termino: 'Inferencia Bayesiana',
      significado:
        'método probabilístico basado en el Teorema de Bayes para actualizar creencias con nueva evidencia.',
    },
    {
      termino: 'Inteligencia de negocios',
      significado:
        'conjunto de procesos y herramientas que transforman datos en información útil para la toma de decisiones.',
    },
    {
      termino: 'Machine Learning',
      significado:
        'rama de la inteligencia artificial que permite a sistemas aprender de datos y mejorar su rendimiento sin programación explícita.',
    },
    {
      termino: 'Modelos predictivos',
      significado:
        'algoritmos utilizados para predecir tendencias o resultados futuros basados en datos históricos.',
    },
    {
      termino: 'Optimización de recursos',
      significado:
        'proceso de distribución eficiente de insumos para mejorar la rentabilidad de una organización.',
    },
    {
      termino: 'Predicción de demanda',
      significado:
        'uso de modelos matemáticos para estimar la demanda futura de productos o servicios.',
    },
    {
      termino: 'Pruebas a/b',
      significado:
        'método experimental que compara dos versiones de una variable para determinar cuál es más efectiva.',
    },
    {
      termino: 'Redes bayesianas',
      significado:
        'estructuras probabilísticas que modelan la relación entre variables y permiten inferencias sobre datos inciertos.',
    },
    {
      termino: 'Riesgo financiero',
      significado:
        'posibilidad de pérdidas económicas debido a incertidumbres en el mercado o malas decisiones estratégicas.',
    },
    {
      termino: 'Segmentación de clientes',
      significado:
        'proceso de dividir una base de clientes en grupos con características similares para personalizar estrategias de marketing.',
    },
    {
      termino: 'Toma de decisiones',
      significado:
        'proceso de selección de la mejor opción entre varias alternativas en función de datos y objetivos estratégicos.',
    },
  ],
}
