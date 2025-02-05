/*Sea el nombre y la edad de varias personas.Se necesita un programa que lea estos datos y reporte al final el porcentaje de personas
que son mayores de edad.*/
import Persona from "./cl_persona.js";
import Dato from "./cl_dato.js";

let persona1 = new Persona("Luis", 15);
let persona2 = new Persona("Ana", 19);
let persona3 = new Persona("Jose", 21);
let persona4 = new Persona("Carmen", 17);
let persona5 = new Persona("Rosa", 18); 
let persona6 = new Persona("Jose", 22);
let persona7 = new Persona("Maria", 17);
let persona8 = new Persona("Luz", 19); 
let persona9 = new Persona("Rafael", 23);
let persona10 = new Persona("liz", 15);
let persona11 = new Persona("Marcos", 20);
let persona12 = new Persona("leo", 16);

let datos = new Dato();

datos.procesarPersona(persona1);
datos.procesarPersona(persona2);
datos.procesarPersona(persona3);
datos.procesarPersona(persona4);
datos.procesarPersona(persona5);
datos.procesarPersona(persona6);
datos.procesarPersona(persona7);
datos.procesarPersona(persona8);
datos.procesarPersona(persona9);
datos.procesarPersona(persona10);
datos.procesarPersona(persona11);
datos.procesarPersona(persona12);

let salida = document.getElementById("salida");
salida.innerHTML = `Cantidad de personas: ${datos.cntPersonas}<br>
 <br> Cantidad de personas mayores de edad: ${datos.cntMayores}
 <br> Porcentaje de personas mayores de edad: ${datos.porcentajeMayores()}%`;