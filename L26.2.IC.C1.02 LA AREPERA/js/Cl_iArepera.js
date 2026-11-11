export default class Cl_iArepera{
    leerArepaJamonYQueso() {
        return prompt("Ingrese la cantidad de Arepas de Jamón y Queso:");
    }

    leerArepaPollo() {
        return prompt("Ingrese la cantidad de Arepas de Pollo:");
    }

    leerArepaPabellon() {
        return prompt("Ingrese la cantidad de Arepas de Pabellón:");
    }

    leerArepaDomino() {
        return prompt("Ingrese la cantidad de Arepas de Dominó:");
    }

    leerArepaQueso() {
        return prompt("Ingrese la cantidad de Arepas de Queso:");
    }

    reporteArepera(aJamonYQueso,aPollo,aPabellon,aDomino,aQueso,montoTotal){
        return `
        --- Resumen de ventas del Día ---
        <br> Arepas de Jamón y Queso: ${aJamonYQueso}$
        <br> Arepas de Pollo: ${aPollo}$
        <br> Arepas de Pabellon: ${aPabellon}$
        <br> Arepas de Domino: ${aDomino}$
        <br> Arepas de Queso: ${aQueso}$
        <br> Monto Total de ventas del Día: ${montoTotal}$
        `;
    }
}