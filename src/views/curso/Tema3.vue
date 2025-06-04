<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Algoritmos de agrupamiento y segmentación en inteligencia de negocios'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-5.align-items-stretch
        .col-lg-4.mb-4.mb-lg-0
          .bg-color-1.p-4.brounded.h-100
            p El agrupamiento (clustering) y la segmentación son técnicas esenciales en la inteligencia de negocios, ya que permiten identificar patrones en grandes volúmenes de datos, optimizar estrategias comerciales y mejorar la toma de decisiones. Ambas técnicas se utilizan para clasificar clientes, analizar mercados y personalizar productos o servicios.

        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in", style="max-width: 400px").mx-auto
          
        .col-lg-4
          .bg-color-2.p-4.brounded.h-100
            p El agrupamiento es un método no supervisado que busca descubrir estructuras ocultas en los datos sin requerir etiquetas previas. Según Jain (2010), esta técnica es especialmente útil en la segmentación de clientes, clasificación de productos y detección de anomalías.


      p Por otro lado, la segmentación consiste en dividir conjuntos de datos en subgrupos homogéneos con características similares, lo cual permite personalizar estrategias comerciales y mejorar la experiencia del cliente (Han, Kamber & Pei, 2011). Los principales algoritmos de agrupamiento son: 


      TabsC.color-acento-contenido.mb-5
        .tabs-content.border.px-4.p-md-5.py-3(titulo="K-Means" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 K-Means
              p Basado en centroides; minimiza la variabilidad interna. Usado en segmentación de clientes.
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/tab-1.png', alt='')
      
        .tabs-content.border.px-4.p-md-5.py-3(titulo="DBSCAN" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 DBSCAN
              p Basado en densidad; detecta estructuras arbitrarias y ruido. Ideal para datos no lineales.
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/tab-2.png', alt='')
      
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Título tab 3" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Jerárquico
              p Genera una estructura de árbol (dendrograma); útil para visualización de relaciones entre grupos.
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/tab-3.png', alt='')
      

      .bg-full-width.bg-color-2
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Empresas como Netflix y Amazon implementan técnicas de agrupamiento para segmentar usuarios y personalizar sus servicios. Netflix emplea K-Means para clasificar a los usuarios según sus hábitos de consumo, mientras que Amazon optimiza la experiencia de compra mediante la segmentación de clientes.
      

      .bg-full-width-2.bg-fondo-4
        .px-4.px-md-5.py-4
          h2 Segmentación de clientes mediante algoritmos de agrupamiento

          p La segmentación de clientes con algoritmos de agrupamiento permite identificar perfiles de consumidores, entender sus necesidades y personalizar las estrategias de marketing. Según Tan, Steinbach y Kumar (2019), esta técnica permite reconocer patrones de comportamiento, niveles de lealtad y preferencias de compra. Los tipos de segmentación aplicados al análisis de clientes son: 

          .row.justify-content-center.align-items-stretch.mb-4
            .col-lg-4
              .bg-color-6.p-4(data-aos="fade-left").h-100
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema3/3.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    h5.mb-2 Demográfica
                    p.mb-0 Edad, género, ubicación geográfica.
          
            .col-lg-4
              .bg-color-6.p-4(data-aos="fade-left").h-100
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema3/4.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    h5.mb-2 Psicográfica
                    p.mb-0 Intereses, estilo de vida, valores.
            
            .col-lg-4
              .bg-color-6.p-4(data-aos="fade-left").h-100
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema3/5.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    h5.mb-2 Basada en comportamiento
                    p.mb-0 Frecuencia de compra, tipo de productos adquiridos, uso del servicio.
          

          p Los ejemplos destacados de aplicación:

          .row.justify-content-center.align-items-stretch
            .col-lg-6.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema3/6.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center  Spotify
                  p.mb-0.text-center Segmenta usuarios según patrones de escucha, ofreciendo listas personalizadas.
            .col-lg-6.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema3/7.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center Coca-Cola
                  p.mb-0.text-center Adapta campañas publicitarias a partir de preferencias detectadas en distintos mercados.

          
      p Estas aplicaciones demuestran cómo la segmentación de clientes basada en agrupamiento puede maximizar el retorno de inversión en marketing, aumentar la retención de clientes y mejorar la eficiencia operativa.

      h2 Implementación de algoritmos de segmentación en análisis predictivo

      p El análisis predictivo combina segmentación con modelos avanzados para anticipar comportamientos futuros y apoyar la toma de decisiones estratégicas. Según Han, Kamber y Pei (2011), esta integración permite extraer valor de los datos históricos para mejorar la planificación. Las técnicas aplicadas al análisis predictivo son:

      .bg-full-width.bg-color-info.mb-5
        .p-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-10
              ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema3/info1.png', alt='', style="max-width: 911px;").mx-auto
      
                .bg-color-white.box-shadow.p-3(x="26%" y="32.5%" numero="+")
                  h5 Modelos de regresión
                  p Prever tendencias en ventas, demanda o comportamiento del mercado.
      
                .bg-color-white.box-shadow.p-3(x="54.5%" y="16%" numero="+")
                  h5 Árboles de decisión
                  p Clasificar y segmentar clientes según variables clave.
      
                .bg-color-white.box-shadow.p-3(x="76.5%" y="43%" numero="+")
                  h5 Redes neuronales
                  p Predecir comportamientos futuros basados en patrones previos.
      

      p Los casos empresariales son:


      .bg-full-width.bg-fondo-slider
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/8.png")
              .col-lg-7.order-lg-1
                h4 Uber
                p Ajuste dinámico de tarifas y distribución eficiente de conductores según segmentación de zonas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema3/9.png")
              .col-lg-7.order-lg-1
                h5 Zara
                p Anticipación de tendencias de moda y gestión de inventario según comportamiento del consumidor.
      

      .bg-full-width.bg-color-2
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/10.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La combinación de segmentación y análisis predictivo permite a las empresas anticiparse a las necesidades del mercado, mejorar la asignación de recursos y aumentar su competitividad en entornos cambiantes.
      

      

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
