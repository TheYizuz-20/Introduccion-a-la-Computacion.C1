export default class Cl_iMermelada{

    leerSabor(){
        return prompt("Introduzca el Sabor de la Mermelada:")
    }

    leerCosto(){
        return prompt("Introdzca el Costo de la Mermelada:")
    }

    leerCantidad(){
        return prompt("Introduzca la Cantidad de Mermelada que desea:")
    }

    leerEdoLara(){
        return prompt("Introduzca si es de Edo. Lara (1 para si, 0 para no):")
    }

    reporteMermelada(montoRecargo,precioVenta,montoBase,montoDescuento,totalPagar){
        return `
        <br> El monto del recargo es: ${montoRecargo}$
        <br> El precio de venta es: ${precioVenta}$
        <br> El monto base es: ${montoBase}$
        <br> El monto de descuento es: ${montoDescuento}$
        <br> El total a pagar es: ${totalPagar}$
        `
    }
}