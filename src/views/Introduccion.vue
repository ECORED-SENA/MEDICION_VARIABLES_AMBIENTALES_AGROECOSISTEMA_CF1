<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-botones(data-aos='flip-left')
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p.mb-5  Apreciado aprendiz bienvenido a este nuevo componente de formación denominado Variables ambientales. Para conocer el contenido de estudio se invita a observar el siguiente video.    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Y23nMWUalzI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    


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
