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
        const superhéroe = superhéroeArray.map(hro => new Superhéroe(hro.id, hro.nombreSuperhéroe, hro.nombreReal, hro.nombreSociedad, hro.edad, hro.planetaOrigen, hro.debilidad, hro.poder, hro.habilidadEspecial, hro.aliado, hro.enemigo));
// Ordenar por Nombre de Superhéroe
superhéroe.sort((a, b) => a.Superhéroe.localeCompare(b.Superhéroe));
return superhéroe;
}