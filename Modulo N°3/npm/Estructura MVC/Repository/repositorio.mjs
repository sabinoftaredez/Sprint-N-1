// Importar el Modulo del SIstema de Archivos Node.js.
import fs from 'fs';
// Modulo para Manejar Rutas de Archivos.
import path from 'path';
// Modulo para Obtener la Ruta del Archivo Actual.
import { fileURLToPath } from 'url';
// Importa la Clase Abstracta de Persistencia de Datos.
import dataSource from './dataSource.mjs';
// Importar el Modelo de Tareas.
import Tarea from '../Models/tareas.mjs';
// Obtener la Ruta del Archivo de Tareas.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filePath = path.join(__dirname, 'tareas.txt');
// Implementación que Extiende la Interfaz de dataSource.
export default class repositorio extends dataSource {
    constructor() {
    // Llama al Constructor de la Clase Abstracta.
    super();
    }
    // Método para Obtener Todas las Tareas.
    listar() {
        try {
    // Leer el Archivo de Tareas.
        const data = fs.readFileSync(filePath, 'utf8');
        // Convertir el Archivo a un Array de Tareas JSON.
        return JSON.parse(data);
        // Convertir cara Tarea en una Instancia de la Clase "Tarea".
        return tareas.map(tareaData => new Tarea(
            tarea.id,
            tarea.titulo,
            tarea.descripción,
            tarea.completado));
    } catch (error) {
        // Si el Archivo no Existe, Retornar un Array Vacío.
        console.log('Error al Leer el Archivo de Tareas:', error);
        return [];
        }
    }
    // Método para Guardar las Tareas.
    guardar(tareas) {
        try {
        // Convertir las Tareas a Formato JSON.
        const data = JSON.stringify(tareas, null, 2);
        // Escribir las Tareas en el Archivo.
        fs.writeFileSync(filePath, data, 'utf8');
    } catch (error) {
        // Si hay un Error, Mostrar un Mensaje en la Consola.
        console.log('Error al Guardar el Archivo de Tareas:', error);
        }
    }
    // Método para Eliminar las Tareas.
    eliminar(id) {
        try {
        // Obtener Todas las Tareas Existentes.
        const tareas = this.listar();
        // Filtrar las Tareas que no Coinciden con el Identificador.
        const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
        // Guardar las Tareas Actualizadas.
        this.guardar(tareasActualizadas);
    } catch (error) {
        // Si hay un Error, Mostrar un Mensaje en la Consola.
        console.log('Error al Eliminar el Archivo de Tareas:', error);
        }
    }
}