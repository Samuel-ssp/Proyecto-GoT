import { Personaje } from "./cPersonaje.js";
import { Khaleesi } from "./clasesEspeciales/cKhaleesi.js";
export class Casa{
    
    #nombre;
    #lema;
    #miembros=[];

    constructor(nombre,lema){
        this.#nombre=nombre;
        this.#lema=lema;
    }

    getnombre(){
        return this.#nombre;
    }
    getlema(){
        return this.#lema;
    }
    getmiembros(){
        return this.#miembros;
    }

    setnombre(nombre){
        this.#nombre=nombre;
    }
    setlema(lema){
        this.#lema=lema;
    }
    #setmiembro(miembro){
        this.#miembros.push(miembro);
    }
    
    //METODOS

    añadirMiembro(personaje){

        if(personaje instanceof Personaje){

            if(this.#buscarMiembro(personaje) === -1){

                // Asignar la casa al personaje
                this.#setmiembro(personaje);
                personaje.setcasa(this.#nombre);
                console.log(`Personaje ${personaje.getnombre()} añadido correctamente`);
            }else{
                console.log(`El miembro ${personaje.getnombre()} ya esta en la casa ${this.#nombre}`);
            }

        }else{

             if( personaje instanceof Khaleesi){
                this.#setmiembro(personaje.getnombre());
                console.log(`Personaje ${personaje.getnombre()} añadido correctamente a la casa ${this.#nombre} `);
            }else{
                console.log("Lo que estás pasando no es un personaje");
            }
            
        }
    }

    quitarMiembro(personaje){

        if(personaje instanceof Personaje){

            if(this.#buscarMiembro(personaje) != -1){
                this.#miembros.splice(this.#buscarMiembro(personaje),1);
                console.log(`Personaje ${personaje.getnombre()} borrado correctamente`);
            }else{
                console.log(`El miembro ${personaje.getnombre()} no esta en la casa ${this.#nombre}`);
            }

        }else{
           
            console.log("Lo que estás pasando no es un personaje");
        }

    };
    //BUSCAR EL MIEMBRO  findIndex devuelve -1 si no encuentra el miembro
    #buscarMiembro(personaje){

        return this.#miembros.findIndex((miembro)=> miembro === personaje);
    
    };

    mostrarMiembros(){

        console.log(`Miembros de la casa ${this.#nombre}`);
        this.#miembros.forEach(miembro => {
            console.log(` - ${miembro.getnombre()}`);
        });
    }

    cambiarLema(nuevoLema){
        
        console.log(`La casa ${this.#nombre} cambia su lema de "${this.#lema}" a "${nuevoLema}"`);
        this.setlema(nuevoLema);
    }
}