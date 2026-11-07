export default class Cl_Mermelada{
    constructor(sabor,costo,cantidad,edoLara){
        this.sabor = sabor;
        this.costo = costo;
        this.cantidad = cantidad;
        this.edoLara = edoLara;
    }

    set sabor(s){
        this._sabor = +s;
    }

    get sabor(){
        return this._sabor;
    }

    set costo(c){
        this._costo = +c;
    }

    get costo(){
        return this._costo;
    }

    set cantidad(c){
        this._cantidad = +c;
    }

    get cantidad(){
        return this._cantidad;
    }

    set edoLara(e){
        this._edoLara = +e;
    }

    get edoLara(){
        return this._edoLara;
    }

    montoRecargo(){
        switch(this.sabor){
            case 1:
                return this.costo * 0.35;
                break;
            case 2:
                return this.costo * 0.3;
                break;
            case 3:
                return this.costo * 0.25;
                break;
            case 4:
                return this.costo * 0.2;
                break;
            default:
                return this.costo * 0.4;
        }
    }

    precioVenta(){
        return this.costo + this.montoRecargo();
    }

    montoBase(){
        return this.precioVenta() * this.cantidad;
    }

    montoDescuento(){
        if (this.edoLara === 1) {
            return this.montoBase() * 0.05;
        } else {
            return 0;
        }
    }

    totalPagar(){
        return this.montoBase() - this.montoDescuento();
    }
}