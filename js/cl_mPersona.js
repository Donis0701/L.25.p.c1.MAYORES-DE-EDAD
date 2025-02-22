export default class cl_mPersona {
    constructor({nombre, edad}) {
        this._nombre = nombre;
        this._edad = edad;
    }
    set nombre(n) {
        this._nombre = n;
    }
    get nombre() {
        return this._nombre;
    }
    set edad(e) {
        this._edad =+e;
    }
    get edad() {
        return this._edad;
    }
}