export class Arma{

    #nombre;
    #daño;
    #propietario;

    constructor(nombre,daño){
        this.#nombre=nombre;
        this.#daño=daño;
    }

    getnombre(){
        return this.#nombre;
    }
    getdaño(){
        return this.#daño;
    }
    getpropietario(){
        return this.#propietario;
    }

    setnombre(nombre){
        this.#nombre=nombre;
    }
    setdaño(daño){
        this.#daño=daño;
    }

    setpropietario(propietario){
        this.#propietario = propietario;
    }
    
    //METODOS

    quitarPropietario(){
        this.#propietario=null;
    }

    mostrarDatos(){
        console.log(`${this.#nombre} 
- Daño= ${this.#daño}`);
            if(this.#propietario){
                console.log(`- Propietario= ${this.#propietario}`);
            }else{
                console.log(`- Propietario= Sin propietario`);
            }
    }
}