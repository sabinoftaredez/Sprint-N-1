// Función para Renderizar un Lista de tareas en Formato JSON.
export function renderizarListaTareas(tareas) {
    // Formatear el array de tareas a JSON con identación.
    return JSON.stringify(tareas, null, 2);
}
// Función para Renderizar un Mensaje Genérico en Formato JSON.
export function renderizarMensaje(mensaje) {
    // Envuelve el Mensaje en Formato JSON.
    return JSON.stringify({ mensaje }, null, 2);
}
// Función para Renderizar una Tarea Especifica en Formato JSON.
export function renderizarTarea(tarea) {
    // Formatear la tarea Individual a JSON con identación.
    return JSON.stringify(tarea, null, 2);
}