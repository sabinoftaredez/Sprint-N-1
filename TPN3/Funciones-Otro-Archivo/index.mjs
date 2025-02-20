import { leerSuperhéroes, agregarSuperhéroes } from "./utils.mjs";
const rutaOriginal = './Superhéroes.txt';
const rutaNuevos = './agregarSuperhéroes.txt';
// Agregar Los Nuevos Superhéroes
agregarSuperhéroes(rutaOriginal, rutaNuevos);
/*
// Leer y Mostrar la Lista de Superhéroes
const superhéroes = leerSuperhéroes('./Superhéroes.txt');
console.log('Lista de Superhéroes:');
console.log(superhéroes);
*/
// Leer y Mostrar la Lista de Superhéroes Actualizada
const superhéroes = leerSuperhéroes(rutaOriginal);
console.log('Lista de Superhéroes Actualizada:');
console.log(superhéroes);