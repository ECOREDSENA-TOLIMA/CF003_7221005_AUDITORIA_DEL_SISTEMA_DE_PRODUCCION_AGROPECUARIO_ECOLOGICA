<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 8
      h1 Informe de auditoría

    p.mb-4(data-aos="fade-down-left") El informe de auditoría, un documento crucial que formaliza los resultados de la auditoría y proporciona conclusiones y recomendaciones basadas en la evaluación de aspectos específicos. A continuación, se describen las dos partes principales de la estructura típica de un informe de auditoría:

    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul" data-aos="fade-down")
      .row(titulo="Informe introductorio")
        .col-12.mb-4.mb-md-0
          ul.lista-ul.ms-3.md-ms-4.mb-0(data-aos="fade-down")
            li.mb-2
              i.lista-ul__vineta
              | #[b Portada:] contiene información básica como el nombre de la empresa auditada, el nombre del auditor o equipo auditor, la fecha del informe y otros datos de identificación.
            li.mb-2
              i.lista-ul__vineta
              | #[b Resumen ejecutivo:] una breve descripción de los hallazgos clave y las recomendaciones. Esto permite a los lectores obtener una visión general rápida de los resultados sin necesidad de leer el informe completo.
            li.mb-2
              i.lista-ul__vineta
              | #[b Tabla de contenidos:] enumera las secciones y los subtemas del informe para facilitar la navegación.
            li.mb-2
              i.lista-ul__vineta
              | #[b Introducción:] proporciona una visión general de los objetivos de la auditoría, el alcance de la misma y cualquier otra información relevante sobre el contexto de la auditoría.
            li.mb-2
              i.lista-ul__vineta
              | #[b Metodología:] explica cómo se llevó a cabo la auditoría, qué métodos y herramientas se utilizaron y cualquier otra información relacionada con la recopilación de datos.
      .row(titulo="Informe detallado")
        .col-12.mb-4.mb-md-0
          ul.lista-ul.ms-3.md-ms-4.mb-0(data-aos="fade-down")
            li.mb-2
              i.lista-ul__vineta
              | #[b Hallazgos de la auditoría:] en esta sección se detallan los resultados de la auditoría, incluyendo los aspectos positivos y negativos identificados. Se suelen proporcionar evidencias sólidas que respalden estos hallazgos.
            li.mb-2
              i.lista-ul__vineta
              | #[b Conclusiones:] aquí se resumen las conclusiones principales de la auditoría. Se destaca lo que funcionó bien y lo que necesita mejorar o corregirse.
            li.mb-2
              i.lista-ul__vineta
              | #[b Recomendaciones:] se incluyen recomendaciones específicas para abordar los problemas identificados en la auditoría. Estas recomendaciones deben ser claras, factibles y orientadas a la mejora.
            li.mb-2
              i.lista-ul__vineta
              | #[b Anexos:] los anexos pueden contener información adicional, como documentos de respaldo, gráficos, tablas o cualquier otro material que sea relevante para respaldar los hallazgos y las recomendaciones.
            li.mb-2
              i.lista-ul__vineta
              | #[b Firma del auditor:] el informe suele finalizar con la firma del auditor o equipo auditor responsable de la auditoría, lo que proporciona autenticidad y responsabilidad a los resultados presentados.

    p.mb-4(data-aos="fade-down-left") El informe de auditoría es un documento fundamental para la toma de decisiones en una organización, ya que proporciona información crítica sobre su desempeño y áreas de mejora. Además, puede servir como base para la innovación y el desarrollo de estrategias futuras. Es importante que el informe sea claro, objetivo y basado en evidencia para que sea efectivo en su propósito, en donde el auditor plasma las conclusiones y recomendaciones sobre los aspectos evaluados, tales como:

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-md-8(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Figura 4.] #[i Informe de auditoría] 
        figure 
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema8/fig4-a.svg', alt='En la figura 4 se muestran los diferentes informes que se presentan en una auditoría: administrativos, financiero y operativos.')  
          img.d-block.d-md-none(src='@/assets/curso/temas/tema8/fig4-b.svg', alt='En la figura 4 se muestran los diferentes informes que se presentan en una auditoría: administrativos, financiero y operativos.')  

    p.mb-4(data-aos="fade-down-left") Al finalizar la auditoría, se procede a entregar el informe al cliente, generalmente al concluir el proceso. Durante este momento, se llevan a cabo varias acciones y comunicaciones esenciales:

    .row.justify-content-center.mb-4(data-aos="fade-down-right")
      .col-12.col-md-12
        .tarjeta-avatar-b.custom-c.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema8/tema8-1.svg' alt='')
          .tarjeta.tarjeta--custom--borde
            .p-4
              p.mb-0 #[b Entrega del informe al cliente:] se proporciona el informe de auditoría al cliente o a la alta dirección de la organización auditada. Este proceso debe realizarse de manera formal y oportuna, asegurando que el informe llegue a las partes interesadas apropiadas.
      .col-12.col-md-12
        .tarjeta-avatar-b.custom-c.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema8/tema8-2.svg' alt='')
          .tarjeta.tarjeta--custom--borde
            .p-4
              p.mb-0 #[b Firma de las partes interesadas:] es común que las partes interesadas, incluyendo representantes de la organización auditada y del equipo auditor, firmen el informe como una confirmación de que han revisado y comprendido su contenido. Esta firma puede ser considerada como una aceptación formal de los hallazgos y recomendaciones.
      .col-12.col-md-12
        .tarjeta-avatar-b.custom-c.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema8/tema8-3.svg' alt='')
          .tarjeta.tarjeta--custom--borde
            .p-4
              p.mb-0 #[b Comunicación de plazos:] en el informe de auditoría, se suele indicar el tiempo estimado para la presentación del plan de acción en caso de haberse identificado no conformidades. Esto proporciona a la organización auditada una expectativa clara sobre cuándo se espera que entregue su plan de acción para abordar los problemas identificados durante la auditoría.
      .col-12.col-md-12
        .tarjeta-avatar-b.custom-c.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema8/tema8-4.svg' alt='')
          .tarjeta.tarjeta--custom--borde
            .p-4
              p.mb-0 #[b Seguimiento y coordinación:] después de la entrega del informe, es fundamental establecer una comunicación efectiva con la organización auditada para asegurarse de que comprenden completamente los hallazgos y recomendaciones, y para responder a cualquier pregunta o inquietud que puedan surgir. También es importante coordinar el seguimiento de la implementación del plan de acción y verificar que se están tomando las medidas adecuadas para abordar las no conformidades identificadas.
      .col-12.col-md-12
        .tarjeta-avatar-b.custom-c.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema8/tema8-5.svg' alt='')
          .tarjeta.tarjeta--custom--borde
            .p-4
              p.mb-0 #[b Planificación del plan de acción:] la organización auditada debe utilizar el tiempo estimado proporcionado en el informe para elaborar un plan de acción sólido que aborde las no conformidades, incluyendo acciones específicas, plazos y responsables.

    p.mb-5(data-aos="fade-down-left") La entrega del informe de auditoría marca el inicio de la fase de seguimiento y mejora. En este momento, se establece una colaboración efectiva entre el equipo auditor y la organización auditada para garantizar que se tomen medidas adecuadas y se logren mejoras significativas en base a los hallazgos de la auditoría. La comunicación clara y la cooperación son esenciales para el éxito en esta etapa.


</template>

<script>
export default {
  name: 'Tema8',
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
