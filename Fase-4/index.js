import { Guerrero } from "./clases/clasesEspeciales/cGuerrero.js";
import { Casa } from "./clases/cCasa.js";
import { Arma } from "./clases/cArma.js";
import { GranBatalla } from "../Fase-4/clases/cGranBatalla.js";
import { Khaleesi } from "../Fase-4/clases/clasesEspeciales/cKhaleesi.js";
import { Dragon } from "../Fase-4/clases/cDragon.js";
import { Consejero } from "../Fase-4/clases/clasesEspeciales/cConsejero.js";
import { CaminanteBlanco } from "../Fase-4/clases/cCaminanteBlanco.js";
/* MODIFICACIONES DEL CODIGO 

    Casas = añadi otra comprobacion si falla como personaje al ser kaleesy un 
    tipo nuevo para poder añadirla correctamente.

    Guerrero = En la clase guerrero el ataque tambien pasa el material con que esta echo el arma equipada 
    para que como el dragon al recibir ese daño el caminante muera.

    Arma = Nuevo parametro material del arma.

    El caminante no deja de perder vida hasta que le hagan daño con acero valyrio o fuego de dragon.

*/

// --------------------------------------------------
// 1. Crear casas y armas
// --------------------------------------------------
const casaStark = new Casa("Stark", "El invierno se acerca");
const casaTargaryen = new Casa("Targaryen","Los de las mascotas raras");
const garra = new Arma("Garra", 50, "acero valyrio");
const hacha = new Arma("Hacha del Norte", 40, "hierro");
const lanza = new Arma("Lanza del Norte",40,"hierro");//Nueva arma para personaje edd


// --------------------------------------------------
// 2. Crear guerreros de la Casa Stark
// --------------------------------------------------
const jon = new Guerrero("Jon Snow", 25,);
const tormund = new Guerrero("Tormund", 30);
const edd = new Guerrero("Edd", 28 );
casaStark.añadirMiembro(jon);
casaStark.añadirMiembro(tormund);
casaStark.añadirMiembro(edd);
jon.darArma(garra);
tormund.darArma(hacha);
edd.darArma(lanza);

// --------------------------------------------------
// 3. Crear a Khaleesi y sus dragones
// --------------------------------------------------
const Tyrion = new Consejero("Tyrion",40,"Enanismo");
const drogon = new Dragon("Drogon", 60, "fuego");
const viserion = new Dragon("Viserion", 55, "fuego");
const rhaegal = new Dragon("Rhaegal", 50, "fuego");
const khaleesi = new Khaleesi("Daenerys Targaryen", 29,Tyrion);
khaleesi.añadirDragon(drogon);
khaleesi.añadirDragon(viserion);
khaleesi.añadirDragon(rhaegal);
casaTargaryen.añadirMiembro(khaleesi);

// --------------------------------------------------
// 4. Crear ejército de Caminantes Blancos
// --------------------------------------------------
const caminante1 = new CaminanteBlanco("Caminante 1", 35);
const caminante2 = new CaminanteBlanco("Caminante 2", 40);
const caminante3 = new CaminanteBlanco("Caminante 3", 30);
const caminante4 = new CaminanteBlanco("Caminante 4", 50);
const caminante5 = new CaminanteBlanco("Caminante 4", 50);//He creado 3 caminantes mas ya que la pelea no es justa
const caminante6 = new CaminanteBlanco("Caminante 4", 50);//Con 3 mas tienen posibilidad de ganar los caminantes
const caminante7 = new CaminanteBlanco("Caminante 4", 50);

const ejercitoCaminantes = [caminante1, caminante2, caminante3, caminante4,caminante5,caminante6,caminante7];

// --------------------------------------------------
// 5. Función para iniciar la batalla final
// --------------------------------------------------
const batallaFinal = new GranBatalla();

batallaFinal.batallaFinal(casaStark, khaleesi, ejercitoCaminantes);

batallaFinal.mostrarGuerrerosMuertosEnCombate();