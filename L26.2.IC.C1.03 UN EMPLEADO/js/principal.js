/* Analisis de Datos
De un empleado se conocen los siguientes datos: nombre, sueldo base y años de servicio;  
el empleado recibirá un aumento del 15% de su sueldo base si tiene más de 5 años de servicio. 
Desarrolle un programa que muestre el nombre, el aumento y el nuevo sueldo del empleado 
*/

import Cl_Empleado from "./Cl_Empleado.js";
import Cl_iEmpleado from "./Cl_iEmpleado.js"

let iEmpleado = new Cl_iEmpleado(),
    n = iEmpleado.leerNombre(),
    sB = iEmpleado.leerSueldoBase(),
    aS = iEmpleado.leerAnnoServicio(),

    empleado = new Cl_Empleado(n,sB,aS),
    salida = document.getElementById("salida");

    salida.innerHTML = iEmpleado.reporteEmpleado(empleado.nombre,empleado.aumento(),empleado.nuevoSueldo());