<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.tarjeta--azul.h-100.d-flex.align-items-center
          figure
            img(src="@/assets/template/emparejamiento.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Diferenciando conceptos y productos
        p.mb-4 Reconocer las diferencias entre productos ecológicos y agroecológicos.
        .tarjeta.tarjeta--azul.p-3
          .row.justify-content-start.align-items-center            
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/a1/story.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.tarjeta--azul.h-100.d-flex.align-items-center
          figure
            img(src="@/assets/template/completar.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        .titulo-segundo
          h2 Completar la idea
        p.mb-4 Identificar conceptos sobre el territorio, variables ambientales y la biodiversidad.
        .tarjeta.tarjeta--azul.p-3
          .row.justify-content-start.align-items-center   
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece


</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
