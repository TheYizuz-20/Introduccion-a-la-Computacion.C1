export default class Cl_iProfesor {
    leerCedula(){
        return prompt("Ingrese su cédula:")
    }

    leerCategoria(){
        return prompt("Indique la categoría del profesor:\n1. Instructor (3%)\n2. Asistente (5%)\n3. Agregado (8%)\n4. Asociado (11%)\n5. Titular (15%)");
    }

    leerSueldo(){
        return prompt("Ingrese su sueldo:")
    }

    reporteProfesor(cedula,montoPrima,nuevoSueldo){
        return `
        <br> Cédula del Profesor: ${cedula}
        <br> Monto de la Prima: ${montoPrima}$
        <br> Nuevo Sueldo: ${nuevoSueldo}$
        `
    }
}