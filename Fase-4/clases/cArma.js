export class Arma{

    #nombre;
    #daño;
    #propietario;
    #material;

    constructor(nombre,daño,material){
        this.#nombre=nombre;
        this.#daño=daño;
        this.#material =material; 
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
    getmaterial(){
        return this.#material;
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