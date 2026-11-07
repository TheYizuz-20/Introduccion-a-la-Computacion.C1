export default class Cl_iEmpleado{

    leerNombre(){
        return prompt("Introduzca el Nombre:")
    }

    leerSueldoBase(){
        return prompt("Introduzca el Suedo Base:")
    }

    leerAnnoServicio(){
        return prompt("Introduzca el Año de Servicio:")
    }

    reporteEmpleado(nombre,aumento,nuevoSueldo,categoria){
        return `
        <br> Nombre: ${nombre}
        <br> Aumento: ${aumento}$
        <br> Nuevo Sueldo: ${nuevoSueldo}$
        <br> Categoria: ${categoria}
        `
    }
}