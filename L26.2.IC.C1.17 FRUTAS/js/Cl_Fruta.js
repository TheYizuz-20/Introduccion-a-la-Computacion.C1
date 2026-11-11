export default class Cl_Fruta {
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

    nombreFrutaTexto() {
        switch (this.nombreFruta) {
            case 1:
                return "Piña";
                break;
            case 2:
                return "Patilla";
                break;
            case 3:
                return "Naranja";
                break;
            case 4:
                return "Cambur";
                break;
            default:
                return "Mandarina";
        }
    }

    montoBase() {
        switch (this.nombreFruta) {
            case 1:
                return this.cantidadFruta * 2.5;
                break;
            case 2:
                return this.cantidadFruta * 2.0;
                break;
            case 3:
                return this.cantidadFruta * 1.5;
                break;
            case 4:
                return this.cantidadFruta * 2.0;
                break;
            default:
                return this.cantidadFruta * 3.0;
        }
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