<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Entrevistas

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-down-left")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/tema4-1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La entrevista se considera la principal técnica para recopilar información, conformada de un grupo de preguntas preparadas que se van adaptando a medida que se recibe y dependiendo de las circunstancias, por lo que siempre se espera realizar preguntas cada vez más útiles para la auditoría. 
          br
          br
          | Es importante recordar que el auditor realiza las entrevistas de forma directa y corrobora la información de los aspectos que se están auditando. Las preguntas pueden ser realizadas de diferentes formas, tal como se muestra a continuación .

    .row.mb-5(data-aos="fade-down")
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex.align-items-stretch
        .tarjeta-numerada.color-primario.p-5
          .tarjeta-numerada__numero
            .h2 1
          p.text-center 
            b Preguntas abiertas
          p.text-center Son aquellas en las que el entrevistado responde con sus propias palabras.
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex.align-items-stretch
        .tarjeta-numerada.color-secundario.p-5
          .tarjeta-numerada__numero
            .h2 2
          p.text-center 
            b Preguntas cerradas
          p.text-center En este tipo el entrevistado elige una opción de respuesta  de entre varias alternativas.
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex.align-items-stretch
        .tarjeta-numerada.color-acento-contenido.p-5
          .tarjeta-numerada__numero
            .h2 3
          p.text-center 
            b Preguntas mixtas
          p.text-center Es la combinación de preguntas abiertas y cerradas.
      .col-md-6.col-xl.mb-4.mb-xl-0.d-flex.align-items-stretch
        .tarjeta-numerada.color-acento-botones.p-5
          .tarjeta-numerada__numero
            .h2 4
          p.text-center 
            b Preguntas de sondeo
          p.text-center Estas se utilizan para entender qué es lo que quiere decir el entrevistado.
    
    p.mb-4(data-aos="fade-down") Por otro lado, el auditor debe tener en cuenta unas reglas al momento de realizar la entrevista con el fin de que se pueda realizar de una forma adecuada, las cuales se encuentran en el siguiente listado:

    ul.lista-ul.ms-3.mb-4(data-aos="fade-down")
      li 
        i.lista-ul__vineta
        | Explicar el objetivo de la entrevista.
      li 
        i.lista-ul__vineta
        | Crear un ambiente ameno y de cordialidad en el cual el entrevistado se sienta cómodo, seguro y dispuesto a hablar con franqueza. 
      li 
        i.lista-ul__vineta
        | Dejar que cuente su relato y ayudar a complementarlo con hechos y fechas.
      li 
        i.lista-ul__vineta
        | Formular las preguntas con frases comprensibles.
      li 
        i.lista-ul__vineta
        | Evitar preguntas embarazosas de carácter personal o privado.
      li 
        i.lista-ul__vineta
        | Formular las preguntas directamente, es decir, sin rodeos. 

    p.mb-5(data-aos="fade-down-left") Para que la entrevista tenga éxito es importante tener un procedimiento bien estructurado, lo que llevará al auditor a realizar una excelente investigación, generando una serie de preguntas previamente establecidas, con el objetivo de recolectar la mayor información posible, lo que se podrá aprender a continuación:
    
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h3 Procedimiento estructurado para una auditoria de éxito

    PasosA.color-primario.mb-5(tipo="l" data-aos="fade-down-left")
      div
        h3 Inicio
        p De manera breve y amable el auditor explica el objetivo de la entrevista y solicita la colaboración para responder las preguntas lo más cercano que sea posible a la realidad.
      div
        h3 Apertura
        p En esta fase el auditor inicia el interrogatorio ciñéndose a la lectura de las preguntas que se encuentran en la encuesta.
      div
        h3 Cima
        p Aquí el auditor obtiene la mayor información posible, gracias a  su habilidad y experticia en el manejo de estas técnicas, ya que es en esta fase que se centra el objetivo de la entrevista.
      div
        h3 Cierre
        p En esta fase el auditor genera un espacio para que el entrevistado abiertamente proporcione información complementaria a las preguntas generadas para finalmente hacer el cierre a la entrevista.

    p.mb-5(data-aos="fade-down-left") El auditor, en su rol de investigador, tiene la flexibilidad de elegir entre diferentes tipos de entrevistas según los objetivos de la auditoría y las circunstancias específicas. Los tipos de entrevistas que pueden ser utilizados incluyen:

    .row.justify-content-center.mb-5
      .col-md-4.col-12(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema4/tema4-2.svg', alt='')
        div.mt-3
          h4 Según el ambiente 
          p Estas pueden ser de dos tipos:
          ul.lista-ul.ms-3.mb-3(data-aos="fade-down")
            li 
              i.lista-ul__vineta
              | #[b Entrevista facilitadora:] se caracteriza porque se crea un ambiente agradable y de confianza.
            li 
              i.lista-ul__vineta
              | #[b Entrevista de presión:] en la cual se crea un ambiente poco agradable con el objetivo de identificar rasgos en la personalidad del entrevistado. 
      .col-md-4.col-12(data-aos="fade-down")
        img(src='@/assets/curso/temas/tema4/tema4-3.svg', alt='')
        div.mt-3
          h4 Según el número de participantes 
          p Se pueden clasificar en:
          ul.lista-ul.ms-3.mb-3(data-aos="fade-down")
            li 
              i.lista-ul__vineta
              | #[b Individuales:] se caracteriza porque solo participan el auditor y el entrevistado.
            li 
              i.lista-ul__vineta
              | #[b Panel de expertos en una misma reunión:] grupo de auditores- persona entrevistada. 
            li 
              i.lista-ul__vineta
              | #[b Entrevistas encadenadas:] se caracterizan porque el entrevistado es examinado por diversos expertos en diferentes ambientes. 
      .col-md-4.col-12(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema4/tema4-4.svg', alt='')
        div.mt-3
          h4 Según el medio
          p Que se utilice para la entrevista pueden ser:
          ul.lista-ul.ms-3.mb-3(data-aos="fade-down")
            li 
              i.lista-ul__vineta
              | #[em In situ.]
            li 
              i.lista-ul__vineta
              | Telefónicas.
            li 
              i.lista-ul__vineta
              | Por #[em internet.] 

    p.mb-5(data-aos="fade-down-left") Las entrevistas son una herramienta clave en las auditorías y existen diferentes tipos de técnicas que el auditor y su equipo pueden utilizar según sus necesidades. Algunas de las técnicas de entrevista comunes en auditorías son:

    .row.align-items-center.mb-5(data-aos="fade-down")
      .col-12.col-lg-9.mb-5.mb-md-0
        LineaTiempoD.color-acento-botones.mb-5
          .row(numero="1" titulo="Entrevistas libres")
            .col-md-6.mb-4.mb-md-0
              p Se trabaja sin un orden establecido, sin estructura, con preguntas abiertas lo cual permite que el entrevistado responda abiertamente a manera de conversación.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/tema4-5.png', alt='')
          .row(numero="2" titulo="Entrevistas dirigidas")
            .col-md-6.mb-4.mb-md-0
              p Se realizan una serie de preguntas muy concretas y definidas con anterioridad, lo que impide profundizar en las respuestas, en consecuencia, se pueden perder detalles importantes.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/tema4-6.png', alt='')
          .row(numero="3" titulo="Entrevistas de exploración")
            .col-md-6.mb-4.mb-md-0
              p Se realizan una serie de preguntas ya preparadas con el objetivo de identificar qué tanto sabe el entrevistado del tema en cuestión.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/tema4-7.png', alt='')
          .row(numero="4" titulo="Entrevistas de comprobación")
            .col-md-6.mb-4.mb-md-0
              p Se realizan una serie de preguntas para contrarrestar la veracidad de las respuestas frente a una información previamente obtenida.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/tema4-8.png', alt='')
          .row(numero="5" titulo="Entrevistas de información")
            .col-md-6.mb-4.mb-md-0
              p En este tipo de entrevistas, se realizan preguntas para conocer qué tan informado se encuentra el entrevistado del tema.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/tema4-9.png', alt='')
          .row(numero="6" titulo="Entrevistas informales")
            .col-md-6.mb-4.mb-md-0
              p En estas no se realizan preguntas previamente hechas, se procura que el entrevistado se adapte a la situación y hable abiertamente del tema.
            .col-md-6
              figure
                img(src='@/assets/curso/temas/tema4/tema4-10.png', alt='')
      .col-12.col-lg-3.d-none.d-sm-none.d-lg-block
        img(src='@/assets/curso/temas/tema4/tema4-11.svg', alt='')


</template>

<script>
export default {
  name: 'Tema4',
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
