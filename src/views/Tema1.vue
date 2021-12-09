<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-botones(data-aos='flip-left')
      .titulo-principal__numero
        span 1
      h1 Producción agropecuaria ecológica y agroecológica

    p.mb-5(data-aos='flip-up')  Surge como corriente o enfoque alternativo de producción, después de enfrentar las imposiciones de un modelo de <b>“Revolución verde”</b>, en el que predominaban los monocultivos, las semillas mejoradas, el uso de maquinaria agrícola, la aplicación de fertilizantes y productos agrotóxicos. Entre las consecuencias de este modelo están:
    .row.mb-5
      .col-lg-5.slideInUp
        figure(data-aos='flip-left')
          img(src="@/assets/curso/t1-i1.jpg", alt="imagen decorativa")
      .col-lg-7
        ul.lista-ul.slideInLeft
          li 
            i.fas.fa-leaf
            p.mb-0 Ecosistemas alterados debido a los monocultivos y a los sistemas de producción intensivos.
          li 
            i.fas.fa-leaf
            p.mb-0 Contaminación de ecosistemas.
          li 
            i.fas.fa-leaf
            p.mb-0  Disminución de la biodiversidad. 
          li 
            i.fas.fa-leaf
            p.mb-0  Aparición de plagas y enfermedades resistentes. 
          li 
            i.fas.fa-leaf
            p.mb-0  Impacto en la variabilidad climática. 
          li 
            i.fas.fa-leaf
            p.mb-0  Degradación de los suelos. 
          li 
            i.fas.fa-leaf
            p.mb-0  Aparición de enfermedades en los humanos, asociadas a la toxicidad de los plaguicidas. 
          li 
            i.fas.fa-leaf
            p.mb-0  Intoxicación por plaguicidas. 
          li 
            i.fas.fa-leaf
            p.mb-0  Pérdida de la soberanía alimentaria. 
          li 
            i.fas.fa-leaf
            p.mb-0  Desplazamiento del conocimiento tradicional de los campesinos por paquetes comerciales de las multinacionales. 
          li 
            i.fas.fa-leaf
            p.mb-0  La dependencia económica de paquetes tecnológicos para poder producir. 
          li 
            i.fas.fa-leaf
            p.mb-0  Endeudamiento de los agricultores por dependencia económica de insumos y paquetes tecnológicos. 

    p.mb-5  Ante esta problemática, la agricultura ecológica (que es sinónimo de biológica u orgánica según la normatividad colombiana expedida por el Ministerio de Agricultura y Desarrollo Rural) y la agroecológica han adquirido gran importancia en los últimos años, dados los beneficios sociales, económicos y medioambientales que conllevan, así como por la producción de alimentos inocuos, obtenidos sin la aplicación de plaguicidas, que son muy apetecidos por los consumidores a nivel mundial.

    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-acento-botones.p-4
          p.mb-0  Las prácticas de manejo a favor de la biodiversidad y el cuidado del medio ambiente, la labranza mínima del suelo, la recuperación de conocimientos tradicionales, el no uso de agrotóxicos y el ciclaje de nutrientes en los agroecosistemas son algunas de las prácticas que caracterizan a estos sistemas de producción.

    .neg-margin-x.mb-5.bg-curved
      .row.justify-content-center
        .col-lg-6
          ImagenInfografica.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/t1-info1.svg', alt='Texto que describa la imagen')

            .tarjeta.color-acento-botones.p-3(x="0%" y="48%" numero="")
              p Según la encuesta de FiBL-IFOAM (2021), existen en el mundo un total de 72,3 millones de hectáreas en producción ecológica.

            .tarjeta.color-acento-botones.p-3(x="87%" y="10%" numero="")
              p Siendo Australia el país con mayor área (35,7 millones de hectáreas).

            .tarjeta.color-acento-botones.p-3(x="97%" y="48%" numero="")
              p Le siguen Argentina (3,7 millones de hectáreas).

            .tarjeta.color-acento-botones.p-3(x="87%" y="87%" numero="")
              p España con 2,4 millones de hectáreas.


    #t_1_1.titulo-segundo.color-acento-botones
      h2 1.1  Marco normativo de la producción agropecuaria ecológica
    .row.mb-5.justify-content-center(data-aos='flip-up')
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t1-i2.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0  En Colombia, el Ministerio de Agricultura y Desarrollo Rural (MADR) y la Federación Internacional de Movimientos de Agricultura. (IFOAM) definen los conceptos de <b>producción ecológica, biológica u orgánica, agricultura orgánica y agroecología de la siguiente manera:</b>    

    //-- Aqui vienen los cards modales

    p.mb-5  Es importante diferenciar estos enfoques, que son similares y buscan objetivos comunes, pero que presentan diferencias en su implementación:

    .row.mb-5.justify-content-center
      .col-lg-4
        .tarjeta.c1.p-4.text-center.h-100(data-aos='flip-left')
          figure.mb-3
            img.nW.centered(src='@/assets/curso/t1-ic1.png', alt='icono decorativo')
          p.mb-2   La agricultura ecológica, biológica u orgánica se emplea para la producción certificada por una tercera parte u organismo de certificación.
      .col-lg-4
        .tarjeta.c1.p-4.text-center(data-aos='flip-right')
          figure.mb-3
            img.nW.centered(src='@/assets/curso/t1-ic2.png', alt='icono decorativo')
          p.mb-2   La agroecología no está regulada, y tiene un enfoque más holístico, aunque algunas veces están certificadas por una tercera parte o por un esquema alternativo.

    p.mb-5  En ese sentido, el MADR expidió la normatividad de producción ecológica certificada para el uso del “Sello de Alimento Ecológico”, como se muestra en la siguiente tabla.
    
    .row.mb-5.justify-content-center
      .col-lg-10
        figcaption.customCaption.mb-3  <b>Tabla</b> Reglamentación de la producción ecológica en Colombia
        .tabla-a.color-acento-botones.mb-5(data-aos='slide-left') 
          table
            thead
              tr
                th.mw250  Acto administrativo
                th Descripción
            tbody
              tr
                td.text-center Resolución 0148 de 2004
                td Por la cual se crea el Sello de Alimento Ecológico y se reglamenta su otorgamiento y uso. 
              tr
                td.text-center Resolución 0148 de 2004
                td Por la cual se adopta el Reglamento para la producción primaria, procesamiento, empacado, etiquetado, almacenamiento, certificación, importación, comercialización y se establece el Sistema de Control de Productos Agropecuarios Ecológicos.
              tr
                td.text-center Resolución 036 de 2007
                td Por la cual se modifica la Resolución 148 del 15 de marzo de 2004. 
              tr
                td.text-center Reglamento (Versión 01)
                td  Reglamento para la producción primaria, procesamiento, empacado, etiquetado, almacenamiento, certificación, importación y comercialización de productos agropecuarios ecológicos. 
              tr
                td.text-center Resolución 199 de 2016
                td Por la cual se modifica parcialmente el Reglamento para la producción primaria, procesamiento, empacado, etiquetado, almacenamiento, certificación, importación y comercialización de productos agropecuarios ecológicos – Versión 1, adoptado mediante la Resolución 0187 de 2006.




    Separador
    br
    br
    #t_1_2.titulo-segundo.color-acento-botones
      h2 1.2  Sellos de alimentos ecológicos
    p.mb-5  Dependiendo del origen de los alimentos se pueden clasificar como:
    .row.mb-5
      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t1-c1.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              br
              .h4 Alimentos naturales
              p Son los que han sido sembrados en cultivos de desarrollo natural, donde han recibido los cuidados necesarios para evitar enfermedades y plagas, a pesar de tener que recurrir a algunos pesticidas y/o sustancias químicas.    
              br

      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t1-c2.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              br
              .h4 Alimentos ecológicos
              p Se llevan a cabo con la utilización de tecnologías agroecológicas, mejorando las características de los suelos, teniendo en cuenta el  control biológico de plagas, sin recurrir a insumos químicos  y respetando la diversificación de especies, donde se valora la salud de los consumidores y del medio ambiente.
              br

      .col-sm-6.col-xl-4.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip.color-primario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/t1-c3.svg')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5
              br
              .h4 Alimentos transgénicos
              p Hacen parte de un proceso de ingeniería genética, en el cual el organismo es modificado a través de la incorporación de genes de distintas especies, con el fin de engendrar nuevas características para que sea resistente a los herbicidas, plagas y adversidades del entorno.
              br

    p.mb-5  Para complementar la identificación de la procedencia de los alimentos, estos obtienen los Sellos de Alimentos.

    TabsC.color-acento-botones.mb-5
      .py-3.py-md-4(titulo="Sello de Alimento <br>Ecológico del MADR")
        .row.align-items-center
          .col-md-6
            figure
              img.nW.centered(src='@/assets/curso/t1-t1.png', alt='logo MADR')          
          .col-md-6.mb-4.mb-md-0
            h4 Sello de Alimento Ecológico del MADR
            p Este sello se emplea para el comercio nacional y es de observancia voluntaria, es decir, lo usan los productores que voluntariamente se certifiquen bajo la normatividad en mención.
        
      .py-3.py-md-4(titulo="Sellos orgánicos de Estados Unidos,<br> Japón, Unión Europea, Canadá y Corea")
        .row.align-items-center
          .col-md-6
            figure
              img.nW.centered(src='@/assets/curso/t1-t2.png', alt='ejemplos de sellos')          
          .col-md-6.mb-4.mb-md-0
            h4 Sellos orgánicos de Estados Unidos, Japón, Unión Europea, Canadá y Corea
            p Los sellos internacionales de productos ecológicos son creados por cada país y son de observancia obligatoria para los productores nacionales que desean exportar sus productos.

    .row.mb-5
      .col-lg-8(data-aos='slide-left') 
        p.mb-4  El sello de alimento nacional fue creado con el objeto de promover la producción, la comercialización y consumo de alimentos obtenidos mediante sistemas de producción ecológica, y de proporcionar al consumidor información oportuna, confiable y suficiente para diferenciar los productos agropecuarios ecológicos de los convencionales.
        .cajon.color-acento-botones.p-4
          p.mb-0  Todos los países deben certificarse para obtener cada sello internacional, en el caso de Colombia a la fecha (octubre 2021), no dispone de tratados de equivalencia comercial de productos ecológicos para exportar con el Sello de Alimento Ecológico.
      .col-lg-4(data-aos='slide-right') 
        figure
          img.nW.centered(src='@/assets/curso/t1-i3.jpg', alt='imagen decorativa')  



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

<style lang="sass">
.mw250
  max-width: 250px
</style>
