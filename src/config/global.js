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
        'Banks, J., Carson, J. S., Nelson, B. L., & Nicol, D. M. (2010). Discrete-event system simulation (5th ed.). Pearson.',
      link: 'http://thuviensob.vbu.edu.vn/handle/TVDHBRVT/15995',
    },
    {
      referencia:
        'Terra, L. A. (2018). Strategies for the study of complex socio-economic systems: An approach using agent-based simulation. Systemic Practice and Action Research, 31(3), 311.',
      link: 'https://doi.org/10.1007/s11213-017-9427-6',
    },
    {
      referencia:
        'Metropolis, N., & Ulam, S. (1949). The Monte Carlo method. Journal of the American Statistical Association, 44(247), 335-341.',
      link: 'https://doi.org/10.1080/01621459.1949.10483310',
    },
    {
      referencia:
        'Darwiche, A. (2009). Modeling and reasoning with Bayesian networks. Cambridge University Press.',
      link: 'https://doi.org/10.1017/CBO9780511811357',
    },
    {
      referencia:
        'Jensen, F. V., & Nielsen, T. D. (2007). Bayesian networks and decision graphs (2nd ed.). Springer.',
      link: 'https://link.springer.com/book/10.1007/978-0-387-68282-2',
    },
    {
      referencia:
        'Koller, D., & Friedman, N. (2009). Probabilistic graphical models: Principles and techniques. MIT Press.',
      link:
        'https://archive.org/details/probabilisticgra0000koll/page/1242/mode/2up',
    },
    {
      referencia:
        'Andersen, Stig. (1991). Judea Pearl, Probabilistic Reasoning in Intelligent Systems: Networks of Plausible Inference.. Artif. Intell.. 48. 117-124. 10.1016/0004-3702(91)90084-W.',
      link:
        'https://www.researchgate.net/publication/220546096_Judea_Pearl_Probabilistic_Reasoning_in_Intelligent_Systems_Networks_of_Plausible_Inference',
    },
    {
      referencia:
        'Han, J., Kamber, M., & Pei, J. (2012). Data mining: Concepts and. Techniques, Waltham: Morgan Kaufmann Publishers.',
      link:
        'https://homes.di.unimi.it/ceselli/IM/2012-13/slides/02-KnowYourData.pdf',
    },
    {
      referencia:
        'Jain, A. K. (2010). Data clustering: 50 years beyond K-means. Pattern recognition letters, 31(8), 651-666.',
      link:
        'https://www.sciencedirect.com/science/article/abs/pii/S0167865509002323',
    },
    {
      referencia:
        'Tan, P. N., Steinbach, M., & Kumar, V. (2016). Introduction to data mining. Pearson Education India.',
      link:
        'https://thuvienso.hoasen.edu.vn/bitstream/handle/123456789/12544/Contents.pdf?sequence=1',
    },
    {
      referencia:
        'Friedman, J. H. (2001). Greedy function approximation: A gradient boosting machine. Annals of Statistics, 29(5), 1189-1232.',
      link: 'https://www.jstor.org/stable/2699986',
    },
    {
      referencia:
        'James, G., Witten, D., Hastie, T., & Tibshirani, R. (2021). An Introduction to Statistical Learning (2nd ed.). Springer.',
      link: 'https://www.jstor.org/book/10.1007/978-3-031-38747-0',
    },
    {
      referencia:
        'Saltelli, Andrea & Tarantola, Stefano & Campolongo, Francesca & Ratto, M.. (2004). Sensitivity Analysis in Practice: A Guide to Assessing Scientific Models.',
      link:
        'https://www.researchgate.net/publication/264961263_Sensitivity_Analysis_in_Practice_A_Guide_to_Assessing_Scientific_Models',
    },
    {
      referencia:
        'Goodfellow, I., Bengio, Y., & Courville, A. (2016). Deep Learning. MIT Press.',
      link: 'https://synapse.koreamed.org/pdf/10.4258/hir.2016.22.4.351',
    },
    {
      referencia:
        'Murphy, K. P. (2012). Machine Learning: A Probabilistic Perspective. MIT Press.',
      link:
        'https://raw.githubusercontent.com/kerasking/book-1/master/ML%20Machine%20Learning-A%20Probabilistic%20Perspective.pdf',
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
