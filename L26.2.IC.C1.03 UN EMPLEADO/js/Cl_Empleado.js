export default class Cl_Empleado{
    constructor(nombre,sueldoBase,annoServicio){
        this.nombre = nombre;
        this.sueldoBase = sueldoBase;
        this.annoServicio = annoServicio;
    }

    set nombre(n){
        this._nombre = n;
    }

    get nombre(){
        return this._nombre;
    }

    set sueldoBase(sB){
        this._sueldoBase = +sB;
    }

    get sueldoBase(){
        return this._sueldoBase;
    }

    set annoServicio(aS){
        this._annoServicio = +aS;
    }

    get annoServicio(){
        return this._annoServicio;
    }

    aumento(){
        if (this.annoServicio > 5){
            return this.sueldoBase * 0.15
        } else {
            return 0
        }
    }

    nuevoSueldo(){
        return this.sueldoBase + this.aumento()
    }

    categoria(){
        if (this.annoServicio >= 7){
            return "Veterano"
        } else {
            return "Novato"
        }
    }
}