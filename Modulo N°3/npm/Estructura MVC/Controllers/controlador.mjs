import {listarTareas, listarTareasCompletadas, crearTarea, completarTarea, eliminarTarea}
from '../Services/servicio.mjs';
import { renderizarListaTareas, renderizarMensaje, renderizarTarea } from '../View/vista.mjs';
// Controlador para listar todas las tareas.
export function listarControlador(req,res) {
    // Listar todas las tareas.
    const tareas = listarTareas();
    // Renderizar la lista de tareas en formato JSON.
    res.end(renderizarListaTareas(tareas));
}
// Controlador para Listar Todas las Tareas Completadas.
export function listarTareasCompletadasControlador(req,res) {
    // Listar todas las tareas completadas.
    const tareasCompletadas = listarTareasCompletadas();
    // Renderizar la Lista de Tareas Completadas en Formato JSON.
    res.end(renderizarListaTareas(tareasCompletadas));
}
// Controlador para Crear una Nueva Tarea.
export function crearTareaControlador(req,res) {
    // Extraer el Titulo, Descripción y Estado de la tarea del Cuerpo de la Petición.
    const { titulo, descripción, completado } = req.body;
    // Crear una Nueva Tarea con el Titulo, Descripción y Estado de la Tarea.
    crearTarea(titulo, descripción, completado);
    // Renderizar la tarea creada en formato JSON.
    res.end(renderizarMensaje('Tarea Creada'));
}
// Controlador para Marcar una Tarea como Completada.
export function completarTareaControlador(req,res) {
    // Extraer el Identificador de la Tarea de los Parámetros de la Petición.
    const { id } = req.params;
    // Marcar la Tarea como Completada.
    completarTarea(parseInt(id));
    // Renderizar la Tarea Completada en Formato JSON.
    res.end(renderizarMensaje('Tarea Completada'));
}
// Controlador para Eliminar una Tarea.
export function eliminarTareaControlador(req,res) {
    // Extraer el Identificador de la Tarea de los Parámetros de la Petición.
    const { id } = req.params;
    // Eliminar la Tarea.
    eliminarTarea(id);
    // Renderizar un Mensaje de Éxito en Formato JSON.
    res.end(renderizarMensaje('Tarea Eliminada'));
}