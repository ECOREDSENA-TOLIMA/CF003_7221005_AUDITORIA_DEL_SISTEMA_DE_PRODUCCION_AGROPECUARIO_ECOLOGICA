<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    p.mb-5 A continuación, se describe el tema principal del componente formativo Ejecución de auditoría que es esencial en la búsqueda de prácticas sostenibles. Este proceso implica una revisión detallada de las actividades de una empresa o entidad para evaluar su impacto ambiental. Los auditores ecológicos analizan el cumplimiento de normativas ambientales, evalúan la gestión de recursos naturales y revisan los procesos de reducción de residuos y emisiones. Esto proporciona a las organizaciones una visión clara de su huella ecológica y les ayuda a tomar decisiones más responsables. La auditoría ecológica es un instrumento vital para la preservación del medio ambiente y la promoción de prácticas empresariales sustentables.
    //- p.mb-5 A continuación, se muestra un mapa conceptual con los elementos más importantes desarrollados en este componente.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="En la síntesis del componente formativo se muestran los principales temas de la ejecución de la auditoría. Entre estos: técnicas de evaluación, evidencias, observación, entrevistas, instrumentos, comunicación e informe.")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
