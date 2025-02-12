import fs from 'fs';
// Leer un Archivo de Manera Asíncrona
fs.readFile('./data/example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Contenido del Archivo:', data);
});
// Escribir en un Nuevo Archivo
fs.writeFile('./data/newFile.txt', 'Contenido de Texto', (err) => {
    if (err) throw err;
    console.log('Archivo Creado y Escrito');
    });
// Renombrar un Archivo
fs.rename('./data/newFile.txt', './data/renamedFile.txt', (err) => {
    if (err) throw err;
    console.log('Renombrado Completado');
});