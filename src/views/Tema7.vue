<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Hallazgos

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema7/tema7-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Los hallazgos en una auditoría son el resultado de evaluar la evidencia recopilada en relación con los criterios de auditoría. Estos hallazgos pueden indicar conformidad (cuando se cumplen los criterios), no conformidad (cuando no se cumplen) o también pueden llevar a la identificación de oportunidades para mejorar o el registro de buenas prácticas. Cuando los criterios de auditoría se basan en requisitos legales o reglamentarios, los hallazgos pueden denominarse de cumplimiento (cuando se cumple con la normativa) o no cumplimiento (cuando no se cumple).

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-12(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 3.] #[i Conformidad y No conformidad ] 
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            caption Nota. Sena (2022).
            thead
              tr.cabecera-a.text-center
                th(colspan="2") 
                  h3.mb-0 Conformidad
                th 
                  h3.mb-0 No conformidad
              tr.cabecera-b.text-center
                th
                  h3.mb-0 Observación
                th 
                  h3.mb-0 Oportunidad de mejora
                th 
                  h3.mb-0 Incumplimiento
            tbody
              tr
                td.p-2.p-md-3 
                  p Si cumple, pero puede convertirse en incumplimiento, porque existe una inconsistencia en cómo se desarrolla la actividad o proceso.
                  p Es necesario realizar correcciones.
                td.p-2.md-p-3
                  p Si cumple, pero existe posibilidad de mejorar para optimizar la actividad o proceso.
                  p No es obligatorio realizar correcciones.
                td.p-2.md-p-3
                  p Incumplimiento de un requisito encontrado en la auditoría.
              
    p.mb-5(data-aos="fade-down-left") Cuando se identifica una “No conformidad”, se deben realizar los pasos que se muestran a continuación:

    .row.justify-content-center.align-items-center.mb-5
      .col-12(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Figura 3.] #[i Proceso de gestión de una “No conformidad”] 
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema7/fig3-a.svg', alt='En la figura 3 se muestra el proceso de gestión para tratar una No conformidad.')  
          img.d-block.d-md-none(src='@/assets/curso/temas/tema7/fig3-b.svg', alt='En la figura 3 se muestra el proceso de gestión para tratar una No conformidad.')  

    p.mb-4(data-aos="fade-down-left") A juicio del auditor, los hallazgos le permiten identificar hechos o circunstancias importantes que influyen en las actividades de la organización y que merecen cierto grado de atención en el informe final de auditoría.
    p.mb-5(data-aos="fade-down-left") Cuando se evidencia el hallazgo, existe la #[b “condición”] que es un texto que describe la situación encontrada, el #[b “criterio”] donde el auditor describe la norma con la cual está contrastando la situación encontrada, #[b “causa”] el auditor detalla las razones por las cuales se presentó la situación, y el #[b “efecto”] que es la consecuencia que genera la situación encontrada. Algunas de las causas y consecuencias que se pueden identificar se encuentran descritas en la siguiente tabla:


    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-12(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 4.] #[i Causas y consecuencias de los hallazgos ] 
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            caption Nota. Sena (2022).
            thead
              tr.cabecera-a.text-center
                th
                  h3.mb-0 Causas 
                th 
                  h3.mb-0 Consecuencias
            tbody
              tr
                td.p-2.p-md-3 
                  ul.lista-ul.ms-3.mb-0(data-aos="fade-down")
                    li.mb-2
                      i.lista-ul__vineta
                      | Desconocimiento de la normatividad.
                    li.mb-2
                      i.lista-ul__vineta
                      | Falta de supervisión y seguimiento.
                    li.mb-2
                      i.lista-ul__vineta
                      | Desconocimiento del problema. 
                    li.mb-2
                      i.lista-ul__vineta
                      | Falta de capacitación. 
                    li.mb-2
                      i.lista-ul__vineta
                      | Falta de recursos.
                    li.mb-2
                      i.lista-ul__vineta
                      | Falta de coordinación y comunicación.
                    li.mb-2
                      i.lista-ul__vineta
                      | Falta de información.
                    li.mb-2
                      i.lista-ul__vineta
                      | Retrasos. 
                    li.mb-2
                      i.lista-ul__vineta
                      | Negligencia o descuido.
                    li.mb-2
                      i.lista-ul__vineta
                      | Uso inadecuado de los recursos.
                    li.mb-2
                      i.lista-ul__vineta
                      | Falta de sentido de pertenencia con la organización.
                td.p-2.p-md-3 
                  ul.lista-ul.ms-3.mb-0(data-aos="fade-down")
                    li.mb-2
                      i.lista-ul__vineta
                      | Pérdida de recursos.
                    li.mb-2
                      i.lista-ul__vineta
                      | Incremento en los costos.
                    li.mb-2
                      i.lista-ul__vineta
                      | Pérdida de credibilidad institucional.
                    li.mb-2
                      i.lista-ul__vineta
                      | Pérdidas de clientes potenciales.
                    li.mb-2
                      i.lista-ul__vineta
                      | Gastos indebidos.
                    li.mb-2
                      i.lista-ul__vineta
                      | Demandas.
                    li.mb-2
                      i.lista-ul__vineta
                      | Desmotivación del personal.
                    li.mb-2
                      i.lista-ul__vineta
                      | Sanciones.
                    li.mb-2
                      i.lista-ul__vineta
                      | Inefectividad en el trabajo.      
                    li.mb-2
                      i.lista-ul__vineta
                      | Incumplimiento de la planeación. 

    p.mb-4(data-aos="fade-down-left") Por consiguiente, cuando el equipo auditor desarrolla el proceso, define los hallazgos por sus características las cuales se encuentran en la siguiente lista:

    ul.lista-ul.ms-3.mb-4(data-aos="fade-down")
      li.mb-0
        i.fas.fa-check
        | Basado en hechos, con evidencias argumentadas y sustentadas.
      li.mb-0
        i.fas.fa-check
        | Se pueden obtener de la revisión de los documentos.
      li.mb-0
        i.fas.fa-check
        | Mediante una respuesta rápida se puede llegar a ejecutar.
      li.mb-0
        i.fas.fa-check
        | Se puede llegar a que la información sea objetiva y detallada.


</template>

<script>
export default {
  name: 'Tema7',
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
