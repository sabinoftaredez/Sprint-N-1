// Importa la Capa de Persistencia (Repository).
import repositorio from '../Repository/repositorio.mjs';
import tareas from '../Models/tareas.mjs';
// Instancia el Repositorio para manejar las tareas.
const tareaRepo = new repositorio();
// Servicio para Listar Todas las Tareas.
export function listarTareas() {
    // Obtiene Todas las Tareas desde la Capa de Persistencia.
    return tareaRepo.listar();
}
// Servicio para Listar Todas las Tareas Completadas.
export function listarTareasCompletadas() {
    // Obtiene Todas las Tareas Completadas desde la Capa de Persistencia.
    const tareas = tareaRepo.listar();
    // Filtra las Tareas Completadas.
    return tareaRepo.filter(tarea => tarea.completado);
}
// Servicio para Crear una Nueva Tarea.
export function crearTarea(id, titulo, descripción, completado = false) {
    // Obtiene Todas las Tareas.
    const tareas = tareaRepo.listar();
    // Crea una Nueva Instancia del Modelo Tarea.
    const nuevaTarea = new Tarea(id, titulo, descripción, completado);
    // Valida la Tarea.
    nuevaTarea.validar();
    // Añade la Nueva Tarea a la Lista de Tareas.
    tareas.push(nuevaTarea);
    // Actualiza la Lista de Tareas.
    tareaRepo.guardar(tareas);
}
// Servicio para Marcar una Tarea como Completada.
export function completarTarea(id) {
    // Obtiene Todas las Tareas.
    const tareas = tareaRepo.listar();
    // Busca la Tarea por su Identificador.
    const tarea = tareas.find(tarea => tarea.id === id);
    // Si la Tarea Existe, Marca la Tarea como Completada.
    if (tarea)
    tarea.marcarCompletado();
    // Actualiza la Lista de Tareas.
    tareaRepo.guardar(tareas);
}
// Servicio para Eliminar una Tarea.
export function eliminarTarea(id) {
    // Obtiene Todas las Tareas.
    const tareas = tareaRepo.listar();
    // Filtra las Tareas que no coincidan con el Identificador.
    tareas = tareas.filter(tarea => tarea.id !== id);
    // Actualiza la Lista de Tareas.
    tareaRepo.guardar(tareasFiltradas);
}