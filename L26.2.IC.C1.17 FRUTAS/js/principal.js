/* Análisis de Datos 
Doña Emilia, desea comprar la fruta que le falta para preparar una Tizana; para lo cual debe indicar la fruta (1. 
Piña, 2. Patilla, 3.Naranja 4.Cambur 5.Mandarina) y la cantidad en Kg. Los precios por Kg son: Piña: 2.5 USD, 
Patilla: 2 USD, Naranja: 1.5 USD, Cambur: 2 USD, Mandarina: 3 USD. Además, recibe un descuento del 3% 
sobre el monto base, si la cantidad es mayor a 10,5 kls. Realice un programa que permita mostrar: el nombre de 
la fruta, el monto base, el descuento y el total a pagar.
*/

import Cl_Fruta from "./Cl_Fruta.js";
import Cl_iFruta from "./Cl_iFruta.js";

let iFruta = new Cl_iFruta(),
    nF = iFruta.leerNombreFruta(),
    cF = iFruta.leerCantidadFruta(),
    fruta = new Cl_Fruta(nF,cF),
    salida = document.getElementById("salida");

salida.innerHTML = iFruta.reporteFruta(fruta.nombreFrutaTexto(),fruta.montoBase(),fruta.montoDescuento(),fruta.montoTotal());