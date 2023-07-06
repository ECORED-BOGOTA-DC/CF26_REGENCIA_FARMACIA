<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Mediante el proceso de recepción de medicamentos y dispositivos médicos se  realiza una revisión administrativa (documentación) y técnica a cada uno de los productos farmacéuticos que ingresan al establecimiento o servicio farmacéutico, con el fin de garantizar que todos los productos que entran cumplen con los estándares de calidad necesarios para ser dispensados a los pacientes y usuarios.
        br
        br
        | En este componente formativo aprenderás sobre el proceso de recepción de productos farmacéuticos como los formatos utilizados durante todo el proceso, las verificaciones técnicas, los registros, los equipos y el procedimiento como tal del proceso abordado.

    p.mt-4.fw-bold.text-center(data-aos="fade-up") ¡Muchos éxitos en este proceso de aprendizaje! 

    
 



    
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
