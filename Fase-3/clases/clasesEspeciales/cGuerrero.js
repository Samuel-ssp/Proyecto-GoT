import { Personaje } from "../cPersonaje.js";
import { Arma } from "../cArma.js";
export class Guerrero extends Personaje{

    #arma;
    #vida;

    constructor(nombre,edad){
        super(nombre,edad);
        this.#vida=100;
    }

    getarma(){
        return this.#arma;
    }

    getvida(){
        return this.#vida;
    }

    #setarma(arma){
        this.#arma=arma;
    }

    #setvida(vida){
        this.#vida=vida;
    }
    ////METODOS 

    darArma(arma){
        // Verificar que sea un arma
        if(!(arma instanceof Arma)){
            console.log(`No estás añadiendo un arma`);
            return;
        }

        // Verificar si el personaje ya tiene un arma
        if(this.#arma){
            console.log(`${this.getnombre()} ya tiene un arma: ${this.#arma.getnombre()}`);
            return;
        }

        // Verificar si el arma ya tiene propietario
        if(arma.getpropietario()){
            console.log(`El arma ${arma.getnombre()} ya tiene propietario: ${arma.getpropietario().getnombre()}`);
            return;
        }
        
        // Asignar propietario al arma
        this.#setarma(arma);
        arma.setpropietario(this.getnombre());
        console.log(`${this.getnombre()} ahora tiene ${arma.getnombre()}`); 
    }

    quitarArma(arma){

        if(!(arma instanceof Arma)){
            console.log(`No estás añadiendo un arma`);
            return;
        }

        // Verificar si el personaje ya tiene un arma
        if(!this.#arma){
            console.log(`${this.getnombre()} no tiene ningun arma`);
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
        console.log(`${this.getnombre()} se le quito ${arma.getnombre()}`);
    }

    luchar(){

        if(this.#arma){
            console.log(`${this.getnombre()} ataca con ${this.#arma.getnombre()}, causando ${this.#arma.getdaño()} de daño.`);
        }else{
            console.log(`${this.getnombre()} no tiene arma pero le mete tal paliza que se caga la perra.`);
        }
        
    }

    entrenar(){
        if(this.#arma){
            console.log(`${this.getnombre()} entrena con su arma ${this.#arma.getnombre()} de daño ${this.#arma.getdaño()}`);
            this.#arma.setdaño((this.#arma.getdaño())+1);
            console.log(`Daño de arma aumentado 
Daño actual ${this.#arma.getdaño()}`)
        }else{
            console.log(`${this.getnombre()} sin arma realiza tremendos burpees.`);
        }
    }

    recibirDaño(daño){
        this.#vida -= daño;
        if(this.#vida<=0){
            this.#vida=0;
            this.morimiento();
        }

    }

    atacar(objetivo){

        let daño = Math.floor(this.#arma.getdaño())

    }
};