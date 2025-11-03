import { Personaje } from "./cPersonaje.js";
import { Casa } from "./cCasa.js";
export class Reino{

    #nombre;
    #rey;
    #casas=[];

    constructor(nombre){
        this.#nombre=nombre;
    }

    getnombre(){
        return this.#nombre;
    }
    getrey(){
        return this.#rey;
    }
    getcasas(){
        return this.#casas;
    }

    setnombre(nombre){
        this.#nombre=nombre;
    }
    #setrey(rey){
        this.#rey=rey;
    }
    #setcasa(casa){
        this.#casas.push(casa);
    }

    //METODOS

    asignarRey(personaje){
        
        if(this.#rey){
            console.log(`Ya existe un rey`);
            console.log(`El rey actual es ${this.#rey.getnombre()} de la casa ${this.#rey.getcasa()}`);
            return;
        }
        if(personaje instanceof Personaje){
            this.#setrey(personaje);
            console.log(`El rey actual del reino ${this.#nombre} es ${this.#rey.getnombre()} de la casa ${this.#rey.getcasa()}`);
        }
    }

    mostrarrey(){
        console.log(`El rey actual es ${this.#rey.getnombre()} de la casa ${this.#rey.getcasa()}`);
    }

    asignarCasa(casa){
       
        if(casa instanceof Casa){
            //Comprobar si existe la casa
            if(this.#casas.find(casas => casa == casas)){
                console.log(`La casa ${casa.getnombre()} ya existe en el reino ${this.#nombre}`);
                return;
            }

            this.#setcasa(casa)
            console.log(`La casa ${casa.getnombre()} se añadio al reino ${this.#nombre}`);
        }
    }

    mostrarCasas(){
        console.log(`Casas de el reino ${this.#nombre}`);
        this.#casas.forEach(casa => {
            console.log(` - ${casa.getnombre()}`);
        });
    }
    
}