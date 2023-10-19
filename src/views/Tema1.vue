<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Técnicas de evaluación

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las técnicas de evaluación hacen referencia a los recursos de investigación, que el auditor utiliza para buscar la información necesaria para desarrollar el trabajo u organizar la que ha sido suministrada por la empresa (evidencia primaria) para realizar la verificación.
          br
          br
          | Es sumamente necesario que estas técnicas de evaluación compilen información que sea comprobable y verídica, por eso es importante que cada actividad verificada esté acompañada de su respectiva certificación o declaración. Por su parte el auditor debe tener el criterio necesario para adaptar sus conocimientos a los requerimientos de cada entidad, es decir que las técnicas dependen del auditor, las que se utilizan con mayor frecuencia se presentan a continuación:

    .tarjeta.tarjeta--azul.p-4.mb-5(data-aos="fade-down-left")
      SlyderA(tipo="b")
        .row
          .col-md-6.col-12.mb-4.mb-md-0
            h4 Estudio general
            p Se da cuando el auditor y su equipo identifican y evalúan las situaciones o actividades que pudieran requerir atención, y revisan los aspectos generales de la empresa, tales como: los estados financieros, los saldos, y las partidas importantes. 
          .col-md-6.col-12
            figure
              img(src='@/assets/curso/temas/tema1/tema1-2.png', alt='')
        .row
          .col-md-6.col-12.mb-4.mb-md-0
            h4 Análisis
            p Esta técnica es aplicable a los estados financieros de la empresa, como el estudio de las cuentas y gastos.
          .col-md-6.col-12
            figure
              img(src='@/assets/curso/temas/tema1/tema1-3.png', alt='')
        .row
          .col-md-6.col-12.mb-4.mb-md-0
            h4 Inspección
            p Es un examen físico de las instalaciones, materiales, equipos y  documentos con el objetivo de verificar la existencia de los mismos. 
            p Por ejemplo, algunos saldos activos se encuentran representados en bienes materiales y títulos de crédito, lo que constituye la materialización del dato registrado. 
          .col-md-6.col-12
            figure
              img(src='@/assets/curso/temas/tema1/tema1-4.png', alt='')
        .row
          .col-md-6.col-12.mb-4.mb-md-0
            h4 Confirmación
            p Es una comunicación por escrito de una persona ajena a la entidad, pero que se encuentra en disponibilidad de conocer la organización, y así comprobar o validar algún tipo de información.
            p Esta confirmación se obtiene cuando la empresa le solicita que responda por escrito al auditor de dos maneras: 
            ul.lista-ul.mb-3.ms-3
              li 
                i.lista-ul__vineta
                | Positiva cuando se envían los datos y la persona responde estén o no estén conformes. 
              li 
                i.lista-ul__vineta
                | Negativa  cuando se pide que responda sólo si están inconformes. 
          .col-md-6.col-12
            figure
              img(src='@/assets/curso/temas/tema1/tema1-5.png', alt='')
        .row
          .col-md-6.col-12.mb-4.mb-md-0
            h4 Investigación
            p Se presenta cuando el auditor de manera sistemática y organizada obtiene la información, datos y comentarios de los empleados de la organización auditada.
          .col-md-6.col-12
            figure
              img(src='@/assets/curso/temas/tema1/tema1-6.png', alt='')
        .row
          .col-md-6.col-12.mb-4.mb-md-0
            h4 Declaración
            p Esta muestra el resultado de las investigaciones realizadas con los empleados de la organización que por su importancia debe quedar a través de un documento debidamente firmado.
          .col-md-6.col-12
            figure
              img(src='@/assets/curso/temas/tema1/tema1-7.png', alt='')
        .row
          .col-md-6.col-12.mb-4.mb-md-0
            h4 Certificación
            p Es un documento legalizado con la firma y/o sello de alguna autoridad competente.
          .col-md-6.col-12
            figure
              img(src='@/assets/curso/temas/tema1/tema1-8.png', alt='')
        .row
          .col-md-6.col-12.mb-4.mb-md-0
            h4 Observación
            p Se revisa cómo en la práctica se realizan las actividades y se verifica in situ, es decir de forma física el desarrollo de las mismas.
          .col-md-6.col-12
            figure
              img(src='@/assets/curso/temas/tema1/tema1-9.png', alt='')
        .row
          .col-md-6.col-12.mb-4.mb-md-0
            h4 Cálculo
            p Es la verificación matemática de los datos suministrados o encontrados en la organización.
          .col-md-6.col-12
            figure
              img(src='@/assets/curso/temas/tema1/tema1-10.png', alt='')

    p.mb-5(data-aos="fade-down") Sin embargo, dependiendo del sitio donde se realice la auditoría, las técnicas de evaluación que se aplican pueden variar, estás se explican a continuación. 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-12(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 1.] #[i Técnicas de evaluación en auditoría] 
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            caption Nota. Adaptado de Escuela europea de excelencia. (s.f.). 
            thead
              tr.cabecera-a.text-center
                th Auditoría en el sitio con interacción de los auditados
                th Auditoría remota con interacción de los auditados
            tbody
              tr
                td.p-2 
                  ul.lista-ul.mb-3.ms-3
                    li 
                      i.lista-ul__vineta
                      | Realizar entrevistas
                    li 
                      i.lista-ul__vineta
                      | Revisar la lista de verificación y cuestionarios.
                    li 
                      i.lista-ul__vineta
                      | Revisar documentos.
                    li 
                      i.lista-ul__vineta
                      | Realizar muestreos.
                td.p-2 
                  ul.lista-ul.mb-3.ms-3
                    li 
                      i.lista-ul__vineta
                      | Comunicación interactiva con empleados clave.
                    li 
                      i.lista-ul__vineta
                      | Observar trabajo realizado con guía remota.
                    li 
                      i.lista-ul__vineta
                      | Completar listas de verificación y cuestionarios.
                    li 
                      i.lista-ul__vineta
                      | Revisión de documentos.
              tr.cabecera-a.text-center
                th Auditoría #[em in situ] con interacción de los auditados
                th Auditoría remota con interacción de los auditados
              tr
                td.p-2 
                  ul.lista-ul.mb-3.ms-3
                    li 
                      i.lista-ul__vineta
                      | Revisión de documentos.
                    li 
                      i.lista-ul__vineta
                      | Observación del trabajo.
                    li 
                      i.lista-ul__vineta
                      | Realizar muestreo de productos. 
                td.p-2 
                  ul.lista-ul.mb-3.ms-3
                    li 
                      i.lista-ul__vineta
                      | Revisión de documentos.
                    li 
                      i.lista-ul__vineta
                      | Observación del trabajo.
                    li 
                      i.lista-ul__vineta
                      | Analizar datos e información. 
      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
