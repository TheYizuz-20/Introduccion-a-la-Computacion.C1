export default class Cl_iTransito {
    leerPlaca() {
        return prompt("Introduzca la placa del vehículo:");
    }

    leerMontoTrimestre() {
        return prompt("Introduzca el monto del trimestre:");
    }

    leerVelocidad() {
        return prompt("Introduzca la velocidad detectada (km/h):");
    }

    reporteTransito(placa, montoMulta, montoTotal) {
        return `
        <br> Placa: ${placa}
        <br> Monto multa: ${montoMulta}$
        <br> Monto a pagar: ${montoTotal}$
        `;
    }
}