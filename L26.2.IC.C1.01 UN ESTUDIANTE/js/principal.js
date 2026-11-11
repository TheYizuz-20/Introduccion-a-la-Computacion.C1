/* Análisis de Datos
Un estudiante cursa una asignatura de la carrera de Ingeniería en Informática de la UCLA, y ha recibido las 
notas de sus 3 evaluaciones presentadas. Conociendo la cédula del estudiante y las notas obtenidas, se requiere: 
Calcular la nota final obtenida por el estudiante en la asignatura. Y mostrar un reporte (salida) con la cédula 
del estudiante, las 3 notas obtenidas y la nota final.
*/

import Cl_Estudiante from "./Cl_Estudiante.js";
import Cl_iEstudiante from "./Cl_iEstudiante.js";

let iEstudiante = new Cl_iEstudiante(),
    c = iEstudiante.leerCedula(),
    n1 = iEstudiante.leerNota1(),
    n2 = iEstudiante.leerNota2(),
    n3 = iEstudiante.leerNota3(),
    estudiante = new Cl_Estudiante(c,n1,n2,n3),
    salida = document.getElementById("salida");

salida.innerHTML = iEstudiante.reporteEstudiante(estudiante.cedula,estudiante.nota1,estudiante.nota2,estudiante.nota3,estudiante.notaFinal());