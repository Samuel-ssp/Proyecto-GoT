import { Personaje } from "../cPersonaje.js";

export class Consejero extends Personaje{

    #especialidad;

    constructor(nombre,edad,especialidad){
        super(nombre,edad);
        this.#especialidad=especialidad;
    }

    getespecialidad(){
        return this.#especialidad;
    }

    setespecialidad(especialidad){
        this.#especialidad=especialidad;
    }
    ////METODOS 

    

    luchar(){

        if(this.#especialidad){
            console.log(`${this.getnombre()} no ataca con armas, lucha con la palabra siendo especialista en ${this.#especialidad}.`);
        }else{
            console.log(`${this.getnombre()} no ataca y no hace nada que no tiene ni especialidad.`);
        }
        
    }

    aconsejar(){
        
        console.log(`Hablo como Consejero  de especialidad ${this.#especialidad}: hazlo, y si sale mal, siempre podemos culpar al dragon.`);
    }
};