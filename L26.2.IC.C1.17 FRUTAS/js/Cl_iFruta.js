export default class Cl_iFruta{
    leerNombreFruta(){
        return prompt("Indique la fruta (1. Piña, 2. Patilla, 3. Naranja, 4. Cambur, 5. Mandarina):");
    }

    leerCantidadFruta(){
        return prompt("Indique la cantidad en Kg:");
    }

    reporteFruta(nombreFrutaTexto, montoBase, montoDescuento, montoTotal){
        return `
        Fruta: ${nombreFrutaTexto}
        <br>Monto Base: $${montoBase.toFixed(2)}
        <br>Descuento: $${montoDescuento.toFixed(2)}
        <br>Monto Total: $${montoTotal.toFixed(2)}
        `;
    }
}