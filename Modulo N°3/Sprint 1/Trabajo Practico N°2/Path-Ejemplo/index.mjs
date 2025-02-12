import path from 'path';
import { fileURLToPath } from 'url';
// Define __dirname o equivalente para ESModules
const __filename = fileURLToPath(import.meta.url);
// Obtener un Directorio base
const dirname = path.dirname(__filename);
console.log('Directorio Base:',dirname);
// Definir filepath
const filepath = '/user/docs/index.txt';
// Obtener el Nombre del Archivo sin Extension
const baseName = path.basename(filepath, '.txt');
console.log('Nombre del Archivo sin Extension:',baseName);
// Obtener la Extensión del Archivo
const extName = path.extname(filepath);
console.log('Extensión del Archivo:',extName);
// Crear una Ruta Unida
const newPath =path.join('/user','docs','newFile.txt');
console.log('Nueva Ruta:',newPath);