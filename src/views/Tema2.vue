<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-botones(data-aos='flip-left')
      .titulo-principal__numero
        span 2
      h1 Territorio
    .row.mb-5.align-items-center.slideInLeft
      .col-lg-3(data-aos='flip-right') 
        figure
          img.nW.centered(src='@/assets/curso/t2-i1.jpg', alt='imagen decorativa')      
      .col-lg-9(data-aos='slide-left') 
        .cajon-b.color-primario.p-3.mb-5
          p.mb-3  Es usado en diferentes ámbitos como la Geografía, la Sociología, el urbanismo, la Arquitectura, la planificación y actualmente, se ha vuelto común en el estudio de la Agroecología.
          p.mb-0  Este concepto ha venido evolucionando desde considerarlo solamente como un espacio físico donde interactúan los habitantes hacia una definición más compleja.  

    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              h2.mb-0 Según la Unidad de Planificación Rural y Agropecuaria – UPRA (2018) 
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p “El territorio es un espacio geográfico en el que una persona, grupo de personas y organizaciones económicas y sociales ejercen control y dominio. La interacción de intereses y poderes de los diversos actores y organizaciones sobre el territorio configura un sistema espacial socioeconómico, institucional y político, en permanente transformación, que se interrelaciona a través de las estructuras y funcionalidades del territorio, genera sinergias y conflictos que requieren ser encauzados a través de la planificación y gestión del ordenamiento territorial, buscando transformar el crecimiento en desarrollo”.


    p.mb-5  En el territorio se pueden identificar varias dimensiones:

    TabsA.color-primario.mb-5
      .tarjeta.tarjeta--gris.p-4(titulo="Dimensión ambiental")
        .row
          .col-lg-7
            h4 Dimensión ambiental
            p Tiene en cuenta los  recursos naturales, ecosistemas y las fuentes de energía. 
          .col-lg-5
            figure.slideInLeft
              img.nW.centered(src='@/assets/curso/t2-t1.png', alt='imagen decorativa')  
        
      .tarjeta.tarjeta--gris.p-4(titulo="Dimensión económica")
        .row
          .col-lg-7
            h4 Dimensión económica
            p Tiene en cuenta las  formas de producción, usos del suelo, actividades económicas.
          .col-lg-5
            figure.slideInLeft
              img.nW.centered(src='@/assets/curso/t2-t2.png', alt='imagen decorativa')  

      .tarjeta.tarjeta--gris.p-4(titulo="Dimensión sociocultural")
        .row
          .col-lg-7
            h4 Dimensión sociocultural
            p Tiene en cuenta el recurso humano, cultura, identidad.
          .col-lg-5
            figure.slideInLeft
              img.nW.centered(src='@/assets/curso/t2-t3.png', alt='imagen decorativa')  

      .tarjeta.tarjeta--gris.p-4(titulo="Dimensión espacial")
        .row
          .col-lg-7
            h4 Dimensión espacial
            p Tiene en cuenta las características del espacio, rural, urbano, regional, distribución del capital social, infraestructuras.
          .col-lg-5
            figure.slideInLeft
              img.nW.centered(src='@/assets/curso/t2-t4.png', alt='imagen decorativa')  
      
      .tarjeta.tarjeta--gris.p-4(titulo="Dimensión institucional")
        .row
          .col-lg-7
            h4 Dimensión institucional
            p Tiene en cuenta la capacidad de planificación, gestión de las entidades públicas, proyectos, empoderamiento, gobernanza.
          .col-lg-5
            figure.slideInLeft
              img.nW.centered(src='@/assets/curso/t2-t5.png', alt='imagen decorativa')  


    h3.titulo-tercero 
      i.fas.fa-leaf
      | &nbsp;Dimensiones del territorio
    .row.mb-5
      .col-lg-2
        figure(data-aos='flip-left')
          img.nW.centered(src='@/assets/curso/t2-ic1.svg', alt='imagen decorativa')          
      .col-lg-10(data-aos='slide-left')
        p.mb-3  El estudio del territorio, de sus dimensiones, elementos, relaciones permiten identificar diferentes variables que afectan el avance de un agroecosistema y da insumos para realizar el diagnóstico y la planificación del sistema de producción, pero también del territorio en todo su conjunto. 
        p.mb-0  Para conocer un poco más del territorio, fuentes de información, suelo y biodiversidad, se invita a observar el siguiente video:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/a2Yk7piezaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)


    h3.titulo-tercero 
      i.fas.fa-leaf
      | &nbsp;Fuentes de información
    p.mb-5  Son todos los soportes que facilitan dar respuesta a un requerimiento de información. Estas pueden ser de diferentes tipos:

    .row.mb-5.justify-content-center
      .col-sm-6.col-xl-4.mb-4.mb-sm-0
        .tarjeta.tarjeta-slide.derecha.color-primario.mh-300(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/t2-c1.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5.text-center
              .h4 Primarias
              p Fuentes originales, como libros, artículos, tesis.


      .col-sm-6.col-xl-4.mb-4.mb-sm-0
        .tarjeta.tarjeta-slide.derecha.color-primario.mh-300(@mouseover="indicadorTarjetaSlide = false")
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/t2-c2.svg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5.text-center
              .h4 Secundarias
              p Derivadas o producto de la interpretación de otras fuentes, como un cuadro con información estadística elaborado a partir de datos de diferentes fuentes o revistas de resúmenes.

    .row.mb-5.justify-content-center
      .col-lg-8
        .cajon.color-acento-botones.p-4
          p.mb-0  Se recomienda en cualquier estudio buscar en lo posible fuentes primarias fiables.

    h3.titulo-tercero 
      i.fas.fa-leaf
      | &nbsp;Suelo
    p.mb-5 Para entender el suelo es necesario considerar las siguientes premisas (Sánchez y Praguer, 2012):

    .neg-margin-x.bg-curved.custom-dots
      .row.justify-content-center
        .col-lg-8
          ImagenInfograficaB.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/t2-info1.svg', alt='infografia del suelo')

            div(x="47%" y="44%" tooltip="Ver más" numero="+")
              .tarjeta.white-card.p-4
                .row.align-items-center
                  .col-lg-5
                    figure
                      img(src='@/assets/curso/t2-if0.png', alt='imagen decorativa')
                  .col-lg-7
                    p Una de las tres fuentes de biodiversidad en el mundo provienen del suelo, por lo que al considerar la variable biodiversidad en un agroecosistema requiere obligatoriamente involucrar la que está presente en el suelo (Acevedo, 2004).        
          
            div(x="0%" y="23%" tooltip="Ver más" numero="1")
              .tarjeta.white-card.p-4            
                .row.align-items-center
                  .col-lg-6
                    figure
                      img(src='@/assets/curso/t2-if1.png', alt='imagen decorativa')
                  .col-lg-6             
                    p Es un sistema vivo, organizado, con una estructura.      

            div(x="10%" y="65%" tooltip="Ver más" numero="2")
              .tarjeta.white-card.p-4            
                .row.align-items-center
                  .col-lg-6
                    figure
                      img(src='@/assets/curso/t2-if2.png', alt='imagen decorativa')
                  .col-lg-6             
                    p En él se generan diferentes procesos metabólicos y de ciclaje de nutrientes.  

            div(x="47%" y="92%" tooltip="Ver más" numero="3")
              .tarjeta.white-card.p-4            
                .row.align-items-center
                  .col-lg-6
                    figure
                      img(src='@/assets/curso/t2-if3.png', alt='imagen decorativa')
                  .col-lg-6             
                    p Es un sistema resiliente, con la capacidad de adaptarse a sucesos extremos. 

            div(x="83%" y="65%" tooltip="Ver más" numero="4")
              .tarjeta.white-card.p-4            
                .row.align-items-center
                  .col-lg-6
                    figure
                      img(src='@/assets/curso/t2-if4.png', alt='imagen decorativa')
                  .col-lg-6             
                    p Su fertilidad y salud son indispensables en el desarrollo de los cultivos.
            div(x="95%" y="23%" tooltip="Ver más" numero="5")
              .tarjeta.white-card.p-4            
                .row.align-items-center
                  .col-lg-6
                    figure
                      img(src='@/assets/curso/t2-if5.png', alt='imagen decorativa')
                  .col-lg-6             
                    p Es uno de los pilares más importantes de la agricultura ecológica y agroecológica y sobre él, se fundamentan quizás las bases más importantes para el diseño de un agroecosistema. Aparentemente, es un recurso estático y muerto, pero guarda una gran riqueza química y biológica que no puede ser vista con el ojo humano.


    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-acento-botones.p-4
          p.mb-0  Otro aspecto de gran importancia para los suelos es la materia orgánica, es decir, la descomposición biológica de residuos orgánicos en el sitio, y que afecta directamente las propiedades físicas y químicas como la estructura, porosidad, infiltración, retención de humedad, biodiversidad y fertilidad, y eso a su vez genera un impacto en la calidad nutricional de los alimentos que se producen.





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
