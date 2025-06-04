<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'4. Análisis de sensibilidad y evaluación de impacto en modelos predictivos'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  

      p El análisis de sensibilidad es una técnica fundamental en los modelos predictivos, ya que permite identificar cómo influyen las variaciones de las variables de entrada sobre los resultados del modelo. Según Saltelli et al. (2008), esta técnica es clave para garantizar la robustez y confiabilidad de los modelos, especialmente en contextos con alto grado de incertidumbre. Los tipos de análisis de sensibilidad son:

      .row.justify-content-center.align-items-stretch.mb-4
        .col-lg-6
          .bg-color-6.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema4/1.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Local
                p.mb-0 Evalúa el impacto de pequeños cambios en una variable manteniendo las demás constantes.
      
        .col-lg-6
          .bg-color-6.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema4/2.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Global
                p.mb-0 Considera variaciones simultáneas de múltiples variables para evaluar la incertidumbre general.
      
      p El análisis de sensibilidad se aplica en inteligencia de negocios para optimizar decisiones financieras, ajustar modelos de predicción de demanda y evaluar campañas de marketing. Algunos casos empresariales son: 


      .bg-full-width.bg-fondo-slider
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema4/slide-1.png")
              .col-lg-7.order-lg-1
                h4 Goldman Sachs
                p Evalúa el impacto de cambios en tasas de interés y precios de activos en sus modelos financieros.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema4/slide-2.png")
              .col-lg-7.order-lg-1
                h4 Tesla
                p Optimiza su cadena de suministro y producción mediante sensibilidad en modelos logísticos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema4/slide-3.png")
              .col-lg-7.order-lg-1
                h4 Google Ads
                p Ajusta modelos de subasta para maximizar la rentabilidad de campañas publicitarias.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema4/slide-3.png")
              .col-lg-7.order-lg-1
                h4 Nike
                p Aplica análisis de sensibilidad en modelos de demanda para optimizar inventarios y reducir costos.
      

      .bg-full-width.bg-fondo-5
        .px-4.px-md-5.py-4

          h2.pt-4 Métodos de evaluación de impacto en modelos predictivos

          p.mb-4 La evaluación de impacto permite medir el efecto de distintas variables sobre un resultado deseado, mejorando la efectividad de estrategias empresariales antes de su implementación. Según Friedman (2001), existen varios métodos:


          div.row.justify-content-center.align-items-stretch
            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema4/3.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.text-center Análisis contrafactual
                p.mb-0.text-center Compara el resultado real con escenarios hipotéticos donde se altera una variable de interés.
          
            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema4/4.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.text-center XAI (Modelos explicables)
                p.mb-0.text-center Técnicas como SHAP y LIME permiten entender la contribución de cada variable a la predicción final.
          
            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema4/5.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.text-center Pruebas A/B
                p.mb-0.text-center Comparan grupos de control y tratamiento para medir el impacto real de una intervención.
          
          
      p Algunos casos empresariales son: 

      TabsC.color-acento-contenido.mb-5
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Facebook" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row.align-items-center
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Facebook
              p Emplea pruebas A/B para medir el efecto de cambios en su algoritmo de noticias.
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/tab-1.png', alt='')
      
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Pfizer" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Pfizer
              p Usa análisis contrafactual para evaluar la distribución de medicamentos en diferentes mercados.
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/tab-2.png', alt='')
      

      .bg-full-width.bg-color-7.mb-5
        .px-4.px-md-5.py-4
          p.mb-0 Estos métodos permiten validar estrategias, reducir costos y mejorar la eficiencia operativa al tomar decisiones basadas en evidencias cuantificables.


      h2 Aplicación del análisis de sensibilidad en inteligencia de negocios

      p.mb-4 En el ámbito de la inteligencia de negocios, el análisis de sensibilidad es una herramienta indispensable para evaluar la estabilidad de modelos de predicción y optimizar decisiones en finanzas, operaciones y marketing. Según James, Witten, Hastie y Tibshirani (2021), este análisis se aplica en:

      .row.align-items-start.mb-5
        .col-lg-8

      
          AcordionA(tipo="b")
            .div(titulo="Predicción de demanda")
              p Ajuste de producción y logística ante cambios en las condiciones del mercado.
      
            .div(titulo="Análisis de rentabilidad")
              p Evaluación de márgenes ante variaciones en costos y precios.
      
            .div(titulo="Campañas de marketing")
              p Identificación de variables con mayor impacto (precio, canal, promoción).


        .col-lg-4
          figure
            img(src="@/assets/curso/tema4/6.png", alt="").mb-4.mb-lg-0
      
      .row.mb-5
        .col-lg-5
          figure
            img(src="@/assets/curso/tema4/7.png", data-aos="zoom-in")
        .col-lg-7
          p(data-aos="fade-left").mb-4 El uso de esta técnica permite a las empresas responder de forma ágil y precisa a las condiciones cambiantes del mercado, elevando su capacidad de adaptación y rentabilidad.
      
          .bg-color-3.p-4(data-aos="fade-left")
            h5 Inteligencia artificial en modelos predictivos y redes Bayesianas
            p.mb-0 La inteligencia artificial (IA) ha revolucionado la manera en que las empresas predicen escenarios y toman decisiones. Gracias a modelos predictivos y redes Bayesianas, ahora es posible anticipar eventos y gestionar la incertidumbre a gran escala.

      h2 Modelos predictivos basados en IA

      p Según Goodfellow, Bengio y Courville (2016), estos modelos emplean algoritmos de aprendizaje automático para analizar patrones en grandes volúmenes de datos. Se clasifican en:

      .row.mb-5
        .col-lg-8
          .bg-color-6.p-3.mb-2
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema4/8.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Regresión y árboles
                p.mb-0 Segmentación de clientes, análisis de riesgos.

          .bg-color-6.p-3.mb-2
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema4/9.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Redes neuronales (RNA)
                p.mb-0 Predicción de demanda, recomendaciones personalizadas.

          .bg-color-6.p-3.mb-0
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema4/9.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Redes neuronales (RNA)
                p.mb-0 Predicción de demanda, recomendaciones personalizadas.
        .col-lg-4
          figure
            img(src="@/assets/curso/tema4/11.png", alt="")


      h2 Redes Bayesianas en inteligencia artificial

      p Introducidas por Judea Pearl (1988), las redes Bayesianas permiten modelar relaciones de dependencia entre variables y realizar inferencias mediante la actualización de probabilidades.

      .row.justify-content-center.align-items-stretch.mb-5
        .col-lg-4.mb-4(data-aos="zoom-in-up")
          .custom-image-card-2.h-100
            img.custom-image-card__image(src="@/assets/curso/tema4/12.png" alt="")
            .custom-image-card__text.p-4
              h5.mb-2.text-center Salud
              p.mb-0.text-center IBM Watson Health utiliza redes neuronales y Bayesianas para diagnóstico y tratamiento.
        .col-lg-4.mb-4(data-aos="zoom-in-down")
          .custom-image-card-2.h-100
            img.custom-image-card__image(src="@/assets/curso/tema4/13.png" alt="")
            .custom-image-card__text.p-4
              h5.mb-2.text-center Banca
              p.mb-0 JP Morgan Chase detecta fraudes y evalúa riesgos en tiempo real.
        .col-lg-4.mb-4(data-aos="zoom-in-down")
          .custom-image-card-2.h-100
            img.custom-image-card__image(src="@/assets/curso/tema4/14.png" alt="")
            .custom-image-card__text.p-4
              h5.mb-2.text-center Comercio
              p.mb-0 Amazon emplea redes neuronales y XGBoost para predecir compras y personalizar recomendaciones.
      
      p La integración del análisis de sensibilidad, los modelos predictivos y las redes Bayesianas, potenciados por la inteligencia artificial, ha transformado la toma de decisiones en sectores como el comercio electrónico, la banca y la salud. Estas tecnologías permiten a las empresas:

      .bg-full-width.bg-color-2
        .px-4.px-md-5.py-3
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/15.svg", style="max-width: 609px").mx-auto
            .col-lg
              ul.lista-ul--color.color-dark.my-0
                li.mb-2
                  i.fas.fa-arrow-circle-right
                  | Anticipar tendencias.
                li.mb-2
                  i.fas.fa-arrow-circle-right
                  | Reducir riesgos.
                li.mb-2
                  i.fas.fa-arrow-circle-right
                  | Optimizar recursos.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Mejorar la experiencia del cliente.

      .bg-full-width.bg-color-7
        .px-4.px-md-5.py-4
          p.mb-0 Las organizaciones que adoptan estas herramientas acceden a ventajas competitivas sostenibles, adaptándose de forma efectiva a un entorno cada vez más dinámico y basado en datos. A medida que la IA sigue avanzando, su impacto en la gestión estratégica y operativa será cada vez más profundo.
              
      

      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

      //- .bg-full-width.border-top.color-primario
      //-   .p-4.p-md-5
      //-     h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
      //-     .row.material-complementario
      //-       .col-12.col-md-6.col-lg-7
      //-         p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
      //-         p.d-flex.my-4
      //-           img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
      //-           a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 
  
      //-         p.d-flex.my-4
      //-           img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
      //-           span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.
  
      //-         p.d-flex.my-4
      //-           img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
      //-           a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.
  
      //-       .col-12.col-md-6.col-lg-3.offset-lg-1
      //-         figure
      //-           img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema4',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de los siguientes algoritmos es más adecuado para la predicción de demanda basada en datos históricos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              { id: 'a', texto: 'Redes Bayesianas', esCorrecta: false },
              { id: 'b', texto: 'Regresión logística', esCorrecta: false },
              {
                id: 'c',
                texto: 'Redes neuronales artificiales',
                esCorrecta: true,
              },
              { id: 'd', texto: 'Algoritmo de Kruskal', esCorrecta: false },
            ],
            mensaje_correcto:
              '¡Correcto! Las redes neuronales artificiales pueden identificar patrones complejos en los datos de ventas pasadas, optimizando la predicción de demanda y reduciendo costos de almacenamiento y desabastecimiento.',
            mensaje_incorrecto:
              'Incorrecto. La respuesta correcta es: Redes neuronales artificiales.',
          },
          {
            id: 2,
            texto:
              '¿Cuál es la principal ventaja de las redes Bayesianas en la detección de fraudes financieros?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Reducen la cantidad de transacciones realizadas en la plataforma',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Basan sus predicciones en relaciones de causalidad y probabilidad',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Eliminarán por completo la posibilidad de fraudes',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Solo pueden analizar datos estructurados',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! Las redes Bayesianas permiten analizar patrones de comportamiento sospechoso con base en relaciones probabilísticas, ayudando a identificar fraudes con mayor precisión y reduciendo falsos positivos.',
            mensaje_incorrecto:
              'Incorrecto. La respuesta correcta es: Basan sus predicciones en relaciones de causalidad y probabilidad.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de los siguientes algoritmos es más adecuado para segmentar clientes según sus hábitos de compra?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Algoritmo de k-medias (K-means)',
                esCorrecta: true,
              },
              { id: 'b', texto: 'Regresión lineal', esCorrecta: false },
              { id: 'c', texto: 'Árboles de decisión', esCorrecta: false },
              { id: 'd', texto: 'Algoritmo de Dijkstra', esCorrecta: false },
            ],
            mensaje_correcto:
              '¡Correcto! El algoritmo de k-medias es ampliamente utilizado en la segmentación de clientes, agrupando datos similares en distintos clústeres para estrategias de marketing más precisas y efectivas.',
            mensaje_incorrecto:
              'Incorrecto. La respuesta correcta es: Algoritmo de k-medias (K-means).',
          },
          {
            id: 4,
            texto:
              '¿Qué técnica le permitiría analizar la influencia de cada variable en los resultados del modelo?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              { id: 'a', texto: 'Análisis de sensibilidad', esCorrecta: true },
              { id: 'b', texto: 'Pruebas A/B', esCorrecta: false },
              { id: 'c', texto: 'Árboles de decisión', esCorrecta: false },
              { id: 'd', texto: 'Algoritmo genético', esCorrecta: false },
            ],
            mensaje_correcto:
              '¡Correcto! El análisis de sensibilidad permite evaluar cómo la variación de una variable influye en el resultado final del modelo, optimizando las decisiones de negocio.',
            mensaje_incorrecto:
              'Incorrecto. La respuesta correcta es: Análisis de sensibilidad.',
          },
          {
            id: 5,
            texto:
              '¿Cuál es la principal razón por la que las redes Bayesianas son útiles en la toma de decisiones en entornos inciertos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Permiten calcular probabilidades y tomar decisiones en entornos inciertos',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Son más rápidas que cualquier otro modelo predictivo',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'No requieren datos históricos para funcionar',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Solo pueden usarse en problemas de clasificación',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! Las redes Bayesianas permiten evaluar probabilidades en tiempo real y ajustar decisiones conforme se obtienen nuevos datos, lo que las hace esenciales en la toma de decisiones en entornos cambiantes.',
            mensaje_incorrecto:
              'Incorrecto. La respuesta correcta es: Permiten calcular probabilidades y tomar decisiones en entornos inciertos.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
