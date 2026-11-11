export default class Cl_FrutaA {
    constructor(nombreFruta, cantidadFruta) {
        this.nombreFruta = nombreFruta;
        this.cantidadFruta = cantidadFruta;
    }

    set nombreFruta(nF) {
        this._nombreFruta = +nF;
    }

    get nombreFruta() {
        return this._nombreFruta;
    }

    set cantidadFruta(cF) {
        this._cantidadFruta = +cF;
    }

    get cantidadFruta() {
        return this._cantidadFruta;
    }

    #datosFruta() {
        switch (this.nombreFruta) {
            case 1:
                return { 
                    nombre: "Piña", precio: 2.5 
                };
            case 2:
                return { 
                    nombre: "Patilla", precio: 2.0 
                };
            case 3:
                return { 
                    nombre: "Naranja", precio: 1.5 
                };
            case 4:
                return { 
                    nombre: "Cambur", precio: 2.0 
                };
            default:
                return { 
                    nombre: "Mandarina", precio: 3.0 
                };
        }
    }

    nombreFrutaTexto() {
        return this.#datosFruta().nombre;
    }

    montoBase() {
        return this.#datosFruta().precio * this.cantidadFruta;
    }

    montoDescuento() {
        if (this.cantidadFruta > 10.5) {
            return this.montoBase() * 0.03;
        } else {
            return 0;
        }
    }

    montoTotal() {
        return this.montoBase() - this.montoDescuento();
    }
}