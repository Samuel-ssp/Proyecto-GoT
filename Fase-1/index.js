import { Personaje } from "./clases/cPersonaje.js";
import { Casa } from "./clases/cCasa.js";
import { Reino } from "./clases/cReino.js";
import { Arma } from "./clases/cArma.js";

// PERSONAJES
let jonSnow = new Personaje("Jon Snow", 23);
let daenerys = new Personaje("Daenerys Targaryen", 24);
let tyrion = new Personaje("Tyrion Lannister", 38);
let arya = new Personaje("Arya Stark", 18);
let jaime = new Personaje("Jaime Lannister", 40);

// CASAS
let stark = new Casa("Stark", "Cuidao que refresca");
let targaryen = new Casa("Targaryen", "Fuego y sangre");
let lannister = new Casa("Lannister", "Tienen dinero para enterrarte");
let baratheon = new Casa("Baratheon", "Nuestra es la furia");

// REINOS
let norte = new Reino("El Norte");         // Reino: El Norte
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
jonSnow.darArma(garraLarga);
arya.darArma(aguja);

//Añadir personajes a las casas
stark.añadirMiembro(jonSnow);
stark.añadirMiembro(arya);
lannister.añadirMiembro(jaime);

//Añadir rey
poniente.asignarRey(jaime);

//Mostrar casas del reino
poniente.mostrarCasas();

//Mostar rey
poniente.mostrarrey();

//Mostrar miembros
stark.mostrarMiembros();

//Mostrar armas
garraLarga.mostrarDatos();
aguja.mostrarDatos();