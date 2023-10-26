<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Observación

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema3/tema3-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La observación es un tipo de técnica que utiliza el auditor para recolectar información o lo que durante el curso se le ha nombrado como evidencia, cuyo objetivo principal es verificar que las empresas cumplan lo planificado, por lo que asegura que los hechos y documentos sean equivalentes y por lo tanto verificables, es decir que deben cumplir con las reglamentaciones y normatividad a las que se comprometieron para su posterior análisis. 

    p.mb-4(data-aos="fade-down") Las mejores auditorías que se llevan a cabo dependen de la habilidad del auditor en realizar eficazmente las observaciones y por lo general cuentan con un proceso exhaustivo de revisión de todo el proceso de la empresa, por lo que es allí donde se colecta la mayor cantidad de información cualitativa y cuantitativa. 
    p.mb-5(data-aos="fade-down") En adición, el auditor cuenta con diferentes opciones para realizar estas observaciones, como las que se pueden revisar a continuación:

    .row.mb-5(data-aos="fade-down")
      .col-12.col-lg-9.mb-5.mb-md-0
        LineaTiempoD.color-acento-botones.mb-5
          .row(numero="1" titulo="La observación directa")
            .col-md-6.mb-4.mb-md-0
              p El observador, que en este caso es el auditor previamente acuerda con el personal de la empresa realizar las observaciones, ya sea siendo espectador en los procesos de la organización o interviniendo en las actividades.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/tema3-2.png', alt='')
          .row(numero="2" titulo="La observación indirecta")
            .col-md-6.mb-4.mb-md-0
              p Aquí el auditor tiene en cuenta otras referencias, como la información que han recopilado otras personas o testimonios de personas que han estado directamente involucradas con la fuente directa de la información. 
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/tema3-3.png', alt='')
          .row(numero="3" titulo="La observación oculta")
            .col-md-6.mb-4.mb-md-0
              p En esta, el auditor permanece incógnito con el objetivo e evaluar el verdadero comportamiento y procesos al interior de la organización y así minimizar su intervención en el resultado de la auditoría. 
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/tema3-4.png', alt='')
          .row(numero="4" titulo="La observación no participativa")
            .col-md-6.mb-4.mb-md-0
              p En este tipo de observación el auditor se abstiene de participar en las actividades de la organización con el objetivo de minimizar los efectos de su intervención en la cotidianidad de la empresa.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/tema3-5.png', alt='')
          .row(numero="5" titulo="La observación natural")
            .col-md-6.mb-4.mb-md-0
              p Aquí el auditor observa los procesos cotidianos desarrollados por la empresa.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/tema3-6.png', alt='')
          .row(numero="6" titulo="La observación controlada")
            .col-md-6.mb-4.mb-md-0
              p En este tipo el auditor se encuentra en la capacidad de realizar cambios controlados, para analizar variaciones en tiempo y espacio de los procesos de la empresa.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/tema3-7.png', alt='')
          .row(numero="7" titulo="La observación histórica")
            .col-md-6.mb-4.mb-md-0
              p En esta el auditor tiene en cuenta información histórica de la organización. 
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema3/tema3-8.png', alt='')
      .col-12.col-lg-3.d-none.d-sm-none.d-lg-block
        img(src='@/assets/curso/temas/tema3/tema3-9.svg', alt='')





</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
