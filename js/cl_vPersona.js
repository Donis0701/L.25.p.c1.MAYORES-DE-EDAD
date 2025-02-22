export default class cl_vPersona{
    constructor(){
        this.inNombre = document.getElementById('personaForm_inNombre');
        this.inEdad = document.getElementById('personaForm_inEdad');
        this.btProcesar = document.getElementById('personaForm_btProcesar');
    }
    get nombre(){
        return this.inNombre.value;
    }
    get edad(){
        return +this.inEdad.value;
    }
}