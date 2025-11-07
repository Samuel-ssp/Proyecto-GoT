import { Personaje } from "../cPersonaje.js";

export class Rey extends Personaje{ 

    #aniosReinado;

    constructor(nombre,edad,aniosReinado){
        super(nombre,edad);
        this.#aniosReinado=aniosReinado;
    }

    getaniosReinado(){
        return this.#aniosReinado;
    }

    setaniosReinado(aniosReinado){
        this.#aniosReinado=aniosReinado;
    }
    ////METODOS 

    

    luchar(){

        console.log(`${this.getnombre()} no lucha por el mismo, tiene ejercitos que lo hacen por el.`)
    }

    gobernar(){
        console.log(`${this.getnombre()} gobierna como puede desde hace ${this.#aniosReinado} años`);
    }
};