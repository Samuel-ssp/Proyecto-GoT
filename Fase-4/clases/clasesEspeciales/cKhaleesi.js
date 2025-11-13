export class Khaleesi {
    #nombre;
    #age;
    #dragones=[];
    #consejero;
    #vida;

    constructor(nombre,edad,consejero){
        this.#nombre=nombre;
        this.#age=edad;
        this.#consejero=consejero;
        this.#vida=100;
    }
    getnombre(){
        return this.#nombre;
    }

    getdragones(){
        return this.#dragones;
    }

    getconsejero(){
        return this.#consejero;
    }

    #setdragon(dragones){
        this.#dragones.push(dragones);
    }

    setconsejero(consejero){
        this.#consejero=consejero;
    }

    //METODOS

    recibirDaño(daño){
        this.#vida -= daño;
        if(this.#vida<=0){
            this.#vida=0;
            this.morir();
        }

    }

    añadirDragon(dragon){
 
        this.#setdragon(dragon);
        console.log(`El dragon ${dragon.getnombre()} se añadio a la Khaleesi`);
            
    }
}