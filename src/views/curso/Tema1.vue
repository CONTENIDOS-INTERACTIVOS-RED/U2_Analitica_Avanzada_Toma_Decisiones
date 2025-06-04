<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Modelos de simulación para análisis de escenarios'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    .row.mb-4
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left").mb-4 La simulación es una técnica fundamental en la analítica avanzada que permite modelar procesos complejos y anticipar el comportamiento de sistemas bajo diferentes condiciones. Su aplicación en la toma de decisiones estratégicas ayuda a reducir la incertidumbre y optimizar estrategias antes de implementarlas en entornos reales. En contextos de alta competitividad y volatilidad, las organizaciones utilizan simulaciones para evaluar el impacto potencial de sus decisiones sin incurrir en elevados costos operativos.
    
        .bg-color-1.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 Según Banks et al. (2010), la simulación se basa en modelos matemáticos y computacionales que replican el comportamiento de un sistema, permitiendo a los tomadores de decisiones experimentar con diversas condiciones y analizar sus consecuencias. Esto fortalece la resiliencia organizacional, mejora la planeación estratégica y facilita el diseño de planes de contingencia.
    
    p(data-aos="fade-left").mb-4 Empresas como Amazon han adoptado modelos de simulación para optimizar su logística y predecir la demanda, logrando reducir costos y mejorar la eficiencia en distribución. Boeing, por su parte, emplea simulaciones avanzadas para diseñar y probar aeronaves, garantizando altos estándares de seguridad sin necesidad de construir prototipos físicos costosos.


    .row.align-items-start.mb-5
      .col-lg-8
    
        AcordionA(tipo="b")
          .div(titulo="Simulación de eventos discretos (DES)")
            p Modela sistemas donde los cambios ocurren en momentos específicos y discretos. Usado en gestión de colas y líneas de producción.
    
          .div(titulo="Simulación continua")
            p Representa sistemas donde las variables cambian continuamente en el tiempo. Común en modelos económicos y de control de inventarios.
    
          .div(titulo="Simulación basada en agentes (ABS)")
            p Modela sistemas con múltiples entidades que interactúan, como mercados financieros o comportamientos de consumidores.

    
          .div(titulo="Simulación de Monte Carlo")
            p Usa distribuciones de probabilidad y generación de escenarios aleatorios para modelar incertidumbre. Aplicable en finanzas, manufactura y gestión de riesgos.
    
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/3.png", alt="").mb-4.mb-lg-0
    



    .bg-full-width.bg-fondo-1
      .px-4.px-md-5.py-4

        h2.pt-4.mb-4 Simulación de Monte Carlo y su aplicación empresarial
        .bg-color-3.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema1/4.png', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") La simulación de Monte Carlo es un método probabilístico que permite evaluar incertidumbres en procesos empresariales mediante la generación de múltiples escenarios basados en variables aleatorias. Fue desarrollada en los años 40 por John von Neumann y Stanislaw Ulam, y formalizada por Metropolis & Ulam (1949). Su versatilidad la ha llevado a ser utilizada en campos tan diversos como la física nuclear y las finanzas corporativas.


        p Este método permite identificar riesgos y oportunidades estratégicas al estimar el impacto de múltiples factores inciertos mediante miles de iteraciones. A partir de ellas, se obtienen distribuciones de probabilidad que describen los posibles resultados de un proceso.

        p Las características clave de la simulación de Monte Carlo son: 

        div.row.justify-content-center.align-items-stretch
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/6.svg"
                alt=""
                style="width: 90px"
              )
              p.mb-0.text-center Utiliza distribuciones de probabilidad como la normal, uniforme o exponencial.
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/7.svg"
                alt=""
                style="width: 90px"
              )
              p.mb-0.text-center Genera múltiples escenarios a partir de números aleatorios.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/8.svg"
                alt=""
                style="width: 90px"
              )
              p.mb-0.text-center Evalúa los resultados mediante estadística inferencial.
        
          div.col-lg-3.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/9.svg"
                alt=""
                style="width: 90px"
              )
              p.mb-0.text-center Es aplicable en finanzas, manufactura, logística y gestión de riesgos.


    .row.mb-5.align-items-stretch
      .col-lg-7
        .bg-color-2.px-4.py-4(data-aos="fade-left").mb-4.h-100
          p Empresas como Goldman Sachs emplean esta técnica para analizar riesgos en inversiones y evaluar la rentabilidad de carteras. En el sector manufacturero, General Motors la usa para optimizar procesos y reducir defectos en la producción.
          p.mb-0 La simulación de Monte Carlo es una herramienta clave para la gestión estratégica, ya que permite tomar decisiones informadas en entornos inciertos, optimizando procesos como la planificación de inversiones, la gestión de precios y la optimización de la cadena de suministro.
        
      .col-lg-5.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema1/10.png", data-aos="zoom-in").mb-4.mb-lg-0


    h2 Aplicación de simulación basada en agentes en la gestión empresarial

    p A continuación,  se presenta una herramienta poderosa que permite simular entornos complejos: la simulación basada en agentes y su aplicación en la gestión empresarial.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/zYQR4RRIMo4?si=HTldpJk7mrtTPiXM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/74498" target="_blank" rel="noopener noreferrer") Gelover-Santiago, A. L. (2005). Simulación del modelo de Ising con el método de Monte Carlo: (2 ed.). Universidad Nacional Autónoma de México. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=kMgZLUHlIAw" target="_blank" rel="noopener noreferrer") ¿Cómo desarrollar modelos predictivos exitosos para su empresa? 

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
