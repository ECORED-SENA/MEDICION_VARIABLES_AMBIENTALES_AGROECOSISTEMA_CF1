<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1 Producción agropecuaria ecológica y agroecológica

    p.mb-5  Surge como corriente o enfoque alternativo de producción, después de enfrentar las imposiciones de un modelo de <b>“Revolución verde”</b>, en el que predominaban los monocultivos, las semillas mejoradas, el uso de maquinaria agrícola, la aplicación de fertilizantes y productos agrotóxicos. Entre las consecuencias de este modelo están:
    .row.mb-5
      .col-lg-5
        figure
          img(src="@/assets/curso/t1-i1.jpg", alt="imagen decorativa")
      .col-lg-7
        ul.lista-ul
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
        .cajon.color-secundario.p-4
          p.mb-0  Las prácticas de manejo a favor de la biodiversidad y el cuidado del medio ambiente, la labranza mínima del suelo, la recuperación de conocimientos tradicionales, el no uso de agrotóxicos y el ciclaje de nutrientes en los agroecosistemas son algunas de las prácticas que caracterizan a estos sistemas de producción.








































    //- El componente "Muestras" tiene las aplicaciones de todos los componentes de la base
    //- se encuentra en src/components/Muestras.vue
    //- Una vez el componente "Muestras" no se necesite 
    //- Se debe borrar el "import Muestras from '../components/Muestras'" y en "components" en "<script"
    //- esto evitará que se compile en la carpeta final de distribución
    Muestras
  
</template>

<script>
import Muestras from '../components/Muestras' // borrar una vez el componente "Muestras" no se necesite
export default {
  name: 'Tema1',
  components: {
    Muestras, // borrar una vez el componente "Muestras" no se necesite
  },
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
