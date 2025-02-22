export default class cl_controlador {
    constructor(modelo, vista) {
        this.modelo = modelo;
        this.vista = vista;
    }
    procesarPersona() {
        this.modelo.procesarPersona(this.vista.procesarPersona());
        this.vista.reportarPersona(
            this.modelo.totalPersonas(),
            this.modelo.porcentajeMayores(),
            this.modelo.personaMayorEdad()
        );
    }
}