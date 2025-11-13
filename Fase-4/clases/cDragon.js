import { CaminanteBlanco } from "./cCaminanteBlanco.js";
export class Dragon{
    #nombre;
    #poder;
    #tipo;
    #vida
    #vivo;


    constructor(nombre,poder,tipo){
        this.#nombre=nombre;
        this.#poder=poder;
        this.#tipo=tipo;
        this.#vida=100;
        this.#vivo=true;
    }
    //GET
    getnombre(){
        return this.#nombre;
    }

    getpoder(){
        return this.#poder;
    }

    gettipo(){
        return this.#tipo;
    }

    getvida(){
        return this.#vida;
    }

    getvivo(){
       return this.#vivo; 
    }

    //SET
    setnombre(nombre){
        this.#nombre.push(nombre);
    }

    setpoder(poder){
        this.#poder=poder;
    }

    settipo(tipo){
        this.#tipo=tipo;
    }
    setvida(vida){
        this.#vida=vida;
    }
    #setvivo(vivo){
        this.#vivo=vivo;
    }

    // METODOS
    atacar(objetivo){

        if(objetivo instanceof CaminanteBlanco){
            console.log(`${this.getnombre()} calcina hasta los huesos a ${objetivo.getnombre()}`)
            objetivo.morir();//Mato al objeivo si es caminante blanco
        }else{

            let daño = Math.floor(this.#poder* (0.7+Math.random()* 0.6));
            console.log(`${this.getnombre()} ataca a  ${objetivo.getnombre()} causando ${this.#poder} puntos de daño.`);
            objetivo.recibirDaño(daño);

        }

        

    }

    morir(){
        if(this.#vivo){
            this.#vivo=false;
            console.log(`¡El dragon se desploma epicamente ${this.#nombre} a muerto!`);
        }else{
            console.log(`Este ya esta muerto`);
        }
    }

    recibirDaño(daño){
        this.#vida -= daño;
        if(this.#vida<=0){
            this.#vida=0;
            this.morir();
        }

    }
    
}