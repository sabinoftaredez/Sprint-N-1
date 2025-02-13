import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Obtener el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Definir las rutas de los archivos
const dataDir = path.join(__dirname, 'data');
const exampleFilePath = path.join(dataDir, 'example.txt');
const newFilePath = path.join(dataDir, 'newFile.txt');
const renamedFilePath = path.join(dataDir, 'renamedFile.txt');

// Leer un Archivo de Manera Asíncrona
fs.readFile(exampleFilePath, 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Contenido del Archivo:', data);
});

// Escribir en un Nuevo Archivo
fs.writeFile(newFilePath, 'Contenido de Texto', (err) => {
    if (err) throw err;
    console.log('Archivo Creado y Escrito');

    // Renombrar el Archivo después de Crearlo
    fs.rename(newFilePath, renamedFilePath, (err) => {
        if (err) throw err;
        console.log('Renombrado Completado');
    });
});