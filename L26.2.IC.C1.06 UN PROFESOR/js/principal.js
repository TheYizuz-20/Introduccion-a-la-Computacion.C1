/*Un profesor Universitario, recibirá una prima de acuerdo a su categoría (1.Instructor, 
2.Asistente, 3.Agregado, 4.Asociado, 5.Titular). Del profesor se conoce: cédula, categoría 
y sueldo. El monto de la prima a recibir por el profesor, depende de su categoría y está 
sujeto a los porcentajes de la siguiente tabla: 
Categoría   Porcentaje 
Instructor      3% 
Asistente       5% 
Agregado        8% 
Asociado        11% 
Titular         15% 
Realice un programa que permita mostrar: la cédula, el monto de la prima y el nuevo sueldo.*/

import Cl_Profesor from "./Cl_Profesor.js";
import Cl_iProfesor from "./Cl_iProfesor.js";

let iProfesor = new Cl_iProfesor(),
    cedula = iProfesor.leerCedula(),
    categoria = iProfesor.leerCategoria(),
    sueldo = iProfesor.leerSueldo(),
    profesor = new Cl_Profesor(cedula,categoria,sueldo),
    salida = document.getElementById("salida");

salida.innerHTML = iProfesor.reporteProfesor(profesor.cedula,profesor.montoPrima(),profesor.nuevoSueldo());
