<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 La responsabilidad del preparador
    
    p(data-aos="fade-right") Es el proceso mediante el cual los productos que han sido solicitados a un proveedor llegan al establecimiento o servicio farmacéutico, para que sean revisados y posteriormente almacenados.

    Separador
    .titulo-segundo(data-aos="fade-right")
      h2#t_1_1 1.1 Procedimiento de recibo de productos
    
    p(data-aos="fade-right") Al momento de recibir los productos farmacéuticos que fueron solicitados al proveedor es importante tener presente las diferentes formas de entrega, las cuales son:
    p.mt-4(data-aos="fade-right") #[strong Por zona de descargue:] cuando el establecimiento o servicio farmacéutico está ubicado dentro de un centro comercial, lo que implica que el procedimiento de recibo de mercancía se realice bajo las condiciones de logística y horarios establecidos por el centro comercial. En este caso, el primer filtro de recibo es el director de la zona de descargue.
    p.mt-4(data-aos="fade-right") #[strong Entrega directa:] esto es cuando el pedido adquirido se recibe directamente en el establecimiento o servicio farmacéutico por el director técnico o a quien este haya encargado de dicha actividad.
    p.mt-4(data-aos="fade-right") Otros aspectos para tener presentes en el momento de recibir productos son:

    br
    .col-xl-8.col-lg-10.m-auto.my-5
      .row.justify-content-center
        .col-lg-6.col-md-8.mb-lg-0.mb-4
          .p-4.h-100.d-flex.align-content-center.flex-wrap(style="border:5px #8CBCFA solid;border-radius:20px;position:relative;box-shadow:0px 0px 20px rgba(0,0,0,.12);")
            .text-center(style="position:absolute;width:100%;top:-30px;left:0;") 
              span.text-white.fw-bold(data-aos="zoom-in-down" style="background-color:#8CBCFA;border:9px #fff solid;border-radius:100%;font-size:40px;padding:.4rem 1.2rem;box-shadow:0px 0px 20px rgba(0,0,0,.1);") 1
            h5.mb-0.text-center.mt-5.mb-5(data-aos="zoom-in") En todo momento se debe garantizar la calidad de los productos.
        .col-lg-6.col-md-8.mb-lg-0.mb-4
          .p-4.h-100.d-flex.align-content-center.flex-wrap(style="border:5px #00BCD4 solid;border-radius:20px;position:relative;box-shadow:0px 0px 20px rgba(0,0,0,.12);")
            .text-center(style="position:absolute;width:100%;top:-30px;left:0;") 
              span.text-white.fw-bold(data-aos="zoom-in-down" style="background-color:#00BCD4;border:9px #fff solid;border-radius:100%;font-size:40px;padding:.4rem 1.2rem;box-shadow:0px 0px 20px rgba(0,0,0,.1);") 2
            h5.mb-0.text-center.mt-5(data-aos="zoom-in") La revisión de la mercancía debe ser detallada a los embalajes, comprobando que:
            ul.fa-ul.mt-3.mb-5
              li(data-aos="zoom-in")
                i.fas.fa-check.fa-li(style="color:#00BCD4;")
                | Los sellos de seguridad no estén violados.
              li(data-aos="zoom-in")
                i.fas.fa-check.fa-li(style="color:#00BCD4;")
                | El estado físico esté en perfectas condiciones.
              li(data-aos="zoom-in")
                i.fas.fa-check.fa-li(style="color:#00BCD4;")
                | Los datos de las etiquetas de marcación estén correctos.
        .col-lg-6.col-md-8.mb-lg-0.mb-4
          .p-4.h-100.d-flex.align-content-center.flex-wrap(style="border:5px #FF9D00 solid;border-radius:20px;position:relative;box-shadow:0px 0px 20px rgba(0,0,0,.12);")
            .text-center(style="position:absolute;width:100%;top:-30px;left:0;") 
              span.text-white.fw-bold(data-aos="zoom-in-down" style="background-color:#FF9D00;border:9px #fff solid;border-radius:100%;font-size:40px;padding:.4rem 1.2rem;box-shadow:0px 0px 20px rgba(0,0,0,.1);") 3
            h5.mb-0.text-center.mt-5(data-aos="zoom-in") En ocasiones se reciben productos enviados por empresas de transporte, por lo cual además de revisar todo lo anteriormente mencionado, también se debe revisar:
            ul.fa-ul.mt-3.mb-5
              li(data-aos="zoom-in")
                i.fas.fa-check.fa-li(style="color:#00BCD4;")
                | Los sellos de seguridad no estén violados.
              li(data-aos="zoom-in")
                i.fas.fa-check.fa-li(style="color:#00BCD4;")
                | El estado físico esté en perfectas condiciones.
              li(data-aos="zoom-in")
                i.fas.fa-check.fa-li(style="color:#00BCD4;")
                | Los datos de las etiquetas de marcación estén correctos.
        .col-lg-6.col-md-8.mb-lg-0.mb-4
          .p-4.h-100.d-flex.align-content-center.flex-wrap(style="border:5px #7E5EE3 solid;border-radius:20px;position:relative;box-shadow:0px 0px 20px rgba(0,0,0,.12);")
            .text-center(style="position:absolute;width:100%;top:-30px;left:0;") 
              span.text-white.fw-bold(data-aos="zoom-in-down" style="background-color:#7E5EE3;border:9px #fff solid;border-radius:100%;font-size:40px;padding:.4rem 1.2rem;box-shadow:0px 0px 20px rgba(0,0,0,.1);") 4
            h5.mb-0.text-center.mt-5.mb-5(data-aos="zoom-in") Es importante tener horarios establecidos de recibo de productos, ya que por orden y logística interna no es sano recibir mercancía en todo momento.
    
    p(data-aos="fade-right") El recurso que se presenta continuación es un ejemplo de guía de transporte:

    .col-xl-10.m-auto.mt-5
      figure
        img(src="@/assets/curso/tema1/1.svg" data-aos="zoom-in-up" alt="Imagen con un formato ejemplo de una guía de transporte, la cual incluye aspectos como: Nombre de la empresa Destinatario RUC Punto de partida Punto de llegada Motivo de traslado Datos del bien transportado Descripción Cantidad Unidad de medida Peso Datos del transportista Datos de unidad de transporte y conductor Imprenta RUC Fecha de impresión No. de autorización")
    
    Separador
    .titulo-segundo(data-aos="fade-right")
      h2#t_1_2 1.2  Acta de recepción 
    
    p(data-aos="fade-right") Antes de iniciar con el acta de recepción es necesario tener presente que el proceso de recepción de medicamentos y dispositivos médicos tiene dos momentos, el primero es una recepción administrativa y el segundo es la recepción técnica, de la cual sale el acta de recepción.
    p.mt-4(data-aos="fade-right") Durante la recepción técnica se revisan aspectos de cada uno de los productos como son las características organolépticas en el caso de los medicamentos:
    ul.fa-ul.mt-4
      li.mb-2(data-aos="fade-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Aspectos físicos de empaque y envasado.
      li.mb-2(data-aos="fade-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Etiquetas.
      li.mb-2(data-aos="fade-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Rótulos.
      li(data-aos="fade-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Sellos de seguridad.
    
    p.mt-5(data-aos="fade-right") Pero no basta solo con verificar, puesto que esta información debe quedar plasmada por escrito en un formato denominado acta de recepción.

    .col-xl-8.col-lg-10.m-auto.mt-5(data-aos="zoom-in")
      .cajon.color-acento-contenido.p-4(style="background-color:#BFEEF4;")
        p.mb-0 En el momento de revisar las etiquetas y los rótulos es importante tener presente la información que debe llevar el empaque primario y el empaque secundario.
    
    p.mt-5(data-aos="fade-right") A continuación se presenta la información que como mínimo debe contener la rotulación de empaques primarios y secundarios:

    AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul" data-aos="zoom-in")
      .row.col-lg-11.m-auto(titulo="(Blíster/ foil) para tabletas o comprimidos, tabletas recubiertas, grageas (envase primario) ")
        .col-lg-7.order-lg-1.order-2
          ol.lista-ol--cuadro.mb-0
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 1
              | Nombre genérico del producto.
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 2
              | Nombre comercial del producto (cuando aplique).
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 3
              | Concentración.
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 4
              | Número de lote.
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 5
              | Fecha de expiración o vencimiento.
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 6
              | Nombre del laboratorio fabricante o logotipo que identifique al laboratorio.
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema1/2.png' alt="Imagen de unas tabletas de pastas")
      .row.col-lg-11.m-auto(titulo="Frasco (empaque primario)")
        .col-lg-7.order-lg-1.order-2
          ol.lista-ol--cuadro.mb-0
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 1
              | Nombre genérico del producto.
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 2
              | Nombre comercial del producto (cuando aplique).
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 3
              | Concentración.
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 4
              | Forma farmacéutica.
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 5
              | Vía de administración.
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 6
              | Contenido, en volumen, unidad de dosis o masa.
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 7
              | Número de lote.
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 8
              |  Fecha de expiración.
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 9
              | Nombre del laboratorio fabricante o logotipo que identifique al laboratorio.
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 10
              | Número de registro sanitario (cuando no tiene envase o empaque secundario individual).
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema1/3.png' alt="Imagen de un frasco de medicamentos")
      .row.col-lg-11.m-auto(titulo="Caja (empaque secundario)")
        .col-lg-7.order-lg-1.order-2
          ol.lista-ol--cuadro.mb-0
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 1
              | Nombre genérico del producto.
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 2
              | Nombre comercial del producto (cuando aplique).
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 3
              | Concentración.
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 4
              | Forma farmacéutica.
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 5
              | Vía de administración (incluyendo indicación especial sobre la forma de administración cuando aplique).
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 6
              | Contenido en unidades de volumen, dosis o masa.
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 7
              | Fórmula cuali-cuantitativa del producto.  (Especificar el contenido de la sal o base utilizada).
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 8
              |  Número de lote.
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 9
              | Fecha de expiración o vencimiento.
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 10
              | Nombre del fabricante, (acondicionador o empacador cuando aplique).
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 11
              | País de origen del producto.
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 12
              | Número de registro sanitario. 
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 13
              | Leyenda venta bajo fórmula médica u odontológica o venta libre según el caso.
            li 
              .lista-ol--cuadro__vineta
                span.text-bold 14
              p.mb-0 Leyenda #[strong "manténgase fuera del alcance de los niños"].
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema1/4.png' alt="Imagen de la caja de un medicamento")
      .row.col-lg-11.m-auto(titulo="Otras indicaciones del fabricante para empaques secundarios")
        .col-lg-7.order-lg-1.order-2
          ul.fa-ul
            li.mb-3
              i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
              | Cuando se oferte suspensión oral, polvo o gránulos para suspensión oral se indicará en forma clara y visible #[strong “Agítese el producto antes de usar”].
            li.mb-3
              i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
              | Para las formas farmacéuticas de polvo o gránulos, para suspensión oral que requiere ser reconstituida con diluyente deberá especificarse en el etiquetado el tiempo de conservación de la suspensión reconstituida a temperatura ambiente y en refrigeración establecida por el fabricante. Además, deberá indicar en el frasco con una marca visible el volumen de diluyente necesario.
            li.mb-3
              i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
              | Además, el empaque deberá incluir condiciones de almacenamiento, precauciones, contraindicaciones y advertencias. En caso de no poder colocarse se podrán especificar en el prospecto (inserto).
        .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
          figure
            img(src='@/assets/curso/tema1/5.png' alt="Imagen de varios medicamentos")
    
    .col-xl-8.col-lg-10.m-auto.mt-5(data-aos="zoom-in")
      .cajon.color-acento-contenido.p-4(style="background-color:#BFEEF4;")
        p.mb-0.fw-bold Información del rotulado de los empaques 
        p.mt-4 Debe ser impresa o pirograbada directamente en el empaque primario y secundario o haciendo uso de etiquetas firmemente adheridas que no sean desprendibles, no se aceptan fotocopias de ningún tipo. La impresión deberá ser nítida, indeleble al manejo, contrastante y legible, no presentar borrones, raspados, manchas, ni alteraciones de ningún tipo, toda la información provista deberá estar en idioma español. 
    
    p.mt-5(data-aos="fade-right") Recuerde que el acta de recepción es un documento de verificación técnica, en la cual se registran todos los aspectos técnicos relacionados con los productos farmacéuticos, con el fin de evidenciar y garantizar que cada uno de ellos cumple con los criterios de calidad necesarios para ser dispensados y administrados a los pacientes.
    p.mt-5(data-aos="fade-right") El acta de recepción debe contener como mínimo la siguiente información:
    ol.lista-ol--cuadro.mb-0.mt-3
      li(data-aos="fade-right") 
        .lista-ol--cuadro__vineta
          span.text-bold 1
        | Fecha de elaboración del acta.
      li(data-aos="fade-right") 
        .lista-ol--cuadro__vineta
          span.text-bold 2
        | Temperatura (en el caso de los productos que requieren temperatura especial como los refrigerados).
      li(data-aos="fade-right") 
        .lista-ol--cuadro__vineta
          span.text-bold 3
        | Nombre del proveedor.
      li(data-aos="fade-right") 
        .lista-ol--cuadro__vineta
          span.text-bold 4
        | Número de factura.
      li(data-aos="fade-right") 
        .lista-ol--cuadro__vineta
          span.text-bold 5
        | Número de acta de recepción.
      li(data-aos="fade-right") 
        .lista-ol--cuadro__vineta
          span.text-bold 6
        | Nombre genérico del producto.
      li(data-aos="fade-right") 
        .lista-ol--cuadro__vineta
          span.text-bold 7
        | Nombre comercial del producto (cuando aplique).
      li(data-aos="fade-right") 
        .lista-ol--cuadro__vineta
          span.text-bold 8
        | Concentración.
      li(data-aos="fade-right") 
        .lista-ol--cuadro__vineta
          span.text-bold 9
        | Presentación.
      li(data-aos="fade-right") 
        .lista-ol--cuadro__vineta
          span.text-bold 10
        |  Forma farmacéutica.
      li(data-aos="fade-right") 
        .lista-ol--cuadro__vineta
          span.text-bold 11
        | Laboratorio fabricante.
      li(data-aos="fade-right") 
        .lista-ol--cuadro__vineta
          span.text-bold 12
        | Número de lote.
      li(data-aos="fade-right") 
        .lista-ol--cuadro__vineta
          span.text-bold 13
        | Número de registro sanitario. 
      li(data-aos="fade-right") 
        .lista-ol--cuadro__vineta
          span.text-bold 14
        |  Fecha de expiración o vencimiento.
      li(data-aos="fade-right") 
        .lista-ol--cuadro__vineta
          span.text-bold 15
        | Cantidad recibida.
      li(data-aos="fade-right") 
        .lista-ol--cuadro__vineta
          span.text-bold 16
        | Condiciones administrativas y técnicas.
      li(data-aos="fade-right") 
        .lista-ol--cuadro__vineta
          span.text-bold 17
        | Se acepta o no se acepta el producto.
      li(data-aos="fade-right") 
        .lista-ol--cuadro__vineta
          span.text-bold 18
        | Observaciones.
      li(data-aos="fade-right") 
        .lista-ol--cuadro__vineta
          span.text-bold 19
        | Nombre y firma del responsable de la recepción técnica y su cargo.
      li(data-aos="fade-right") 
        .lista-ol--cuadro__vineta
          span.text-bold 20
        | Nombre y firma del director técnico responsable.
    
    p.mt-5(data-aos="fade-right") A continuación se presenta un acta de recepción que cumple con todos los criterios mencionados anteriormente:

    figure.mt-5
      img(src='@/assets/curso/tema1/6.svg' data-aos="zoom-in-up" alt="Imagen que contiene un formato de acta de recepción, la cual incluye los 20 puntos indicados anteriormente")

    Separador
    .titulo-segundo(data-aos="fade-right")
      h2#t_1_3 1.3  Verificación técnica
    
    p(data-aos="fade-right") Durante el procedimiento de recepción técnica, en el caso de establecimientos minoristas como droguerías, farmacias – droguerías y servicios farmacéuticos se debe realizar la verificación de  cada uno de los productos, y para establecimientos mayoristas como laboratorios fabricantes, depósitos y agencias de especialidades se permite realizar la inspección aplicando el muestreo.
    p.mt-4(data-aos="fade-right") Aquí surge el interrogante ¿Qué es un muestreo?

    .col-xl-8.col-lg-10.m-auto.mt-5(data-aos="zoom-in")
      .cajon.color-acento-contenido.p-4(style="background-color:#BFEEF4;")
        p.mb-0 El muestreo o muestra es cuando se toma una porción de un lote con el fin de tomar la decisión de aceptar o rechazar el lote completo, de acuerdo con el cumplimiento de los requisitos de calidad. La cantidad de productos tomados para analizar está definida por la tabla militar o de muestreo. 
    
    p.mt-5(data-aos="fade-right") Los parámetros por seguir para la realización de un correcto plan de muestreo de inspección por atributos de los productos están definidos por la Norma Técnica Colombiana NTC-ISO-2859, y ese muestreo se puede realizar de las siguientes formas:
    
    .col-xl-10.m-auto.mt-5(data-aos="zoom-in")
      PasosA.color-acento-contenido(tipo="n")
        .row
          h5(data-aos="zoom-in-left") Muestreo simple
          p.mt-2(data-aos="zoom-in-left") Cuando solo se realiza la recepción a una sola muestra y de allí se toma la decisión de aceptar o rechazar el lote completo.
        .row.text-start
          h5(data-aos="zoom-in-right") Muestreo doble
          p.mt-2(data-aos="zoom-in-right") Cuando solo se realiza la recepción a dos muestras y de allí se toma la decisión de aceptar o rechazar el lote completo.
        .row
          h5(data-aos="zoom-in-left") Muestreo múltiple
          p.mt-2(data-aos="zoom-in-left") Cuando solo se realiza la recepción hasta de siete muestras y de allí se toma la decisión de aceptar o rechazar el lote completo.
    
    Separador
    .titulo-segundo(data-aos="fade-right")
      h2#t_1_4 1.4  Clasificación de defectos o niveles de aceptabilidad
    
    .row
      .col-lg-4.col-sm-8.col-10.mb-4.mb-lg-0(style="place-self:center;")
        figure.text-center
          img(src="@/assets/curso/tema1/7.png" data-aos="zoom-in-right" style="display:inline;max-width:450px;" alt="Imagen decorativa")
      .col-lg-8(style="place-self:center;")
        p(data-aos="fade-left") Al realizar la inspección técnica de los productos ya sea de manera completa o aplicando muestreo es posible encontrar productos con ciertos defectos organolépticos, en el empaque, en la etiqueta, en el rótulo, en los sellos de seguridad, entre otros, que ponen en entredicho la aceptación o no de este o del lote completo.
        p.mt-4(data-aos="fade-left") Es en este sentido, se habla del nivel de aceptabilidad de calidad de un producto, y esto se refiere al punto límite de unidades defectuosas que debe tener un lote para ser aceptado o rechazado.
        p.mt-4(data-aos="fade-left") Los defectos se clasifican en:
    
    br
    .row.justify-content-center.mt-5
      .col-lg.col-md-8.mb-lg-0.mb-4
        .p-4.h-100.d-flex.flex-wrap(style="border:5px #8CBCFA solid;border-radius:20px;position:relative;box-shadow:0px 0px 20px rgba(0,0,0,.12);")
          .text-center(style="position:absolute;width:100%;top:-30px;left:0;") 
            span.text-white.fw-bold(data-aos="zoom-in-down" style="background-color:#8CBCFA;border:9px #fff solid;border-radius:100%;font-size:40px;padding:.4rem 1.2rem;box-shadow:0px 0px 20px rgba(0,0,0,.1);") 1
          h5.mb-0.text-center.mt-5(data-aos="zoom-in") Defecto crítico
          p.mb-5.mt-4(data-aos="zoom-in") Es el que afecta completamente la capacidad de uso del producto o pone en riesgo la vida del paciente o usuario, por lo cual se considera peligroso e inseguro. Cuando un producto tiene un defecto crítico inmediatamente es rechazado (1.0%).
      .col-lg.col-md-8.mb-lg-0.mb-4
        .p-4.h-100.d-flex.flex-wrap(style="border:5px #00BCD4 solid;border-radius:20px;position:relative;box-shadow:0px 0px 20px rgba(0,0,0,.12);")
          .text-center(style="position:absolute;width:100%;top:-30px;left:0;") 
            span.text-white.fw-bold(data-aos="zoom-in-down" style="background-color:#00BCD4;border:9px #fff solid;border-radius:100%;font-size:40px;padding:.4rem 1.2rem;box-shadow:0px 0px 20px rgba(0,0,0,.1);") 2
          h5.mb-0.text-center.mt-5(data-aos="zoom-in") Defecto mayor
          p.mb-5.mt-4(data-aos="zoom-in")  Es aquel que sin ser crítico afecta la capacidad de uso del producto reduciendo de forma considerable su utilidad (6.5%).
      .col-lg.col-md-8
        .p-4.h-100.d-flex.flex-wrap(style="border:5px #FF9D00 solid;border-radius:20px;position:relative;box-shadow:0px 0px 20px rgba(0,0,0,.12);")
          .text-center(style="position:absolute;width:100%;top:-30px;left:0;") 
            span.text-white.fw-bold(data-aos="zoom-in-down" style="background-color:#FF9D00;border:9px #fff solid;border-radius:100%;font-size:40px;padding:.4rem 1.2rem;box-shadow:0px 0px 20px rgba(0,0,0,.1);") 3
          h5.mb-0.text-center.mt-5(data-aos="zoom-in") Defecto menor
          p.mb-5.mt-4(data-aos="zoom-in") Es aquel que en ningún momento afecta la capacidad de uso del producto, ni reduce su utilidad. Cuando un producto tiene uno o varios defectos menores por lo general se acepta; pero se debe dejar la aclaración (15%).
    
    .col-lg-10.m-auto.mt-5
      .p-4(style="background-color:#7E5EE3;border-radius:10px;")
        .row.justify-content-center
          .col-lg-9.col-md-7.mb-4.mb-md-0(style="place-self:center;")
            p.fw-bold.text-white(data-aos="zoom-in") Se invita al aprendiz a consultar en el siguiente anexo la información de las tablas que permiten identificar la clasificación de:
            ul.lista-ul.mt-3(data-aos="zoom-in")
              li.text-small.text-white
                i.lista-ul__vineta
                | Defectos en el material de acondicionamiento ubicado en la página 10.
              li.text-small.text-white
                i.lista-ul__vineta
                | Defectos en la forma farmacéutica ubicado en la página 13.
          .col-lg-3.col-md-5.text-center(style="place-self:center;")
            a.boton.color-acento-botones(:href="obtenerLink('downloads/Anexo2_CF026_MNTC.pdf')" target="_blank" type="application/pdf" data-aos="zoom-in-left")
              span(style="color:#12263F !important;") Descargar
              i.fas.fa-file-download(style="color:#12263F !important;")
    
    Separador
    .titulo-segundo(data-aos="fade-right")
      h2#t_1_5 1.5  Tablas militares

    p(data-aos="fade-right") Es una herramienta que se utiliza a nivel farmacéutico para realizar un muestreo a un lote de los productos farmacéuticos que entran de una adquisición realizada. La tabla militar surge durante la Segunda Guerra mundial y se convierte en el sistema de inspección más usado a nivel mundial, motivo por el cual la ISO la adoptó y hoy en día se conoce como ISO-2859.
    p.mt-4(data-aos="fade-right") Para realizar el muestreo por medio de las tablas militares se debe tener presente que a nivel farmacéutico los niveles de inspección más usados son los niveles generales y el nivel II, excepto en los laboratorios fabricantes que se utiliza el nivel especial.
    p.mt-4(data-aos="fade-right") El paso a paso para realizar el muestreo por medio de las tablas militares es:

    TabsA.color-acento-botones.mt-5(data-aos="zoom-in")
      .tarjeta.color-acento-botones.p-4.tarjeta_1(titulo="PASO 1: definir la magnitud del lote" style="background-color:#D9F5F9;")
        h5 PASO 1: definir la magnitud del lote
        p.mt-4 Identificar y separar por lotes los productos que serán inspeccionados. 
        figure.mt-4
          img(src="@/assets/curso/tema1/9.png" alt="Imagen de un lote de medicamentos")
      .tarjeta.color-acento-botones.p-4.tarjeta_1(titulo="PASO 2: establecer el nivel de inspección" style="background-color:#D9F5F9;")
        h5 PASO 2: establecer el nivel de inspección
        p.mt-4 Definir si el lote será inspeccionado bajo los niveles especiales (S1, S2, S3 y S4) o generales (I bajo, II general, y III estricto).
        p.mt-4 Se muestra la tabla de códigos de tamaño de muestra (se aplica para los pasos 1 y 2). 
        figure.mt-4
          img(src="@/assets/curso/tema1/8.svg" alt="Imagen que contiene una tabla con los códigos de tamaño de muestra, los cuales están representados así: Tamaño de lote: DE: de 2 hasta 500.001 A: de 8 hasta mayores Niveles especiales de inspección: S1: de A hasta D S2: de A hasta E S3: de A hasta H S4: de A hasta K Niveles generales de inspección: I: de A hasta N II: de A hasta Q III: de B hasta R")
      .tarjeta.color-acento-botones.p-4.tarjeta_1(titulo="PASO 3: seleccionar el plan de muestreo" style="background-color:#D9F5F9;")
        h5 PASO 3: seleccionar el plan de muestreo
        p.mt-4 Pueden ser simples, dobles o múltiples y cabe la posibilidad de combinarlos de acuerdo con las necesidades de inspección. En farmacia normalmente se utiliza el simple que consiste en un tamaño de muestra (n) y un número de aceptabilidad (Ac). Al realizar el muestreo se acepta el lote si las unidades con defectos están iguales o por debajo del Ac y se rechaza si están por encima del Ac.
        p.mt-4 #[strong Ejemplo:] el Ac es 3, por lo cual si en la inspección se encuentra con 3 o menos de 3 unidades defectuosas se acepta el lote; pero si por el contrario son 4 o más, se rechaza.
        figure.mt-4
          img(src="@/assets/curso/tema1/10.svg" alt="Imagen decorativa")
      .tarjeta.color-acento-botones.p-4.tarjeta_1(titulo="PASO 4: seleccionar el método de muestreo" style="background-color:#D9F5F9;")
        h5 PASO 4: seleccionar el método de muestreo
        p.mt-4 En este paso se determina cuál será la muestra que se evaluará y para ello existen dos clases de muestreo:
        ul.fa-ul.mt-3
          li
            i.fas.fa-atom.fa-li(style="color:#7E5EE3 !important;")
            | Probabilístico como el muestreo aleatorio simple, el muestreo aleatorio sistematizado, entre otros.
          li
            i.fas.fa-atom.fa-li(style="color:#7E5EE3 !important;")
            | No probabilístico como el muestreo por cuotas, bola de nieve, entre otros. 
        p.mt-4 A nivel farmacéutico el que más se utiliza es el probabilístico-muestreo aleatorio simple, que consiste en seleccionar al azar los productos que serán inspeccionados.
        figure.mt-4
          img(src="@/assets/curso/tema1/12.svg" alt="Imagen decorativa")
      .tarjeta.color-acento-botones.p-4.tarjeta_1(titulo="PASO 5: determinar el tipo de inspección " style="background-color:#D9F5F9;")
        h5 PASO 5: determinar el tipo de inspección 
        p.mt-4 El tipo de inspección puede ser normal, estricta y reducida. La normal es utilizada cuando no se conoce la calidad de un producto o es adquirido por primera vez. La estricta cuando después de varias revisiones o adquisiciones la calidad de los productos no es la adecuada y la reducida cuando se tiene la certeza de la calidad de los productos y después de varias adquisiciones nunca se ha rechazado un lote.
        p.mt-4 Es importante tener presente que el tipo de inspección puede cambiar en cualquier momento, por lo cual lo más indicado es iniciar con el normal.
        figure.mt-4
          img(src="@/assets/curso/tema1/13.svg" alt="Imagen que contiene una tabla con las reglas de cambio entre tipos de inspección, las cuales están representadas así: DE: Reductiva A: Normal Criterio: Se obtiene un lote rechazado DE: Normal: A: Estricta: Criterio: Se obtienen de dos a cinco lotes consecutivos rechazados. DE: Estricta. A: Suspensión de la inspección o revisión uno a uno de los productos. Criterio: Se obtienen cinco lotes consecutivos bajo inspección estricta rechazados. DE: Estricta. A: Normal. Criterio: Se obtienen cinco lotes consecutivos sin rechazo. DE: Normal. A: Reducida. Criterio: Se obtienen diez días consecutivos sin rechazo.")
      .tarjeta.color-acento-botones.p-4.tarjeta_1(titulo="PASO 6: determinar el tamaño de la muestra  " style="background-color:#D9F5F9;")
        h5 PASO 6: determinar el tamaño de la muestra  
        p.mt-4 En este paso se debe evidenciar dentro de la tabla de códigos de tamaño de muestra el rango en el cual se ubica la cantidad de productos que se tiene de ese lote a inspeccionar.
        p.mt-4 #[strong Ejemplo:] se tiene un lote de 800 cajas de loratadina 10mg tableta, por lo cual según la tabla de códigos de tamaño de muestra y el nivel general de inspección II, el código de la muestra es la letra “J”.
        figure.mt-4
          img(src="@/assets/curso/tema1/14.svg" alt="Imagen que contiene una tabla con los códigos de tamaño de muestra, los cuales están representados así: Tamaño de lote: DE: de 2 hasta 500.001 A: de 8 hasta mayores Niveles especiales de inspección: S1: de A hasta D S2: de A hasta E S3: de A hasta H S4: de A hasta K Niveles generales de inspección: I: de A hasta N II: de A hasta Q III: de B hasta R")
      .tarjeta.color-acento-botones.p-4.tarjeta_1(titulo="PASO 7: determinar el nivel de aceptabilidad" style="background-color:#D9F5F9;")
        h5 PASO 7: determinar el nivel de aceptabilidad  
        p.mt-4 Se utiliza la segunda tabla denominada “Nivel aceptable de calidad NAC”, para los cuales existe una diferente por cada plan de muestreo (simple, doble, múltiple) y cada tipo de inspección (normal, estricta, reducida). Los niveles que se tiene presente son de acuerdo con los defectos (crítico 1.0 %, mayor 6.5 % y menor 15 %) y se aplica la tabla de muestreo simple para inspección normal.
        p.mt-4 Inicialmente, se ubica la letra que fue arrojada en el paso anterior, esta a su vez  muestra el tamaño de la muestra (cantidad de productos a inspeccionar), posterior se marca una línea horizontal hasta el nivel aceptable de calidad (1.0%, 6.5% o 15%) y finalmente desde allí se marca una línea vertical formando una L.
        figure.mt-4
          img(src="@/assets/curso/tema1/15.svg" alt="Imagen que contiene una ejemplo con el formato denominado Nivel aceptable de calidad NAC")
        p.mt-4 En el ejemplo de la imagen se tendría:
        p.mb-0 Para defecto crítico se acepta (Ac) con 2 unidades y se rechaza (Re) con 3 unidades.
        p.mb-0 Para defecto mayor se acepta (Ac) con 10 unidades y se rechaza (Re) con 11 unidades.
        p Para defecto menor se acepta (Ac) con 21 unidades y se rechaza (Re) con 22 unidades.
    
    Separador
    .titulo-segundo(data-aos="fade-right")
      h2#t_1_6 1.6  Control del proceso de inspección
    
    p(data-aos="fade-right") Durante todo el proceso de inspección de productos farmacéuticos se registra una serie de información en formatos y documentos que permiten poder realizar la trazabilidad a los productos en todo momento y, así mismo, verificar la calidad de dicho proceso. Por lo cual es de suma importancia archivar (físico) o guardar (sistematizado) de forma ordenada y segura toda la información.
    p.mt-4(data-aos="fade-right") Dentro del control al proceso están:
    ul.fa-ul.mt-3
      li.mb-2(data-aos="fade-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3 !important;")
        | Las auditorías internas.
      li.mb-2(data-aos="fade-right")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3 !important;")
        | Autoevaluaciones en ciertos periodos de tiempo. 
    
    p.mt-4(data-aos="fade") Este control se realiza porque en caso de hallar errores no solo en el proceso en tiempo real, sino también en la elaboración de los documentos y formatos utilizados, exista tiempo de corregirlos. Para dichas verificaciones se pueden utilizar las listas de chequeo, ya sean elaboradas por la institución o copiadas de las actas de las visitas del ente regulador (DSSA).
       
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
.tarjeta.tarjeta--azul.acordion__activo
  background-color: #ECE7FB
.tarjeta_1 *
  color: #12263F !important
</style>
