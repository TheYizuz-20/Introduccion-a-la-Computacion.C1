export default class Cl_Transito {
    constructor(placa,montoTrimestre,velocidad){
        this.placa = placa;
        this.montoTrimestre = montoTrimestre;
        this.velocidad = velocidad;
    }

    set placa(p) {
        this._placa = p;
    }

    get placa() {
        return this._placa;
    }

    set montoTrimestre(mT) {
        this._montoTrimestre = +mT;
    }

    get montoTrimestre() {
        return this._montoTrimestre;
    }

    set velocidad(v) {
        this._velocidad = +v;
    }

    get velocidad() {
        return this._velocidad;
    }

    montoMulta() {
        if (this.velocidad > 120) {
            return this.montoTrimestre * 0.8;
        } else if (this.velocidad > 100) {
            return this.montoTrimestre * 0.6;
        } else {
            return this.montoTrimestre * 0.5;
        }
    }

    montoTotal () {
        return this.montoTrimestre + this.montoMulta();
    }
}