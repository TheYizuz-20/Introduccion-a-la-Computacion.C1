export default class Cl_iEstudiante {
    leerCedula() {
        return prompt("Ingrese la cédula del estudiante:");
    }

    leerNota1() {
        return prompt("Ingrese la Nota 1:");
    }

    leerNota2() {
        return prompt("Ingrese la Nota 2:");
    }

    leerNota3() {
        return prompt("Ingrese la Nota 3:");
    }

    reporteEstudiante(cedula,nota1,nota2,nota3,notaFinal){
        return `
        Cédula: ${cedula}
        <br>Nota 1: ${nota1}
        <br>Nota 2: ${nota2}
        <br>Nota 3: ${nota3}
        <br>Nota Final: ${notaFinal}
        `
    }
}