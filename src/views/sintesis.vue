<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5(data-aos="fade-right") Durante la recepción de productos farmacéuticos, se realiza una revisión administrativa y técnica para garantizar el cumplimiento de los estándares de calidad. El componente formativo destaca la importancia de este sistema para los aprendices. Se enfatiza en la inspección de la documentación y los equipos mediante el uso de herramientas como el acta de recepción y las tablas militares, con el objetivo de asegurar la calidad de los productos que serán dispensados. Esto se logra siguiendo los procedimientos técnicos establecidos y cumpliendo con la normativa vigente. El siguiente esquema proporciona una breve revisión de los temas abordados.

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Esquema gráfico que resume lo abordado en el componente formativo, indicando lo relacionado con la recepción de productos farmacéuticos, lo cual se divide en: 1. Recepción de productos que aseguran la calidad y cumplimiento normativo, involucrando: Procedimiento de recibo de productos Acta de recepción Verificación técnica Clasificación de defectos Tabla militar Control del proceso de inspección 2. Equipos y dotación, que tienen elementos clave como: lectores de código de barras y estibas.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
