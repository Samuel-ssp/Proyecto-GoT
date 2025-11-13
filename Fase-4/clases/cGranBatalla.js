import { Guerrero } from "./clasesEspeciales/cGuerrero.js";
export class GranBatalla{

    
    #moridos=[];

    setmoridos(muerto){
        this.#moridos.push(muerto);
    }

    getmorido(){
        return this.#moridos; 
    }

    batallaFinal(vivos,khaleesi,caminantes){
    
        let ejeVivos=[];
        let ejeCaminantes=[];

        //Crear los ejercito de solo los vivos
        vivos.getmiembros().forEach(miembro => {
            
            ejeVivos.push(miembro);
            
        });
        khaleesi.getdragones().forEach(dragon => {

            ejeVivos.push(dragon);
            
        });

        //Crear los ejercito de los caminantes
        caminantes.forEach(caminante => {
            
            ejeCaminantes.push(caminante);
            
        });

        //Mostrar los que combatiran
        console.log(`- Composición del ejercito de los vivos:`);
        ejeVivos.forEach(guerrero => {
            console.log(guerrero.getnombre());
        });

        console.log(`- Composición del ejercito de los Caminantes blancos:`);
        ejeCaminantes.forEach(guerrero => {
            console.log(guerrero.getnombre());
        });


        while(ejeVivos.length > 0 && ejeCaminantes.length > 0 ){

            //Elegir los guerreros aleatoriamente
            let vivo= ejeVivos[ Math.floor(Math.random()*ejeVivos.length) ];
            let caminante= ejeCaminantes[ Math.floor(Math.random()*ejeCaminantes.length) ];
            console.log("=======================================================================");
            console.log(`${vivo.getnombre()} se enfrenta a ${caminante.getnombre()}`);
            //Luchar mientras sigan los dos vivos
            while(vivo.getvivo() && caminante.getvivo()){

                let orden = Math.random();

                if(orden < 0.5){
                    console.log(" ATAQUE ")
                    vivo.atacar(caminante);
                    console.log("----------------------------")
                }else{
                    console.log(" ATAQUE ")
                    caminante.atacar(vivo);
                    console.log("-----------------------------")
                }
                //Comprobar que siguen vivos para mostrar la vida
                if(vivo.getvivo() && caminante.getvivo()){
                    console.log(" SALUD ")
                    console.log(`- ${vivo.getnombre()} tiene ${vivo.getvida()} puntos de vida
- ${caminante.getnombre()} tiene ${caminante.getvida()} puntos de vida`);
                }
                console.log("-----------------------------")
            }
            //Saco el guerrero muerto y lo meto en el array e los muertos
            if(vivo.getvivo()){

                let indice = ejeCaminantes.indexOf(caminante);
                this.#moridos.push(ejeCaminantes.splice(indice,1)[0]);
                console.log(`${caminante.getnombre()} conoce al Dios de la Muerte, ${vivo.getnombre()} vive otro día.`);

            }else{

                let indice = ejeVivos.indexOf(vivo);
                this.#moridos.push(ejeVivos.splice(indice,1)[0]);
                console.log(`${vivo.getnombre()} conoce al Dios de la Muerte, ${caminante.getnombre()} vive otro día.`);
            }
            console.log("=======================================================================");
        }
        console.log(" ");
        console.log(" ");
        //Comprobar si alguno de los grupos ya no tiene guerreros
        if(ejeVivos.length > 0){
            console.log("                          FIN DE LA BATALLA                         ");
            console.log(`Los vivos se alza victoriosa. El rey en la noche a caido.`);
            console.log("=======================================================================");
        }else{
            console.log("                          FIN DE LA BATALLA                         ");
            console.log(`Los Caminantes Blancos de alzan con la victoria The winter is comming...`);
            console.log("=======================================================================");
        }
    }
    mostrarGuerrerosMuertosEnCombate(){

        console.log("Los muertos de esta batalla fueron: ")
        this.#moridos.forEach(muerto => {
            console.log(`- ${muerto.getnombre()}`);
        });
    }
}