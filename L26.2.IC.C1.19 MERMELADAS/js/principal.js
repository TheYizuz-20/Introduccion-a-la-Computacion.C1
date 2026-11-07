/* Analisis de Datos
En Cubiro venden mermeladas de diferentes sabores (1.Fresa, 2.Melocotón, 3.Guayaba, 4.Piña, y 5.Tamarindo), 
el precio de venta tiene un porcentaje de recargo sobre el costo, según el sabor: 
        Fresa           35%
        Melocotón       30%
        Guayaba         25%
        Piña            20%
        Tamarindo       40% 
Además, si la mermelada es del edo. Lara se le hace un descuento del 5% sobre el monto base. 
Se cuenta con los siguientes datos de entrada: sabor de la mermelada, costo, cantidad vendida y si es de Lara o no. Se 
desea calcular e imprimir: 
        a.- El monto del recargo  
        b.- El precio de venta. 
        c.- El monto base o monto a pagar sin el descuento.  
        d.- El monto del descuento 
        c.- Total a Pagar. 
*/

import Cl_Mermelada from "./Cl_Mermelada.js";
import Cl_iMermelada from "./Cl_iMermelada.js";

let iMermelada = new Cl_iMermelada(),
    sabor = iMermelada.leerSabor(),
    costo = iMermelada.leerCosto(),
    cantidad = iMermelada.leerCantidad(),
    edoLara = iMermelada.leerEdoLara(),
    mermelada = new Cl_Mermelada(sabor,costo,cantidad,edoLara),
    salida = document.getElementById("salida");

salida.innerHTML = iMermelada.reporteMermelada(mermelada.montoRecargo(),mermelada.precioVenta(),mermelada.montoBase(),mermelada.montoDescuento(),mermelada.totalPagar());