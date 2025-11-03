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

    getarma(){
        return this.#arma;
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

    #setarma(arma){
        this.#arma=arma;
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

    darArma(arma){
        // Verificar que sea un arma
        if(!(arma instanceof Arma)){
            console.log(`No estás añadiendo un arma`);
            return;
        }

        // Verificar si el personaje ya tiene un arma
        if(this.#arma){
            console.log(`${this.#nombre} ya tiene un arma: ${this.#arma.getnombre()}`);
            return;
        }

        // Verificar si el arma ya tiene propietario
        if(arma.getpropietario()){
            console.log(`El arma ${arma.getnombre()} ya tiene propietario: ${arma.getpropietario().getnombre()}`);
            return;
        }
        
        // Asignar propietario al arma
        this.#setarma(arma);
        arma.setpropietario(this.#nombre);
        console.log(`${this.#nombre} ahora tiene ${arma.getnombre()}`); 
    }

    quitarArma(arma){

        if(!(arma instanceof Arma)){
            console.log(`No estás añadiendo un arma`);
            return;
        }

        // Verificar si el personaje ya tiene un arma
        if(!this.#arma){
            console.log(`${this.#nombre} no tiene ningun arma`);
            if(arma.getpropietario()){
            console.log(`El arma ${arma.getnombre()} ya tiene propietario ${arma.getpropietario().getnombre()}`);
            this.darArma(arma);
            return;
            }
            return;
        }

        // Verificar si el arma ya tiene propietario
        if(!arma.getpropietario()){
            console.log(`El arma ${arma.getnombre()} no tiene propietario`);
            this.darArma(arma);
            return;
        }
        
        // Asignar propietario al arma
        this.#setarma(null);
        arma.quitarPropietario();
        console.log(`${this.#nombre} se le quito ${arma.getnombre()}`);
    }

    morimiento(){
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