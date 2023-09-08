<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-up")
      .titulo-principal__numero
        span 2
      h1 Equipos y dotación

    p(data-aos="zoom-in") Estos son todos los equipos, instrumentos y materiales necesarios para el cumplimiento de los objetivos de las actividades y los procedimientos que se realizan en determinada área.
    p.mt-4(data-aos="zoom-in") El área de recepción debe contar con varios materiales, instrumentos y equipos para su buen funcionamiento como mesón, lapicero, tabla de apoyo y buena iluminación.
    p.mt-4(data-aos="zoom-in") A continuación se mencionarán dos equipos, que sin dejar de ser importantes los demás, son fundamentales para evitar errores de digitación y conservar la calidad de los productos.

    Separador.mt-5

    .titulo-segundo
      h2#t_2_1 2.1  Lectores de código de barras
    
    p(data-aos="fade-up") “Es una identificación única de carácter numérico, representada por una combinación de líneas que permite reconocer rápidamente un artículo de forma única, global y no ambigua, en un punto de la cadena logística, y así poder realizar inventario o consultar sus características asociadas” (Semana, 2014).
    p.mt-4(data-aos="fade-up") Son usados para identificar los productos durante el almacenamiento y la distribución, además como medio de control de errores al registrar ventas y como método óptimo de control de inventarios. 
    p.mt-4(data-aos="fade-up") El código de barras aporta los siguientes beneficios:
    ul.fa-ul.mt-4
      li.mb-2(data-aos="zoom-in-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3 !important;")
        | Cada uno de los productos toma una identificación universal.
      li.mb-2(data-aos="zoom-in-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3 !important;")
        | Reduce costos de despacho y recibo.
      li.mb-2(data-aos="zoom-in-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3 !important;")
        | Favorece la comunicación entre proveedores y clientes.
      li.mb-2(data-aos="zoom-in-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3 !important;")
        | Disminuye el tiempo de facturación de los productos y por ende, el tiempo de espera del cliente.
      li.mb-2(data-aos="zoom-in-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3 !important;")
        | Disminuye el tiempo de ingreso de los productos al inventario, cuando este es sistematizado.
      li.mb-2(data-aos="zoom-in-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3 !important;")
        | Otorga información extendida del producto como son los componentes, entre otros.
      li(data-aos="zoom-in-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3 !important;")
        | Minimiza los errores de costos y precios.
    
    p.mt-5(data-aos="fade-up") En Colombia, el Instituto Colombiano de Codificación y Automatización Comercial (IAC), es la entidad encargada de otorgar el código de barras de los productos, aunque también existen otros como el EAN que es el europeo.
    p.mt-4(data-aos="fade-up") Existen dos códigos de barras, uno de 13 cifras que es el más común y otro de 8 cifras que se utiliza cuando el espacio para la impresión es muy corto. Estos se leen de la siguiente manera:
    ul.fa-ul.mt-4
      li.mb-2(data-aos="zoom-in-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3 !important;")
        | Los 3 primeros dígitos corresponden al código que identifica la organización de codificación, por ejemplo, para Colombia es 770.
      li.mb-2(data-aos="zoom-in-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3 !important;")
        | Los 4 dígitos siguientes corresponden al código de la empresa.
      li.mb-2(data-aos="zoom-in-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3 !important;")
        | Los 5 dígitos restantes corresponden a la identificación como tal del producto, otorgada por el fabricante.
      li.mb-2(data-aos="zoom-in-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3 !important;")
        | El último número es de control, es decir, permite comprobar si los dígitos anteriores fueron leídos correctamente. 
    
    p.mt-5(data-aos="zoom-in") Ahora, observe gráficamente esta distribución.

    .col-xl-8.col-lg-10.m-auto.mt-5
      .titulo-sexto.color-acento-contenido
        h5.d-block Figura 1
        span Cómo se lee un código de barras 
      figure.mt-5
        img(src="@/assets/curso/tema2/1.svg" data-aos="zoom-in-up" alt="Imagen que contiene un código de barras con la numeración 7702004003508, la cual significa: 770: País 2004: Código empresa 00350: Código producto 8: Digito verificación")

    Separador.mt-5

    .titulo-segundo
      h2#t_2_2 2.2 Estibas
    
    p(data-aos="fade-up") Es una plataforma rígida también conocida como pallet o paleta, utilizada para el adecuado apilamiento y almacenamiento de los productos farmacéuticos, con el objetivo de conservar sus especificaciones técnicas, evitando que los productos entren en contacto directo con el piso y por ende, no se vean afectados por la humedad.
    p.mt-4(data-aos="fade-up") Existen diferentes tipos de estibas obedeciendo al tamaño, a la composición, entre otras, como se puede observar a continuación:
    
    .tarjeta.tarjeta--azul.p-4.p-md-5.mt-5.pb-md-4
      SlyderA(tipo="b")
        .row
          .col-md-6.col-lg-4.mb-4.mb-md-0
            h5 Europaleta
            p Sus medidas son de 1200 * 800 mm, está estandarizada por la ISO, es de madera y soporta grandes pesos.
          .col-md-6.col-lg-8
            figure
              img(src='@/assets/curso/tema2/2.png' alt="Imagen decorativa")
        .row
          .col-md-6.col-lg-4.mb-4.mb-md-0
            h5 Pallet o estiba americana
            p También es conocida como estiba universal o isopallet, sus medidas son de 1200 * 1000mm y soporta grandes pesos.
          .col-md-6.col-lg-8
            figure
              img(src='@/assets/curso/tema2/3.png' alt="Imagen decorativa")
        .row
          .col-md-6.col-lg-4.mb-4.mb-md-0
            h5 Estibas de 4 y 2 entradas
            p Se refiere al número de entradas por donde un montacarga puede introducir la horquilla y transportar la mercancía.
          .col-md-6.col-lg-8
            figure
              img(src='@/assets/curso/tema2/4.png' alt="Imagen decorativa")
        .row
          .col-md-6.col-lg-4.mb-4.mb-md-0
            h5 Estibas de madera
            p Son económicas comparadas con otras, se reparan fácilmente; pero son de difícil limpieza y desinfección (no autorizadas para farmacias).
          .col-md-6.col-lg-8
            figure
              img(src='@/assets/curso/tema2/5.png' alt="Imagen decorativa")
        .row
          .col-md-6.col-lg-4.mb-4.mb-md-0
            h5 Estibas de plástico
            p Son de fácil limpieza y desinfección, son ligeras y 100% reciclables.
          .col-md-6.col-lg-8
            figure
              img(src='@/assets/curso/tema2/6.png' alt="Imagen decorativa")
        .row
          .col-md-6.col-lg-4.mb-4.mb-md-0
            h5 Estibas de metal
            p Son de fácil limpieza y desinfección, soportan grandes pesos, son resistentes y tienen larga vida de utilidad.
          .col-md-6.col-lg-8
            figure
              img(src='@/assets/curso/tema2/7.png' alt="Imagen decorativa")
        .row
          .col-md-6.col-lg-4.mb-4.mb-md-0
            h5 Estibas de cartón
            p Solo son usadas para cargas ligeras y su vida útil es muy corta.
          .col-md-6.col-lg-8
            figure
              img(src='@/assets/curso/tema2/8.png' alt="Imagen decorativa")
    
    p.mt-5(data-aos="fade-up") Aunque parezca sencillo, la selección es una acción que se debe llevar a cabo con cuidado, ya que del correcto manejo de la estiba depende la vida útil de esta y la conservación de los productos. Por lo cual, es importante tener presente las siguientes recomendaciones:

    ul.fa-ul.mt-4
      li.mb-2(data-aos="zoom-in-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3 !important;")
        | Las estibas deben estar juntas, ya que los huecos provocan desequilibrios al momento de apilar.
      li.mb-2(data-aos="zoom-in-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3 !important;")
        | Si las estibas van a ser usadas en algún medio de transporte, lo mejor es ponerlas cruzadas.
      li.mb-2(data-aos="zoom-in-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3 !important;")
        | La carga debe siempre estar dentro de las medidas de la estiba.
      li.mb-2(data-aos="zoom-in-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3 !important;")
        | No poner sobrecarga en la estiba, por lo cual se debe contar con el número necesario de estas para un correcto almacenamiento.
      li(data-aos="zoom-in-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3 !important;")
        | Si se va a usar montacargas de transporte, la mercancía debe estar ubicada de forma que no impida el fácil manejo de este. 





    
  

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
