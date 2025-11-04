import { Guerrero } from "./clases/clasesEspeciales/cGuerrero.js";
import { Consejero } from "./clases/clasesEspeciales/cConsejero.js";
import { Rey } from "./clases/clasesEspeciales/cRey.js";
import { Casa } from "./clases/cCasa.js";
import { Reino } from "./clases/cReino.js";
import { Arma } from "./clases/cArma.js";

// PERSONAJES
let jonSnow = new Guerrero("Jon Snow", 23);
let robert = new Rey("Robert Baratheon", 24,7);
let tyrion = new Consejero("Tyrion Lannister", 38,"Enanismo");
let arya = new Guerrero("Arya Stark", 18);
let jaime = new Guerrero("Jaime Lannister", 40);

// CASAS
let stark = new Casa("Stark", "Cuidao que refresca");
let targaryen = new Casa("Targaryen", "Fuego y sangre");
let lannister = new Casa("Lannister", "Tienen dinero para enterrarte");
let baratheon = new Casa("Baratheon", "Nuestra es la furia");

// REINOS        
let poniente = new Reino("Poniente");      // Reino: Poniente 

// ARMAS
let garraLarga = new Arma("Garra", 95,"Espada bastarda" ,"Arma larga ataque alto de acero Valyrio");                                   // para Jon Snow
let aguja = new Arma("Aguja", 75,"Espada fina" ,"Arma fina diseñada para apuñalar");                                                   // para Arya
let rompeJuramentos = new Arma("Rompe Juramentos", 90,"Espada larga" ,"Arma de acero Valyrio con mucho daño de el mano pocha");       // para Jaime

/// MENU

//Añadir casas a los reinos
poniente.asignarCasa(stark);
poniente.asignarCasa(lannister);

//Añadir armas a los personajes
arya.darArma(aguja);

//Añadir personajes a las casas
stark.añadirMiembro(jonSnow);
stark.añadirMiembro(arya);
lannister.añadirMiembro(tyrion);
baratheon.añadirMiembro(robert);

//Añadir rey
poniente.asignarRey(robert);

//Mostrar casas del reino
poniente.mostrarCasas();

//Mostar rey
poniente.mostrarrey();

console.log("--------------------NUEVAS FUNCIONES-------------------");
console.log("---------GUERRERO---------");
jonSnow.entrenar();
jonSnow.luchar();
jonSnow.darArma(garraLarga);
jonSnow.entrenar();
jonSnow.luchar();
console.log("---------CONSEJERO---------");
tyrion.luchar();
tyrion.aconsejar();
console.log("---------REY---------");
robert.luchar();
robert.gobernar();