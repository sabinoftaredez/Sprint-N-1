export default class Tarea {
    constructor (id, titulo, descripción, completado = false) {
        this.id = id; // Identificador de la tarea.
        this.titulo = titulo; // Titulo de la tarea.
        this.descripción = descripción; // Descripción de la tarea.
        this.completado = completado; // Estado de la tarea completada, por defecto es "false".
    }
// Método para Marcar la Tarea como Completada.
marcarCompletado() {
    this.completado = true; // Cambiamos el estado de la tarea a "true".
}
// Método para Validar que el Título de la Tarea no esté Vacío.
validar() {
    if (!this.titulo || this.titulo.trim() === '') {
        throw new Error('El Titulo de la Tarea es Obligatorio');
        }
    }
}