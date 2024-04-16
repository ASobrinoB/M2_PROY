![Banner](./imagenes/UDD.png) 

# Algoritmo de Sistema de Costos

## **ÍNDICE**

* [1. Introducción](#1-intro)
* [2. Arreglos](#2-arreglos)
* [3. Variables](#3-variables)
* [4. Bucle](#4-bucle)
* [5. Cálculos](#5-calculos)
* [6. Ejecución](#6-ejecucion)
* [7. Término de la ejecución](#7-termino)

****

## 1. Introducción

El algoritmo en pseudocódigo resuelve el enunciado que se indica a continuación:

### Enunciado ###

Construirás un algoritmo en pseudocódigo que simule un sistema para calcular el costo de un producto con base en su precio original y el porcentaje de descuento aplicado. El algoritmo debe cumplir con los siguientes requisitos:

-	Leer el precio original del producto.
-	Aplicar un descuento al producto si es aplicable (por ejemplo, si el cliente tiene un cupón de descuento).
-	Aplicar impuestos al producto (por ejemplo, el IVA u otros impuestos).
-	Si el cliente compra más de un artículo, aplicar un descuento por cantidad.
-	Calcular el costo de envío basado en el destino y el peso del paquete.
-	Calcular el costo final del producto sumando el precio con descuento, impuestos, descuento por cantidad y costo de envío.
-	Mostrar el costo final del producto, desglosando los diferentes componentes (descuentos, impuestos, descuento por cantidad y costo de envío).

****

## 2. Arreglos

Con el propósito de que el usuario elija un producto a traves de un menú, se incorpora un arreglo con 20 productos, y además se incorpora un arreglo con 13 destinos de despacho

![Image](./imagenes/DefinicionArreglos.png) 

Para ofrecer opciones al usuario, se llenan 4 arreglos con información del producto

- Código del producto

![Image](./imagenes/ArregloCodigoProducto.png) 

- Descripción del producto

![Image](./imagenes/ArreglodescripcionProducto.png) 

- Precio unitario

![Image](./imagenes/ArregloprecioProducto.png) 

- Peso unitario del producto en Kg

![Image](./imagenes/ArregloPesoKGProducto.png) 

Para ofrecer opciones al usuario, se llenan 3 arreglos con información del destino de despacho

- Código del destino

![Image](./imagenes/ArregloCodigoDestino.png) 

- Descripción del destino

![Image](./imagenes/ArregloDescripcionDestino.png) 

- Cargo fijo del destino

![Image](./imagenes/ArregloCargoFijoDestino.png) 

****

## 3. Variables

Hay variables con datos constantes que se pueden usar como configuración de parámetros del algoritmo

![Image](./imagenes/DatosConstantes.png) 

-	PorcentajeIVA <- 12.00; corresponde al porcentaje a calcular por concepto de IVA.

-	PromocionCupon <- 10.00; corresponde al porcentaje a descontar del precio del producto por concepto de cupón por primera compra.

-	PromocionCantidad <- 5.00; corresponde al porcentaje a descontar del (precio - cupon + IVA) por concepto de compra de más de una unidad.

-	ValorDespachoXKg <- 2.00; corresponde al valor por cada Kg de peso del producto por concepto de despacho, que luego se sumará con el cargo fijo del destino del despacho

-	Moneda <- "USD "; corresponde a la moneda de despliegue, por ejemplo podría modificarse a EUR, considerando que los precios de los productos, valor despacho por Kg y cargo fijo del destino deben adecuarse a la moneda.

-	Truncar <- 100.00; los calculos se redondean dependiendo de que si la moneda contiene centavos, en ese caso poner 100.00, o si la moneda no tiene centavos en ese caso poner 1.00.

****

## 4. Bucle

En la siguiente imagen se muestra el bucle usado en el algoritmo en pseudocódigo 

![Image](./imagenes/RepetirHastaQue.png) 

****

## 5. Cálculos

En la siguiente imagen se muestran los cálculos que se aplicaron para llegar al precio final

![Image](./imagenes/CalculoVentaTotal.png) 

****

## 6. Ejecución   

En la siguiente imagen se muestra la ejecución del algoritmo en pseudocódigo 

![Image](./imagenes/EjecucionPseudocodigo.png) 

En la siguiente imagen se muestran los datos resultantes

![Image](./imagenes/DespliegueResultadoFiinal.png) 

****

## 7. Término de la ejecución

Para terminar la ejecución del pseudocódigo tan solo se necesita ingresar un 0 (cero) en el menú de productos

![Image](./imagenes/EjecucionTermino.png) 

