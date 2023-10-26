<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Instrumentos de auditoría

    p.mb-5(data-aos="fade-down-left") Los instrumentos de auditoría son todas aquellas herramientas que el auditor y su equipo de trabajo pueden emplear para evidenciar los resultados, procesos y hallazgos en los diversos tipos de auditorías que se pueden llevar a cabo. En otras palabras, se trata de la manera en que se presenta la información o los resultados. A continuación, se mencionan algunos ejemplos de estos instrumentos. 

    .row.justify-content-center.align-items-center.mb-5
      .col-12.col-lg-12(data-aos="fade-right")
        .titulo-sexto.color-acento-contenido.mb-1
          p.titulo.pb-0.mb-0 #[b Tabla 2.] #[i Instrumentos de auditoría ] 
        .tabla-b.color-acento-contenido
          table(style="min-width:auto")
            thead
              tr.cabecera-a.text-center
                th
                  h3.mb-0 Instrumento
                th
                  h3.mb-0 Definición
            tbody
              tr
                th.p-2.text-center(style="width:25%") Cuestionarios
                td.p-2 Son formularios estructurados con una serie de preguntas diseñadas para obtener información específica. Pueden ser utilizados tanto en entrevistas como en encuestas escritas.
              tr
                th.p-2.text-center Entrevistas
                td.p-2 Son conversaciones dirigidas con individuos o grupos para obtener información relevante. El auditor puede utilizar preguntas abiertas, cerradas o mixtas según sea necesario.
              tr
                th.p-2.text-center Documentación
                td.p-2 La revisión de documentos es una parte fundamental de la auditoría. Esto implica examinar registros, informes, políticas, procedimientos, contratos y otros documentos relacionados con las actividades de la organización auditada.
              tr
                th.p-2.text-center Observación
                td.p-2 Puede ser directa de las operaciones y actividades en el lugar de trabajo. El auditor observa cómo se realizan los procesos y compara lo observado con los estándares y criterios establecidos.
              tr
                th.p-2.text-center Pruebas de control 
                td.p-2 Estas pruebas se utilizan para evaluar la efectividad de los controles internos en una organización. Pueden incluir la revisión de políticas y procedimientos, así como la verificación de su implementación.
              tr
                th.p-2.text-center Pruebas sustantivas
                td.p-2 Estas pruebas se centran en la verificación de la precisión de los registros financieros y otros datos críticos. Pueden incluir la revisión de transacciones individuales y saldos de cuentas.
              tr
                th.p-2.text-center Muestreo 
                td.p-2 En lugar de examinar todos los elementos, el auditor puede seleccionar una muestra representativa para su revisión. El muestreo es una técnica común para evaluar poblaciones grandes de datos.
              tr
                th.p-2.text-center Herramientas de #[em software]
                td.p-2 Los programas de auditoría asistida por computadora (CAAT) y otras herramientas de #[em software] pueden ser utilizados para automatizar tareas de auditoría, realizar análisis de datos y detectar anomalías.
              tr
                th.p-2.text-center Matrices de riesgo
                td.p-2 Se utilizan para identificar y evaluar los riesgos potenciales asociados con procesos y actividades específicas. Ayudan al auditor a enfocar sus esfuerzos en áreas críticas.
              tr
                th.p-2.text-center #[em Checklists]
                td.p-2 Las listas de verificación son herramientas útiles para asegurarse de que se hayan realizado todas las revisiones y se hayan cumplido todos los pasos necesarios durante la auditoría.

    .row.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-3.d-none.d-sm-none.d-lg-block
        img(src='@/assets/curso/temas/tema5/tema5-1.png', alt='')
      .col-12.col-lg-9.mb-5.mb-md-0
        p Durante el proceso de auditoría, se pueden encontrar diversos documentos que el auditor debe revisar y analizar minuciosamente. El objetivo principal de esta revisión es contrastar las actividades reales de la empresa con la documentación existente, asegurando así la conformidad con los estándares y procedimientos establecidos. A continuación, se muestran algunos ejemplos de documentación que puede tener una empresa:
        .cajon.color-secundario.row.p-4
          .col-md-6
            ul.lista-ul.ms-3.mb-3(data-aos="fade-down")
              li.mb-0
                i.lista-ul__vineta
                | Diagrama de flujo.
              li.mb-0 
                i.lista-ul__vineta
                | Diagrama de organización.
              li.mb-0 
                i.lista-ul__vineta
                | Carta de actividades.
              li.mb-0 
                i.lista-ul__vineta
                | Diagrama lineal de responsabilidades.
              li.mb-0 
                i.lista-ul__vineta
                | Análisis de muestras ambientales.
              li.mb-0 
                i.lista-ul__vineta
                | Pruebas de verificación.
              li.mb-0 
                i.lista-ul__vineta
                | Formatos.
              li.mb-0 
                i.lista-ul__vineta
                | Listas.
              li.mb-0 
                i.lista-ul__vineta
                | Gráficos.
              li.mb-0 
                i.lista-ul__vineta
                | Mapas.
          .col-md-6
            ul.lista-ul.ms-3.mb-3(data-aos="fade-down")
              li.mb-0
                i.lista-ul__vineta
                | Videos.
              li.mb-0 
                i.lista-ul__vineta
                | Cuestionarios.
              li.mb-0 
                i.lista-ul__vineta
                | Tablas de datos.
              li.mb-0 
                i.lista-ul__vineta
                | Hojas de verificación.
              li.mb-0 
                i.lista-ul__vineta
                | Histogramas.
              li.mb-0 
                i.lista-ul__vineta
                | Diagramas de dispersión.
              li.mb-0 
                i.lista-ul__vineta
                | Estado de flujos de efectivo.
              li.mb-0 
                i.lista-ul__vineta
                | Balances.
              li.mb-0 
                i.lista-ul__vineta
                | Indicadores.

    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Ciclo PHVA (Planificar-Hacer-Verificar-Actuar)

    p.mb-5(data-aos="fade-down-left") Es una poderosa herramienta de gestión de mejora continua que se utiliza para resolver problemas y optimizar procesos de manera constante y progresiva. Este ciclo consta de las siguientes etapas:

    .row.justify-content-center
      .col-12.col-md-10(data-aos="fade-down")
        .tarjeta-avatar-b.custom-c.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema5/tema5-2.svg' alt='')
          .tarjeta.tarjeta--custom--borde
            .p-4
              p.mb-0 #[b Planificar:] en esta etapa, se define y planifica lo que se va a hacer. Se establecen objetivos, metas y estrategias para abordar un problema o mejorar un proceso.
      .col-12.col-md-10(data-aos="fade-down")
        .tarjeta-avatar-b.custom-c.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema5/tema5-3.svg' alt='')
          .tarjeta.tarjeta--custom--borde
            .p-4
              p.mb-0 #[b Hacer:] en esta etapa, se ejecutan las acciones y actividades que fueron planificadas en la etapa anterior. Es el momento de implementar las soluciones propuestas.
      .col-12.col-md-10(data-aos="fade-down")
        .tarjeta-avatar-b.custom-c.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema5/tema5-4.svg' alt='')
          .tarjeta.tarjeta--custom--borde
            .p-4
              p.mb-0 #[b Verificar:] en esta etapa, se verifica si las acciones realizadas en la etapa "Hacer" se ajustan a lo que se había planificado. Se recopila información y datos para evaluar los resultados.
      .col-12.col-md-10(data-aos="fade-down")
        .tarjeta-avatar-b.custom-c.mb-4
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/tema5/tema5-5.svg' alt='')
          .tarjeta.tarjeta--custom--borde
            .p-4
              p.mb-0 #[b Actuar:] en esta etapa, se toman medidas basadas en los resultados obtenidos en la etapa de verificación. Si se identifican áreas de mejora, se aplican acciones correctivas y se ajusta el plan para continuar el ciclo de mejora continua.

    p.mb-5(data-aos="fade-down-left") El ciclo PHVA (Planificar, Hacer, Verificar, Actuar) es un proceso que se repite de manera constante y que permite a las organizaciones identificar y abordar eficazmente las deficiencias, reducir costos, aumentar la productividad y mejorar la rentabilidad. A continuación, se especifican las actividades que se llevan a cabo en cada etapa del ciclo:

    PasosA.color-primario.mb-5(tipo="l" data-aos="fade-down-left")
      .row.align-items-center
        .col-md-8.col-12.mb-4.mb-md-0
          h3 Planificar
          p En esta etapa se definen los objetivos y se identifican los procesos necesarios para realizar la auditoría acorde a la planificación y las políticas de la organización. También se establecen los criterios y los procesos a auditar. En este proceso de planificación se realizan los siguientes pasos:
          ol.lista-ol.ms-3.mb-3(data-aos="fade-down")
            li 
              span.text-bold 1. 
              | Se elabora el programa de auditoría.
            li 
              span.text-bold 2. 
              | Se definen los objetivos, el alcance, los criterios y los recursos.
            li 
              span.text-bold 3. 
              | Se revisa el procedimiento.
            li 
              span.text-bold 4. 
              | Se elige el auditor líder y se conforma el equipo de trabajo.
            li 
              span.text-bold 5. 
              | Se evalúa la viabilidad de la auditoría.
            li 
              span.text-bold 6. 
              | Se evalúan los documentos presentados por la organización.
            li 
              span.text-bold 7. 
              | Se prepara la auditoría #[em in situ].
            li 
              span.text-bold 8. 
              | Se preparan los documentos y la lista de verificación.
        .col-md-4.col-10
          figure
            img(src='@/assets/curso/temas/tema5/tema5-6.svg', alt='')
      .row.align-items-center.text-start
        .col-md-4.col-10.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema5/tema5-7.svg', alt='')
        .col-md-8.col-12
          h3 Hacer
          p En esta etapa  se ejecuta lo planteado, se realizan las correcciones de posibles errores y se llevan a cabo las acciones de mejora planteadas. Se realizan los siguientes pasos: 
          ol.lista-ol.ms-3.mb-3(data-aos="fade-down")
            li 
              span.text-bold 1. 
              | Se realiza la auditoría.
            li 
              span.text-bold 2. 
              | Se realiza la reunión de apertura.
            li 
              span.text-bold 3. 
              | Se definen los medios de comunicación.    
            li 
              span.text-bold 4. 
              | Se recolecta y se verifica la información.
            li 
              span.text-bold 5. 
              | Se identifican los posibles hallazgos.
            li 
              span.text-bold 6. 
              | Se producen las conclusiones y las recomendaciones.
            li 
              span.text-bold 7. 
              | Se realiza la reunión de cierre.
      .row.align-items-center
        .col-md-8.col-12.mb-4.mb-md-0
          h3 Verificar
          p En esta etapa se revisa que las acciones de mejora hayan sido realizadas, para tal fin se establece un tiempo determinado para evaluar si los cambios fueron efectivos. En esta etapa:
          ol.lista-ol.ms-3.mb-3(data-aos="fade-down")
            li 
              span.text-bold 1. 
              | Se realiza, aprueba y se comunica el informe.
            li 
              span.text-bold 2. 
              | Se termina la auditoría.
            li 
              span.text-bold 3. 
              | Se identifican las acciones correctivas, preventivas y planes de mejoramiento.
            li 
              span.text-bold 4. 
              | Se identifican las nuevas oportunidades de mejora continua.
        .col-md-4.col-10
          figure
            img(src='@/assets/curso/temas/tema5/tema5-8.svg', alt='')
      .row.align-items-center.text-start
        .col-md-4.col-10.mb-4.mb-md-0
          figure
            img(src='@/assets/curso/temas/tema5/tema5-9.svg', alt='')
        .col-md-8.col-12
          h3 Actuar
          p Si los resultados no se ajustan a las expectativas y objetivos definidos, en esta etapa se realizan las correcciones y/o modificaciones necesarias y se toman las acciones pertinentes para la mejora continua en el desarrollo de procesos. 
            
    p.mb-4(data-aos="fade-down-left") La Norma ISO 19011:2018 proporciona Directrices para la Auditoría de Sistemas de Gestión, abordando auditorías internas de primera parte, así como auditorías externas de segunda y tercera parte. Esta norma se basa en un enfoque más amplio y orientado a la gestión de riesgos.
    p.mb-5(data-aos="fade-down-left") Dentro de su contenido, la Norma ISO 19011:2018 establece un diagrama de flujo que sirve como guía para diferentes tipos de organizaciones en relación con los requisitos de los sistemas de gestión y cómo abordar las auditorías. Esto significa que las organizaciones pueden utilizar esta norma como una herramienta para planificar y llevar a cabo auditorías internas y externas, teniendo en cuenta el enfoque de gestión de riesgos.

    .row.justify-content-center.align-items-center.mb-5
      .col-12(data-aos="fade-right")
        .titulo-sexto.color-primario.mb-1
          p.titulo.pb-0.mb-0 #[b Figura 1.] #[i Diagrama de flujo PHVA para la Norma ISO 19011:2018] 
        figure  
          img(src='@/assets/curso/temas/tema5/fig1.svg', alt='En la figura 1, se muestra el paso a paso por medio de un diagrama de flujo del ciclo PHVA según lo establecido por la Norma ISO 19011:2018, teniendo en cuenta sus principales características y relaciones.')  

    p.mb-4(data-aos="fade-down-left") Es importante destacar que el auditor debe revisar detenidamente el programa de auditoría establecido por la empresa. Esto es esencial para tener una comprensión clara de los objetivos de la organización y considerar factores tanto internos como externos que afecten directamente a la compañía. Al hacerlo, se deben tener en cuenta los siguientes puntos:

    ul.lista-ul--color.lista-ul--separador.ms-3.mb-4(data-aos="fade-down")
      li 
        i.fas.fa-check
        | #[b Las necesidades y expectativas de las partes interesadas:] es fundamental comprender las expectativas de los grupos de interés, como clientes, empleados, proveedores y reguladores, ya que esto puede influir en los objetivos de la auditoría.
      li 
        i.fas.fa-check
        | #[b Los requisitos de seguridad y confidencialidad de la información recopilada:] es esencial garantizar que se cumplan los requisitos de seguridad y confidencialidad al recopilar y manejar información durante la auditoría.

    p.mb-4(data-aos="fade-down-left") El objetivo de revisar el programa de auditoría es asegurar el éxito del mismo y cumplir con las expectativas del cliente. El programa incluirá detalles sobre los objetivos del plan de auditoría, riesgos, oportunidades, acciones a tomar, alcance, duración, tipos de auditoría, criterios y métodos, así como la selección del equipo de auditores. La revisión del programa es un paso importante para garantizar que la auditoría se realice de manera efectiva y eficiente.


</template>

<script>
export default {
  name: 'Tema5',
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
