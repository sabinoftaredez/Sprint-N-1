import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import superhéroesDataSource from './superhéroesDataSource.mjs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default class superhéroesRepository extends superhéroesDataSource {
    constructor() {
        super();
        this.filePath = path.resolve(__dirname, '../superhéroes.txt');
    }
    obtenerTodos() {
        const data = fs.readFileSync(this.filePath, 'utf-8');
        return JSON.parse(data); // Convierte el contenido del archivo a un objeto
    }
}