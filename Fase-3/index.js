import { Guerrero } from "./clases/clasesEspeciales/cGuerrero.js";
import { Casa } from "./clases/cCasa.js";
import { Arma } from "./clases/cArma.js";
import { Batalla } from "./clases/cBatalla.js";

// PERSONAJES
// === GUERREROS DE LA CASA STARK ===
const jon = new Guerrero("Jon Snow", 25);
const arya = new Guerrero("Arya Stark", 18);
const robb = new Guerrero("Robb Stark", 22);
const brienne = new Guerrero("Brienne de Tarth", 30);

// === GUERREROS DE LA CASA LANNISTER ===
const jaime = new Guerrero("Jaime Lannister", 32);
const cersei = new Guerrero("Cersei Lannister");
const tyrion = new Guerrero("Tyrion Lannister", 30);
const gregor = new Guerrero("Gregor Clegane", 38);

// CASAS
let stark = new Casa("Stark", "Cuidao que refresca");
let lannister = new Casa("Lannister", "Tienen dinero para enterrarte");
let baratheon = new Casa("Baratheon", "Nuestra es la furia");

// ARMAS
const garra = new Arma("Garra", 90);
const aguja = new Arma("Aguja", 70);
const hacha = new Arma("Hacha del Norte", 80);
const espadaLarga = new Arma("Espada Larga", 85);
const ballesta = new Arma("Ballesta", 75);
const filoRojo = new Arma("Filo Rojo", 88);
const lanzaDeCaza = new Arma("Lanza de Caza", 60); 
const granEspada = new Arma("Montaña",80);   

//  AÑADIR ARMAS A LOS PERSONAJES
jon.darArma(garra);
arya.darArma(aguja);
robb.darArma(espadaLarga);
brienne.darArma(hacha);

jaime.darArma(filoRojo);
cersei.darArma(lanzaDeCaza);
tyrion.darArma(ballesta);
gregor.darArma(granEspada);

// === AÑADIR PERSONAJES A LAS CASAS ===
stark.añadirMiembro(jon);
stark.añadirMiembro(arya);
stark.añadirMiembro(robb);
stark.añadirMiembro(brienne);

lannister.añadirMiembro(jaime);
lannister.añadirMiembro(cersei);
lannister.añadirMiembro(tyrion);
lannister.añadirMiembro(gregor);

/// MENU

//  MOSTRAR MIEMBROS
stark.mostrarMiembros();
lannister.mostrarMiembros();

const loboVsLeon = new Batalla();

loboVsLeon.batalla(stark,lannister); 

loboVsLeon.mostrarGuerrerosMuertosEnCombate();
