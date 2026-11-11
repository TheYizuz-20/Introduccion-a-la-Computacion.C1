/* Análisis de Datos 
La Arepera “La Gigante”, necesita que calcule el monto total de ventas del día, se debe tomar en cuenta los siguientes 
precios de las arepas: Jamón y Queso (3 USD), Pollo (3.5 USD), Pabellón (5 USD), Domino (3 USD) y   Queso (1.5 
USD). Debes ingresar la cantidad vendida de cada tipo de arepa y el programa debe calcular el monto total de ventas 
del día.
*/

import Cl_Arepera from "./Cl_Arepera.js";
import Cl_iArepera from "./Cl_iArepera.js";

let iArepera = new Cl_iArepera(),
    cJQ = iArepera.leerArepaJamonYQueso(),
    cP = iArepera.leerArepaPollo(),
    cPB = iArepera.leerArepaPabellon(),
    cD = iArepera.leerArepaDomino(),
    cQ = iArepera.leerArepaQueso(),
    arepera = new Cl_Arepera(cJQ, cP, cPB, cD, cQ),
    salida = document.getElementById("salida");

salida.innerHTML = iArepera.reporteArepera(arepera.montoJamonYQueso(),arepera.montoPollo(),arepera.montoPabellon(),arepera.montoDomino(),arepera.montoQueso(),arepera.montoTotal()
);