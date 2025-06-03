<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Redes Bayesianas y su aplicación en la toma de decisiones estratégicas'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-5
        .col-lg-8
          .bg-color-4.px-4.py-5(data-aos="fade-left").mb-4
            p.mb-0 Las redes Bayesianas son herramientas probabilísticas basadas en el teorema de Bayes que permiten modelar la incertidumbre en la toma de decisiones. Se utilizan para representar relaciones de causalidad entre variables, ofreciendo un marco estructurado para el análisis de riesgos, predicción de eventos y optimización de estrategias empresariales.
          
          p(data-aos="fade-left") Formalmente introducidas por Pearl (1988), y citadas por Andersen (1991), estas redes se representan como grafos dirigidos acíclicos, donde los nodos corresponden a variables y las aristas indican dependencias probabilísticas. A través de la inferencia bayesiana, es posible actualizar las probabilidades conforme se obtiene nueva información, lo que convierte a estas redes en sistemas adaptativos de aprendizaje.

        .col-lg-4.d-none.d-sm-block
          figure
            img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in").mb-4.mb-lg-0


      p #[strong Los tipos de inferencia en redes Bayesianas son:]

      .row.justify-content-center.align-items-stretch.mb-4
        .col-lg-6
          .bg-color-6.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/2.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Inferencia exacta
                p.mb-0 Aplicable en redes de tamaño moderado; ofrece resultados precisos.
      
        .col-lg-6
          .bg-color-6.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
              .col-lg
                h5.mb-2 Inferencia aproximada
                p.mb-0 Utiliza técnicas como el muestreo de Monte Carlo para redes complejas (Koller & Friedman, 2009).
      
      p Empresas como IBM emplean redes Bayesianas para el diagnóstico de fallas en servidores, mejorando la predicción y prevención de incidentes. En el sector financiero, JP Morgan Chase las aplica para evaluar riesgos crediticios y detectar fraudes, lo cual demuestra su valor en la optimización de procesos estratégicos bajo condiciones de incertidumbre.

      .bg-full-width.bg-fondo-2
        .px-4.px-md-5.py-4

          h2.pt-4.mb-4 Aplicación en la predicción y gestión del riesgo

          .row.mb-5
            .col-lg-4
              figure
                img(src="@/assets/curso/tema2/4.png", data-aos="zoom-in")
            .col-lg-8
              .bg-color-2.p-4(data-aos="fade-left").mb-4
                p.mb-0 En la gestión empresarial, las redes Bayesianas representan una herramienta crucial para la predicción y evaluación de riesgos. Según Jensen & Nielsen (2007), estas redes permiten modelar eventos inciertos y calcular la probabilidad de escenarios adversos, mejorando la capacidad de anticipación y respuesta de las organizaciones.
          
              p(data-aos="fade-left").mb-4 Empresas como Goldman Sachs utilizan redes Bayesianas para modelar la volatilidad del mercado y ajustar sus estrategias de inversión. En el ámbito industrial, General Electric las implementa en programas de mantenimiento predictivo, disminuyendo costos operativos y mejorando la eficiencia. Las aplicaciones empresariales en gestión de riesgos son: 


          .row.justify-content-center.align-items-stretch
            .col-lg-4.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/5.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Goldman Sachs
                  p.mb-0.text-center Evaluación de volatilidad y ajuste de estrategias de inversión.
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/6.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center General Electric
                  p.mb-0.text-center Mantenimiento predictivo de maquinaria industrial.
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/7.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center JP Morgan Chase
                  p.mb-0.text-center Detección de fraudes y análisis de riesgos crediticios.
          
          
      .bg-full-width.bg-color-3.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/8.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La integración de redes Bayesianas en la gestión del riesgo permite una asignación más eficiente de recursos, así como una toma de decisiones fundamentada en escenarios probabilísticos, mejorando la adaptación a entornos dinámicos y volátiles.
      
      .bg-full-width-2.bg-fondo-3
        .px-4.px-md-5.py-4
          h2 Redes Bayesianas en la inteligencia de negocios

          .row.mb-5
            .col-lg-8
              p(data-aos="fade-left") En el contexto del big data, la inteligencia de negocios exige herramientas que no solo procesen grandes volúmenes de información, sino que también identifiquen patrones útiles para la toma de decisiones. Las redes Bayesianas se destacan por su capacidad para inferir conocimiento oculto, facilitando el análisis de datos y la personalización de estrategias.
          
              .bg-color-1.p-4(data-aos="fade-left").mb-4
                p.mb-0 Según Darwiche (2009), estas redes se utilizan en sistemas de recomendación, análisis de comportamiento del cliente y personalización de productos, siendo esenciales para generar ventajas competitivas en mercados centrados en el cliente.

              p Empresas líderes como Amazon y Netflix han integrado redes Bayesianas en sus sistemas de recomendación. Amazon ha incrementado significativamente su tasa de conversión al anticipar las preferencias de sus usuarios, mientras que Netflix las utiliza para sugerir contenidos personalizados, mejorando la experiencia del cliente. Las aplicaciones en inteligencia de negocios son:
          
            .col-lg-4
              figure
                img(src="@/assets/curso/tema2/9.png", data-aos="zoom-in")


          .row.justify-content-center.align-items-stretch
            .col-lg-4.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/10.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Amazon
                  p.mb-0.text-center Algoritmo de recomendaciones personalizadas.
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/11.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Netflix
                  p.mb-0.text-center Predicción de preferencias y optimización de oferta de contenidos.
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema2/12.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Sistemas CRM
                  p.mb-0.text-center Segmentación y análisis de clientes para campañas personalizadas.
          
      

      .bg-full-width.bg-color-7
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/13.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Las redes Bayesianas permiten a las organizaciones adaptarse mejor a las tendencias del mercado, mejorar la satisfacción del cliente y fortalecer su posición competitiva mediante decisiones estratégicas basadas en datos.
      

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
                span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
