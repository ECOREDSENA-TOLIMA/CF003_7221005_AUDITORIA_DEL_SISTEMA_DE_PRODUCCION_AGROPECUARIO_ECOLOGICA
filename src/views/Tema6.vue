<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Comunicación 

    p.mb-5(data-aos="fade-down-left") La comunicación es un aspecto crucial en el trabajo de auditoría. El auditor tiene la responsabilidad de comunicar los resultados de su auditoría, que incluyen:

    .tarjeta.color-primario.mb-5(data-aos="fade-down-left")
      .row.justify-content-center.align-items-center.p-4
        .col-md-4.col-10.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema6/tema6-1.png', alt='')
        .col-md-8.col-12
          ul.lista-ul.ms-3.mb-0(data-aos="fade-down")
            li
              i.lista-ul__vineta
              | #[b El estado en que encontró la organización:] esto implica una descripción detallada de la situación actual de la empresa en relación con los objetivos y criterios establecidos.
            li
              i.lista-ul__vineta
              | #[b Información adicional obtenida durante la auditoría:] el auditor debe proporcionar cualquier información adicional relevante que haya recopilado durante el proceso de auditoría y que pueda ser útil para la organización.
            li
              i.lista-ul__vineta
              | #[b Resultados relacionados con errores e irregularidades:] si se identifican errores o irregularidades durante la auditoría, el auditor debe comunicar estos hallazgos de manera clara y precisa. Esto puede incluir recomendaciones para corregir problemas o mejorar procesos.

    p.mb-5(data-aos="fade-down-left") La comunicación efectiva de estos resultados es esencial para que la organización pueda tomar medidas adecuadas y tomar decisiones informadas para abordar cualquier problema identificado durante la auditoría. La transparencia y la claridad en la comunicación son fundamentales para el éxito de una auditoría.

    .row.justify-content-center.align-items-center.mb-5
      .col-12(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Figura 2.] #[i Emisión de la comunicación] 
        figure
          img.d-none.d-sm-none.d-md-block(src='@/assets/curso/temas/tema6/fig2-a.svg', alt='En la figura 2, se muestra la forma como se emite la comunicación según la entidad o el auditor en el proceso de desarrollo de la auditoría.')  
          img.d-block.d-md-none(src='@/assets/curso/temas/tema6/fig2-b.svg', alt='En la figura 2, se muestra la forma como se emite la comunicación según la entidad o el auditor en el proceso de desarrollo de la auditoría.')  
          figcaption Nota. Adaptado de Rozas Flores, A. (s.f.). Comunicaciones de auditoría en entidades públicas. <a href="https://revistasinvestigacion.unmsm.edu.pe/index.php/quipu/article/view/5701/4933" target="_blank" style="color:blue">https://revistasinvestigacion.unmsm.edu.pe/index.php/quipu/article/view/5701/4933</a>

    p.mb-5(data-aos="fade-down-left") El documento mediante el cual el auditor comunica a la entidad los resultados de su auditoría es lo que se conoce como la comunicación, este debe tener unas condiciones muy claras las cuales se describen a continuación:
    
    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul" data-aos="fade-down")
      .row(titulo="Carta de representación o carta de gerencia")
        .col-12.mb-4.mb-md-0
          p Contiene la información detallada de la empresa,  por lo que es el punto de partida del auditor para realizar la auditoría, lo que permite que exista un mejor entendimiento entre el auditor y el auditado. Toda la información que suministre la empresa sería conveniente que se sustentara con evidencias. 
          p Algunas entidades desconocen cómo hacer la carta de representación, por lo que el auditor se encuentra en la capacidad de recomendar o sugerir un modelo de esta carta, esta debe presentarse en papel oficial de la organización con firma del funcionario del nivel jerárquico que corresponda, es decir el responsable. 
      .row(titulo="Reporte a partes externas")
        .col-12.mb-4.mb-md-0
          p Es una declaración que hace la gerencia o la administración sobre el sistema o estructura de control interno de la organización, para que sea tenida en cuenta por parte del auditor.
      .row(titulo="Memorando de requerimiento")
        .col-12.mb-4.mb-md-0
          p En este documento el auditor solicita de manera formal por parte de la organización, los documentos, información, componente o material que él considere que le pueda servir como evidencia sobre alguna situación en particular durante el desarrollo de la auditoría.
      .row(titulo="Comunicación de hallazgos o comunicación de observaciones")
        .col-12.mb-4.mb-md-0
          p El auditor líder comunica a los empleados los hallazgos encontrados durante el proceso de la auditoría y les solicita que presenten sus documentos con los comentarios o aclaraciones sobre alguna situación, para que sea tenido en cuenta en el informe final de la auditoría y en un plazo determinado. 
      .row(titulo="Comunicación de reparos")
        .col-12.mb-4.mb-md-0
          p Este documento contiene las observaciones que se pueden tener en cuenta para dar lugar al reparo, luego de haber comunicado los hallazgos y haberlos validado junto con el personal de la entidad auditada.
      .row(titulo="Informe especial")
        .col-12.mb-4.mb-md-0
          p Se genera cuando se encuentran evidencias graves y/o indicios de delito, en estos casos el auditor debe darle celeridad al caso, con su respectivo sustento técnico y normativo, para que la organización realice la respectiva revisión de manera inmediata. 
      .row(titulo="Dictamen")
        .col-12.mb-4.mb-md-0
          p Es el documento formal por el cual el auditor emite su juicio profesional para presentar los resultados de la organización. 
          p Puede ser una opinión normal con un párrafo explicativo, una opinión calificada o con salvedades,  un dictamen con opinión negativa, dictamen con abstención o denegación de opinión. 
      .row(titulo="Informe final")
        .col-12.mb-4.mb-md-0
          p Es un documento que formaliza los resultados de la auditoría, donde el auditor plasma las conclusiones y recomendaciones sobre los aspectos evaluados, como temas administrativos, financieros y operativos. 





</template>

<script>
export default {
  name: 'Tema6',
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
