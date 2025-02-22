/*Sea el nombre y la edad de varias personas.Se necesita un programa que lea estos datos y reporte al final el porcentaje de personas
que son mayores de edad.*/
import cl_mdato from './cl_mdato.js'
import cl_vDato from './cl_vDato.js'
import cl_controlador from './cl_controlador.js'

export default class cl_principal{
    constructor() {
        let modelo = new cl_mdato();
        let vista = new cl_vDato();
        let controlador = new cl_controlador(modelo, vista);
        vista.controlador = controlador;
    }
}