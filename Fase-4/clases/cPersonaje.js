import { Arma } from "./cArma.js";
export class Personaje{

    #nombre;
    #age;
    #vivo;
    #arma;
    #casa;

    constructor(nombre,edad){
        
        this.#nombre=nombre;
        this.#age=edad;
        this.#vivo=true;  
    }

    getnombre(){
        return this.#nombre;
    }

    getedad(){
        return this.#age;
    }

    getvivo(){
        return this.#vivo;
    }

    getcasa(){
        return this.#casa;
    }

    setnombre(nombre){
        this.#nombre=nombre;
    }
    
    setedad(edad){
        this.#age=edad;
    }

    #setvivo(vivo){
        this.#vivo=vivo;
    }

    setcasa(casa){
        this.#casa=casa;
    }

    // METODOS

    presentarse(){
        
        if(this.#casa){  
            console.log(`Soy ${this.#nombre} de la casa ${this.#casa}`)
        }else{
            console.log(`Soy ${this.#nombre} y no tengo casa`)
        }
    }

    

    morir(){
        if(this.#vivo){
            this.#vivo=false;
            console.log(`¡Oh Dios mío, han matado a ${this.#nombre}! ¡Hijos de p***!`);
        }else{
            console.log(`Este ya esta muerto`);
        }
    }

    resurrecion(){
        if(!this.#vivo){
            this.#vivo=true;
            console.log(`${this.#nombre} respawnea. Pulsa F para NO presentar respetos`)
        }else{
            console.log(`Que yo sepa ${this.#nombre} sigue vivo`)
        }
    }

}