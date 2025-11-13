export class CaminanteBlanco {

    #nombre;
    #poderHelado;
    #vida;
    #vivo;

    constructor(nombre,poderHelado){
        this.#nombre=nombre;
        this.#poderHelado=poderHelado;
        this.#vida=100;
        this.#vivo=true;
        
    }

    getnombre(){
        return this.#nombre;
    }

    getpoderHelado(){
        return this.#poderHelado;
    }

    getvivo(){
       return this.#vivo; 
    }

    getvida(){
       return this.#vida; 
    }

    setarma(nombre){
        this.#nombre=nombre;
    }

    setpoderHelado(poderHelado){
        this.#poderHelado=poderHelado;
    }
    #setvivo(vivo){
        this.#vivo=vivo;
    }
    ////METODOS 

    morir(){
        if(this.#vivo){
            this.#vivo=false;
            console.log(`¡Oh Dios mío, han matado a ${this.#nombre}! ¡Un jodido Caminante menos!`);
        }else{
            console.log(`Este ya esta muerto`);
        }
    }
    //En los ataques de dragones y guerreros paso el tipo o material del daño  del  propio arma o dragon 
    recibirDaño(daño,tipo){
        this.#vida -= daño;
        if(tipo == "acero valyrio" || tipo == "fuego"){
            if(tipo == "acero valyrio"){
                console.log("El acero valyrio desintegra al "+this.#nombre);
            }
            this.#vida=0;
            this.morir();
        }else{
            console.log(`El ${this.#nombre} no puede morir por ${tipo}`);
        }

    }

    atacar(objetivo){

        let daño = Math.floor(this.#poderHelado* (0.7+Math.random()* 0.6));
        console.log(`${this.getnombre()} ataca a  ${objetivo.getnombre()} causando ${this.#poderHelado} puntos de daño.`);
        objetivo.recibirDaño(daño);

    }
}