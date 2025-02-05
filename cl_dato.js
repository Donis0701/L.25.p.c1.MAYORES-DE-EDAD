export default class Dato {
    constructor(){
        this.cntPersonas = 0;
        this.cntMayores = 0;
    }
    procesarPersona(persona){
        this.cntPersonas++;
        if(persona.edad >= 18) this.cntMayores++;
    }
    porcentajeMayores(){
        return (this.cntMayores / this.cntPersonas) * 100;
    }
}