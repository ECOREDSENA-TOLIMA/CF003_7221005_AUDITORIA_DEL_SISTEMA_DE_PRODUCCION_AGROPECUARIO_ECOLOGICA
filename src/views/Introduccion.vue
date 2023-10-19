<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-primario
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .cajon-b.color-acento-contenido.p-3.mb-5(data-aos="fade-down")
      p.mb-0 Es fundamental comprender que, en la sociedad actual, la realización de auditorías es esencial para garantizar la calidad de los productos, bienes y servicios que se ofrecen en el mercado global. Esto se aplica también al sector de producción agropecuaria ecológica, donde la auditoría desempeña un papel importante para asegurar el cumplimiento de los estándares y regulaciones que respaldan la producción de alimentos ecológicos. En este componente, se abordan aspectos clave relacionados con la ejecución de auditorías, la normativa aplicable, las herramientas disponibles y la elaboración de informes finales, con el objetivo de asegurar la calidad y la integridad de los productos agropecuarios ecológicos certificados. Te invito a revisar el siguiente video para obtener más información al respecto.

    figure(data-aos="fade-right")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/" title="Ejecución de auditoría" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Ejecución de auditoría

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
