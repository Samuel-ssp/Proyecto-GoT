import { Casa } from "./cCasa.js";
import { Guerrero } from "./clasesEspeciales/cGuerrero.js";
export class Batalla{

    
    #moridos=[];

    setmoridos(muerto){
        this.#moridos.push(muerto);
    }

    getmorido(){
        return this.#moridos; 
    }

    batalla(casa1,casa2){
       
        let guerreros1=[];
        let guerreros2=[];

        //Crear los ejercios de solo guerreros
        casa1.getmiembros().forEach(miembro => {
            if(miembro instanceof Guerrero){
                guerreros1.push(miembro);
            }
        });

        casa2.getmiembros().forEach(miembro => {
            if(miembro instanceof Guerrero){
                guerreros2.push(miembro);
            }
        });

        //Mostrar los que combatiran
        console.log(`- Guerrero de la casa ${casa1.getnombre()}`);
        guerreros1.forEach(guerrero => {
            console.log(guerrero.getnombre());
        });

        console.log(`- Guerrero de la casa ${casa2.getnombre()}`);
        guerreros2.forEach(guerrero => {
            console.log(guerrero.getnombre());
        });


        while(guerreros1.length > 0 && guerreros2.length > 0 ){

            //Elegir los guerreros aleatoriamente
            let guerrero1= guerreros1[ Math.floor(Math.random()*guerreros1.length) ];
            let guerrero2= guerreros2[ Math.floor(Math.random()*guerreros2.length) ];
            console.log("=======================================================================");
            console.log(`${guerrero1.getnombre()} se enfrenta a ${guerrero2.getnombre()}`);
            //Luchar mientras sigan los dos vivos
            while(guerrero1.getvivo() && guerrero2.getvivo()){

                let orden = Math.random();

                if(orden < 0.5){
                    console.log(" ATAQUE ")
                    guerrero1.atacar(guerrero2);
                    console.log("----------------------------")
                }else{
                    console.log(" ATAQUE ")
                    guerrero2.atacar(guerrero1);
                    console.log("-----------------------------")
                }
                //Comprobar que siguen vivos para mostrar la vida
                if(guerrero1.getvivo() && guerrero2.getvivo()){

                    console.log(`- ${guerrero1.getnombre()} tiene ${guerrero1.getvida()} puntos de vida
- ${guerrero2.getnombre()} tiene ${guerrero2.getvida()} puntos de vida`);
                }
                console.log("-----------------------------")
            }
            //Saco el guerrero muerto y lo meto en el array e los muertos
            if(guerrero1.getvivo()){

                let indice = guerreros2.indexOf(guerrero2);
                this.#moridos.push(guerreros2.splice(indice,1)[0]);
                console.log(`${guerrero2.getnombre()} conoce al Dios de la Muerte, ${guerrero1.getnombre()} vive otro día.`);

            }else{

                let indice = guerreros1.indexOf(guerrero1);
                this.#moridos.push(guerreros1.splice(indice,1)[0]);
                console.log(`${guerrero1.getnombre()} conoce al Dios de la Muerte, ${guerrero2.getnombre()} vive otro día.`);
            }
            console.log("=======================================================================");
        }

        //Comprobar si alguno de los grupos ya no tiene guerreros
        if(guerreros1.length > 0){

            console.log(`${casa1.getnombre()} se alza victoriosa. El Trono de Hierro les pertenece esta noche`);

        }else{

            console.log(`${casa2.getnombre()} se alza victoriosa. El Trono de Hierro les pertenece esta noche`);

        }
    }
    mostrarGuerrerosMuertosEnCombate(){

        console.log("Los muertos de esta batalla fueron: ")
        this.#moridos.forEach(muerto => {
            console.log(`- ${muerto.getnombre()}`);
        });
    }
}