import { Personaje } from "../cPersonaje.js";
import { Rey } from "./cRey.js";

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

    aconsejar(rey){
        
        if(rey instanceof Rey){
            console.log(`${this.getnombre()}  aconseja a ${rey.getnombre()}: hazlo, y si sale mal, siempre podemos culpar al dragon.`);
        }else{
            console.log(`Quien pide consejo no es rey, que se ponga a la cola`);
        }
    }
};