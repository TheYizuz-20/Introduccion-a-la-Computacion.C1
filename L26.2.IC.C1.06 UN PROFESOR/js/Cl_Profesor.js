export default class Cl_Profesor {
    constructor(cedula, categoria, sueldo){
        this.cedula = cedula;
        this.categoria = categoria;
        this.sueldo = sueldo;
    }

    set cedula(c){
        this._cedula = c;
    }

    get cedula(){
        return this._cedula;
    }

    set categoria(c){
        this._categoria = +c;
    }

    get categoria(){
        return this._categoria;
    }

    set sueldo(s){
        this._sueldo = +s;
    }

    get sueldo(){
        return this._sueldo;
    }

    montoPrima(){
        switch(this.categoria){
            case 1:
                return this.sueldo * 0.03;
                break;
            case 2:
                return this.sueldo * 0.05;
                break;
            case 3:
                return this.sueldo * 0.08;
                break;
            case 4:
                return this.sueldo * 0.11;
                break;
            default:
                return this.sueldo * 0.15;
        }
    }

    nuevoSueldo(){
        return this.sueldo + this.montoPrima();
    }
}