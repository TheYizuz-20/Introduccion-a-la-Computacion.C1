/* Análisis de Datos 
La Inspectoría de Tránsito necesita un programa para registrar a los infractores y gestionar el cobro de multas al 
momento del pago de los trimestres. De cada infractor se conoce: la placa del vehículo, el monto del trimestre y la 
velocidad detectada. El cálculo de la multa se basará en aplicar un porcentaje al monto del trimestre, determinado 
según la velocidad conforme a la siguiente tabla. Se le pide reportar: la placa, el monto de la multa y el monto total 
a pagar
        Velocidad (Km/h)            % a aplicar sobre el monto del trimestre 
            > 120                                   80%
      Más de 100 hasta 120                          60%
         Entre 80 y 100                             50%
*/

import Cl_Transito from "./Cl_Transito.js";
import Cl_iTransito from "./Cl_iTransito.js";

let iTransito = new Cl_iTransito(),
    p = iTransito.leerPlaca(),
    mT = iTransito.leerMontoTrimestre(),
    v = iTransito.leerVelocidad(),
    transito = new Cl_Transito(p, mT, v),
    salida = document.getElementById("salida");

salida.innerHTML = iTransito.reporteTransito(transito.placa, transito.montoMulta(),transito.montoTotal());