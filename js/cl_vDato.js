import cl_vPersona from "./cl_vPersona.js";
import cl_mPersona from "./cl_mpersona.js";

export default class cl_vDato {
    constructor(){
        this.controlador = null;
        this.lbltotalPersonas = document.getElementById('mainForm_lbltotalPersonas');
        this.lblporcentajeMayores = document.getElementById('mainForm_lblporcentajeMayores');
        this.lblpersonaMayorEdad = document.getElementById('mainForm_lblpersonaMayorEdad');

        this.vPersona = new cl_vPersona();
        this.vPersona.btProcesar.onclick = () => this.controlador.procesarPersona();
    }
    procesarPersona() {
        this.mPersona = new cl_mPersona({
            nombre: this.vPersona.nombre,
            edad: this.vPersona.edad
        })
        return this.mPersona;
    }
    reportarPersona(totalPersonas, porcentajeMayores, personaMayorEdad) {
        this.lbltotalPersonas.innerHTML = totalPersonas;
        this.lblporcentajeMayores.innerHTML = porcentajeMayores;
        this.lblpersonaMayorEdad.innerHTML = personaMayorEdad;

    }
}