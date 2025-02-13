import fs from 'fs';
// Clase para Presentar un SuperHéroe
class Superhéroe {
        constructor (id, nombreSuperhéroe, nombreReal, nombreSociedad, edad, planetaOrigen, debilidad, poder, habilidadEspecial, aliado, enemigo)
        {this.id = id;
         this.Superhéroe = nombreSuperhéroe;
         this.nombreReal = nombreReal;
         this.nombreSociedad = nombreSociedad;
         this.edad = edad;
         this.planetaOrigen = planetaOrigen;
         this.debilidad = debilidad;
         this.poder = poder;
         this.habilidadEspecial = habilidadEspecial;
         this.aliado = aliado;
         this.enemigo = enemigo;
        }
}
// Función para Leer y Ordenar el Archivo
export function leerSuperhéroes (ruta) {
        const datos = fs.readFileSync(ruta, 'utf-8');
        const superhéroeArray = JSON.parse(datos);
// Convertir a Instancias de Superhéroe
        const superhéroes = superhéroeArray.map(hro => new Superhéroe(
                hro.id,
                hro.nombreSuperhéroe,
                hro.nombreReal,
                hro.nombreSociedad,
                hro.edad,
                hro.planetaOrigen,
                hro.debilidad,
                hro.poder,
                hro.habilidadEspecial,
                hro.aliado,
                hro.enemigo
        ));
// Ordenar por Nombre de Superhéroe
superhéroes.sort((a, b) => a.edad - b.edad);
return superhéroes;
}
// Nueva Función para Agregar los Superhéroes restantes
export function agregarSuperhéroes (rutaOriginal, rutaNuevos) {
        const datosOriginal = fs.readFileSync(rutaOriginal, 'utf-8');
        const datosNuevos = fs.readFileSync(rutaNuevos, 'utf-8');
        const superhéroesArrayOriginales = JSON.parse(datosOriginal);
        const superhéroesArrayNuevos = JSON.parse(datosNuevos);
// Convertir los Nuevos Superhéroes a Instancias de Superhéroes
        const nuevosSuperhéroes = superhéroesArrayNuevos.map(hro => new Superhéroe(
                hro.id,
                hro.nombreSuperhéroe,
                hro.nombreReal,
                hro.nombreSociedad,
                hro.edad,
                hro.planetaOrigen,
                hro.debilidad,
                hro.poder,
                hro.habilidadEspecial,
                hro.aliado,
                hro.enemigo));
// Combinar Los Superhéroes
        const combinarListas = [...superhéroesArrayOriginales, ...nuevosSuperhéroes];
// Guardar la Nueva Lista de Superhéroes
fs.writeFileSync(rutaOriginal, JSON.stringify(combinarListas, null, 2));
console.log('Lista de Superhéroes Mezclada Exitosamente!');
}