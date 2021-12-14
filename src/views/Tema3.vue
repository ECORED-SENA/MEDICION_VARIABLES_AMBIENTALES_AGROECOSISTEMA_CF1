<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-botones(data-aos='flip-left')
      .titulo-principal__numero
        span 3
      h1 Biodiversidad  

    .row.mb-5.justify-content-center.slideInUp
      .col-lg-10
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5(data-aos='flip-up')
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/t3-i1.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0  En términos prácticos, la biodiversidad está compuesta por todas las formas de vida de un lugar, en este caso de un agroecosistema. Todos los animales, plantas y microorganismos, considerando todas sus variedades.   

    .neg-margin-x.bg-curved.custom-dots
      .row.justify-content-center
        .col-lg-8
          ImagenInfograficaB.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/t3-info1.svg', alt='imagen decorativa')

            div(x="11%" y="44%" tooltip="Ver más" numero="+")
              .tarjeta.white-card.p-4
                .row.align-items-center
                  .col-lg-12
                    .h4 Beneficios
                    p.mb-3  Una de las metas prioritarias de un agroecosistema en el que se está aplicando un manejo ecológico o agroecológico debe ser aumentar la biodiversidad, pues son múltiples los beneficios que trae (FAO, 2018). Estos son algunos:
                    p.mb-3  Beneficios en la producción.
                    ul.lista-ul
                      li
                        i.fas.fa-check
                        p.mb-0  Prestación de servicios en el agroecosistema como la polinización.   
                      li
                        i.fas.fa-check
                        p.mb-0 Resiliencia ante sucesos adversos como la variabilidad climática.                         
                      li
                        i.fas.fa-check
                        p.mb-0  Salud del suelo, de las plantas y de los animales.   
                      li
                        i.fas.fa-check
                        p.mb-0 Mayor número de interacciones y por tanto, mayor sinergia.                             
                      li
                        i.fas.fa-check
                        p.mb-0 Mayor oferta de productos del agroecosistema.

            div(x="26%" y="16%" tooltip="Ver más" numero="+")
              .tarjeta.white-card.p-4
                .row.align-items-center
                  .col-lg-12
                    .h4 Clasificación
                    p.mb-3  Para analizar la biodiversidad en un agroecosistema se puede identificar y clasificar a partir de tres aspectos: 
                    ul.lista-ul
                      li
                        i.fas.fa-check
                        p.mb-0  <b>Composición:</b> variedad de individuos. 
                      li
                        i.fas.fa-check
                        p.mb-0 <b>Estructura:</b> distribución espacial, en el plano horizontal (asociaciones) y en el plano vertical (capas o estratos).
                      li
                        i.fas.fa-check
                        p.mb-0  <b>Función:</b> proceso que realiza cada individuo: regulación, sinergia, descomponer, ciclaje, fertilizar. 

            div(x="75%" y="16%" tooltip="Ver más" numero="+")
              .tarjeta.white-card.p-4
                .row.align-items-center
                  .col-lg-12
                    .h4 Variables ambientales
                    p.mb-3  Una variable ambiental es una representación cualitativa o cuantitativa asignada a un aspecto ambiental, que permite observar algún tipo de variación al realizar la medición. El propósito de la medición es conocer la afectación o impacto de las actividades productivas del agroecosistema sobre el medio ambiente y cómo estas variables pueden afectar a otras con las que están relacionadas.
                    p.mb-3  En los diagnósticos o evaluaciones ambientales de agroecosistemas, las variables más comunes a medir son:
                    ul.lista-ul
                      li
                        i.fas.fa-check
                        p.mb-0  <b>Hidrología:</b> procesos asociados al ciclo del agua.
                      li
                        i.fas.fa-check
                        p.mb-0 <b>Calidad del agua:</b> composición del agua.
                      li
                        i.fas.fa-check
                        p.mb-0  <b>Suelo:</b> composición o estado del suelo.
                      li
                        i.fas.fa-check
                        p.mb-0  <b>Biota o biodiversidad:</b> especies vivas presentes.
                      li
                        i.fas.fa-check
                        p.mb-0  <b>Aspectos socioeconómicos:</b> procesos que tengan impacto en el ambiente.                        

            div(x="87%" y="44%" tooltip="Ver más" numero="+")
              .tarjeta.white-card.p-4
                .row.align-items-center
                  .col-lg-12
                    .h4 Variables metodológicas
                    p.mb-3 Una variable meteorológica es un parámetro que permite conocer el estado de la atmósfera en un momento determinado. 
                    p.mb-3  Las variables más comunes son: temperatura, humedad relativa, viento, presión atmosférica, precipitación, radiación. 
                    p.mb-3  Estas variables pueden afectar o ser susceptibles a los procesos productivos del agroecosistema, por ejemplo, la temperatura puede afectar la tasa el crecimiento de los cultivos y la proliferación de plagas, pero a su vez, la presencia de árboles en el agroecosistema puede ayudar a disminuir la temperatura en el agroecosistema.

    h3.titulo-tercero 
      i.fas.fa-leaf
      | &nbsp;Metodologías de priorización
    p.mb-5  Se sugiere la metodología de matriz de priorización, que sirve para priorizar las variables ambientales según la magnitud, gravedad, capacidad y beneficio, y con esto poder tomar decisiones de manejo en el agroecosistema, para ello, se deben seguir los siguientes pasos:
    .row.mb-5.justify-content-center
      .col-lg-10
        PasosA.color-acento-botones.mb-5(tipo="l")
          .row
            .col-md-2
              figure
                img.nW.centered(src='@/assets/curso/t3-p1.svg', alt='imagen decorativa')            
            .col-md-10.mb-4.mb-md-0
              .h4 Hacer una introducción
              p La cual es una breve presentación de la idea de negocio, se recomienda que desde el primer instante sea llamativa e interesante para los inversores.

          .row
            .col-md-10
              .h4 Dejar claro el problema a solucionar 
              p Se debe argumentar cuál es la necesidad que se ha encontrado en el mercado, es muy importante tener claro que dicho problema o necesidad valga la pena solucionar.           
            .col-md-2.mb-4.mb-md-0
              figure
                img.nW.centered(src='@/assets/curso/t3-p2.svg', alt='imagen decorativa')

          .row
            .col-md-2
              figure
                img.nW.centered(src='@/assets/curso/t3-p3.svg', alt='imagen decorativa')            
            .col-md-10.mb-4.mb-md-0
              .h4 Plantear la solución
              p Dejar claro y bien argumentado cómo el producto ofertado puede satisfacer el requerimiento expuesto, de igual forma, cómo la idea de negocio puede darle solución al problema antes planteado, con un enfoque de mejoramiento continuo a las necesidades y dificultades del inversor, cliente o patrocinador.

          .row
            .col-md-10
              .h4 Hablar del mercado objetivo 
              p Durante la exposición es importante que los inversores sientan que por parte del ponente se tiene pleno conocimiento del mercado total, mercado al cual se puede servir y el mercado que se puede conseguir, y cómo estos anualmente están en constante crecimiento, se puede hablar de cifras económicas si se tiene pleno conocimiento de ellas,  se recomienda tener un contexto claro en todo sentido, haciendo referencia a la segmentación de los mercados al cual está dirigido el plan de negocio.       
            .col-md-2.mb-4.mb-md-0
              figure
                img.nW.centered(src='@/assets/curso/t3-p4.svg', alt='imagen decorativa')

          .row
            .col-md-2
              figure
                img.nW.centered(src='@/assets/curso/t3-p5.svg', alt='imagen decorativa')            
            .col-md-10.mb-4.mb-md-0
              .h4 Plantearles a los inversores el por qué ahora
              p Básicamente es hablar de tendencias y nuevos modelos de negocio e inversión, rentabilidad y posicionamiento en el mercado.

          .row
            .col-md-10
              .h4 Evidenciar por qué son diferentes a los competidores 
              p Exponer cuáles son las cualidades de la idea de negocio, porque estas los encaminan a repuntar en el mercado a través de la alternativa expuesta, cuál es su potencial principal, que los hace diferente en un nicho de mercado específico, dando solución oportuna en el entorno.
            .col-md-2.mb-4.mb-md-0
              figure
                img.nW.centered(src='@/assets/curso/t3-p6.svg', alt='imagen decorativa')

          .row
            .col-md-2
              figure
                img.nW.centered(src='@/assets/curso/t3-p7.svg', alt='imagen decorativa')            
            .col-md-10.mb-4.mb-md-0
              .h4 Exponer el modelo de negocio 
              p Explicar cómo se gana dinero, retorno de la inversión, reinversión y precios del mercado y cómo se pueden captar clientes.

          .row
            .col-md-10
              .h4 Presentar el equipo de trabajo 
              p Es muy importante dejar en evidencia el equipo de trabajo que estará a cargo del desarrollo de la idea de negocio, especificar cómo a través de su experiencia son los indicados para asumir el reto y sacarlo adelante.
            .col-md-2.mb-4.mb-md-0
              figure
                img.nW.centered(src='@/assets/curso/t3-p8.svg', alt='imagen decorativa')

          .row
            .col-md-2
              figure
                img.nW.centered(src='@/assets/curso/t3-p9.svg', alt='imagen decorativa')            
            .col-md-10.mb-4.mb-md-0
              .h4 Contextualizar el estado actual del proyecto
              p Dejar claro a los inversores en qué punto se encuentra el proyecto, prospectiva y qué recursos económicos se requieren para lanzarse al mercado. (En este ítem es importante plasmar resumidamente datos financieros y proyecciones económicas, qué tipo de gastos se requiere y cómo se pueden solventar.)


    p.mb-5  Existen otras metodologías de priorización como la <b>Matriz Vester</b> y el <b>Proceso de Jerarquía Analítica (AHP)</b>; sin embargo, la matriz de priorización es sencilla de aplicar y se recomienda para efectos del curso de formación, como se muestra en la siguiente tabla.

    .row.mb-5.justify-content-center
      .col-lg-12
        figcaption.customCaption.mb-3  <b>Tabla</b> Matriz de priorización
        .tabla-a.color-acento-botones.mb-5(data-aos='slide-left') 
          table
            thead
              tr
                th  Variables / Criterios
                th Magnitud <br><br>¿Cuántas prácticas de manejo del agroecosistema afectan esta variable? <br><br>
                  span.orange-text 0-1= 1 <br>
                  span.orange-text 2-3 = 2 <br>
                  span.orange-text 4 o más = 3
                th Gravedad <br><br>¿Con qué gravedad/ frecuencia afecta las prácticas de manejo del agroecosistema esta variable? <br><br>
                  span.orange-text Levemente grave= 1 <br>
                  span.orange-text Medianamente grave= 2 <br>
                  span.orange-text Muy grave= 3     
                th Capacidad <br><br>¿Qué capacidad tenemos de resolver/ corregir la práctica de manejo del agroecosistema a corto plazo? <br><br>
                  span.orange-text Nula= 1 <br>
                  span.orange-text Medio= 2 <br>
                  span.orange-text Alta = 3
                th Beneficio <br><br>¿Cuánto se beneficia el medio ambiente en el agroecosistema al resolver o corregir la práctica de manejo? <br><br>
                  span.orange-text Nula= 1 <br>
                  span.orange-text Medio= 2 <br>
                  span.orange-text Alta = 3    
                th  Análisis de priorización
            tbody.customtext-size
              tr
                td.text-center.text-bold Fuentes de agua contaminadas
                td
                td
                td
                td
                td
              tr
                td.text-center.text-bold Presencia de vertimientos
                td
                td
                td
                td
                td
              tr
                td.text-center.text-bold Fertilidad del suelo
                td
                td
                td
                td
                td
              tr
                td.text-center.text-bold Grado de compactación
                td
                td
                td
                td
                td
              tr
                td.text-center.text-bold Deforestación
                td
                td
                td
                td
                td
              tr
                td.text-center.text-bold Entomofauna del suelo
                td
                td
                td
                td
                td                
              tr
                td.text-center.text-bold Número de cultivos asociados
                td
                td
                td
                td
                td
              tr
                td.text-center.text-bold Presencia de corredores biológicos
                td
                td
                td
                td
                td





































</template>

<script>
export default {
  name: 'Tema3',
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
