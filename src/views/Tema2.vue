<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Evidencia objetiva

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Se define la evidencia objetiva como la información que respalda la existencia o veracidad de algo, atendiendo a los hechos y a la lógica y no dependen de la opinión, sentimientos, sensaciones o punto de vista del auditor, por lo tanto, solo se admiten las evidencias que no están sometidas a interpretación.  
          br
          br
          | La cantidad de evidencia es suficiente cuando el auditor considera que han aportado lo requerido para sustentar su opinión (IFAC, 2017). Esta se considera fiable, relevante o contundente, cuando el auditor la observa adecuada y oportuna cumpliendo las características que se pueden ver a continuación:

    .row.mb-5(data-aos="fade-down-right")
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema2/tema2-2.svg', alt='')
          h3.text-center Relevante
          p Cuando al auditor le permite llegar a la conclusión.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema2/tema2-3.svg', alt='')
          h3.text-center Auténtica
          p Cuando es verdadera viéndolo desde cualquier punto de vista.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema2/tema2-4.svg', alt='')
          h3.text-center Verificable
          p Cuando se comprueba por diversos medios.
      .col-sm-6.col-lg-3.mb-4.mb-lg-0
        .tarjeta--boton.color-primario.p-4
          .row.justify-content-center.mb-3
            .col-7
              figure
                img(src='@/assets/curso/temas/tema2/tema2-5.svg', alt='')
          h3.text-center Neutral
          p Cuando la evidencia se encuentra libre de opiniones.
    
    p.mb-4(data-aos="fade-down") En algunas ocasiones el auditor puede no estar satisfecho con la evidencia obtenida, en especial cuando se presenta alguno de los siguientes casos:

    ul.lista-ul.ms-3.mb-4(data-aos="fade-down")
      li 
        i.lista-ul__vineta
        | La evidencia de una fuente no coincide con la obtenida de otra fuente.  
      li 
        i.lista-ul__vineta
        | El auditor tiene dudas respecto a la veracidad de la información obtenida. 

    p.mb-5(data-aos="fade-down") Es entonces que este tipo de evidencia se puede obtener mediante los métodos que se pueden ver a continuación:

    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul" data-aos="fade-down")
      .row(titulo="Documentos del sistema")
        .col-12.mb-4.mb-md-0
          p Cuando el auditor revisa la variedad de estilos y formas que pueden tener los documentos de la organización auditada, debe entender y adaptarse al sistema documental de la empresa.
          p Sin embargo, si considera que algún documento no cumple con los criterios de la auditoría, debe consultar al personal encargado para que explique esta inconsistencia, pero si aún no es claro, este debe redactar un texto que explique cómo debería ser y bajo que criterio incumple.  
      .row(titulo="Por medio de los registros")
        .col-12.mb-4.mb-md-0
          p En un registro se puede comprobar que una actividad o proceso fue realizado, indicando cumplimiento o incumplimiento de algún requisito en el sistema. 
          p También mediante los registros se puede comprobar la eficacia y la trazabilidad de los procesos.
      .row(titulo="Observación directa")
        .col-12.mb-4.mb-md-0
          p El auditor debe corroborar que los documentos y los registros presentan la este debe realizar visitas o inspecciones directas al interior de la organización y verificar que lo que dicen los documentos se ajustan a la realidad de lo que ocurre en la empresa. 

    p.mb-5(data-aos="fade-down") Por otro lado, existen otros tipos de evidencia objetiva que se pueden tener en cuenta al momento de realizar una auditoría.

    AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul" data-aos="fade-down")
      .row(titulo="Evidencia física o material")
        .col-md-6.mb-4.mb-md-0
          p Se obtiene a través de la observación directa de las actividades de la organización. Esta evidencia se registra por medio de fotografías, gráficos, mapas y muestras tomadas #[em in situ].
          p Sin embargo, aunque esta evidencia es de la más convincente, la presencia del auditor puede estar afectando la realidad de lo que ocurre en la organización.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/tema2-6.png', alt='')
      .row(titulo="Evidencia documental")
        .col-md-6.mb-4.mb-md-0
          p Corresponde a la información que presenta la organización a manera de registros, o manuales. Aunque es bastante útil, no siempre está documentada por lo que hay que revisar otras fuentes.
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/tema2-7.png', alt='')
      .row(titulo="Evidencia testimonial")
        .col-md-6.mb-4.mb-md-0
          p Son las declaraciones y entrevistas hechas por personal interno y/ o externo de la organización. Estos deben ser corroborados con otro tipo de evidencias. 
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/tema2-8.png', alt='')
      .row(titulo="Evidencia electrónica")
        .col-md-6.mb-4.mb-md-0
          p Este tipo de evidencia es muy moderna porque con ella se utilizan herramientas informáticas de auditoría para obtención de datos o verificación de procesos mediante plataformas especializadas e #[em internet].
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/tema2-9.png', alt='')
      .row(titulo="Evidencia analítica")
        .col-md-6.mb-4.mb-md-0
          p Consiste en analizar, hacer cálculos y comparar la información encontrada en el proceso.      
        .col-md-6
          figure
            img(src='@/assets/curso/temas/tema2/tema2-10.png', alt='')

</template>

<script>
export default {
  name: 'Tema2',
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
