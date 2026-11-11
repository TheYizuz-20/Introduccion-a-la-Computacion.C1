export default class Cl_Arepera {
    constructor(cJamonYQueso, cPollo, cPabellon, cDomino, cQueso) {
        this.cJamonYQueso = cJamonYQueso;
        this.cPollo = cPollo;
        this.cPabellon = cPabellon;
        this.cDomino = cDomino;
        this.cQueso = cQueso;
    }

    set cJamonYQueso(cJQ) {
        this._cJamonYQueso = +cJQ;
    }

    get cJamonYQueso() {
        return this._cJamonYQueso;
    }

    set cPollo(cP) {
        this._cPollo = +cP;
    }

    get cPollo() {
        return this._cPollo;
    }

    set cPabellon(cPB) {
        this._cPabellon = +cPB;
    }

    get cPabellon() {
        return this._cPabellon;
    }

    set cDomino(cD) {
        this._cDomino = +cD;
    }

    get cDomino() {
        return this._cDomino;
    }

    set cQueso(cQ) {
        this._cQueso = +cQ;
    }

    get cQueso() {
        return this._cQueso;
    }

    montoJamonYQueso() {
        return this.cJamonYQueso * 3.0;
    }

    montoPollo() {
        return this.cPollo * 3.5;
    }

    montoPabellon() {
        return this.cPabellon * 5.0;
    }

    montoDomino() {
        return this.cDomino * 3.0;
    }

    montoQueso() {
        return this.cQueso * 1.5;
    }

    montoTotal() {
        return this.montoJamonYQueso() + this.montoPollo() + this.montoPabellon() + this.montoDomino() + this.montoQueso();
    }
}
