export class Arma{

    #nombre;
    #daño;
    #tipo;
    #descripcion;
    #propietario;

    constructor(nombre,daño,tipo,descripcion){
        this.#nombre=nombre;
        this.#daño=daño;
        this.#tipo=tipo;
        this.#descripcion=descripcion;
    }

    getnombre(){
        return this.#nombre;
    }
    getdaño(){
        return this.#daño;
    }
    gettipo(){
        return this.#tipo;
    }
    getdescripcion(){
        return this.#descripcion;
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
    settipo(tipo){
        this.#tipo=tipo;
    }
    setdescripcion(descripcion){
        this.#descripcion=descripcion;
    }
    setpropietario(propietario){
        this.#propietario = propietario;
    }
    
    //METODOS

    quitarPropietario(){
        this.#propietario=null;
    }

    mostrarDatos(){
        console.log(`${this.#nombre} es un arma del tipo ${this.#tipo}
- Daño= ${this.#daño}`);
            if(this.#propietario){
                console.log(`- Propietario= ${this.#propietario}`);
            }else{
                console.log(`- Propietario= Sin propietario`);
            }
    }
}