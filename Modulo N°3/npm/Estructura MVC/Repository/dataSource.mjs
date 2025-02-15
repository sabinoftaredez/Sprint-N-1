// Definición de una Clase Abstracta que Actúe como Interfaz para la Persistencia de Datos.
export default class dataSource {
// Método Abstracto para Obtener todas las Tareas.
    listar() {
    throw new Error('Método debe ser Implementado por la Subclase');
    }
// Método Abstracto para Guardar las Tareas.
    guardar(tareas) {
    throw new Error('Método debe ser Implementado por la Subclase');
    }
// Método Abstracto para Eliminar las Tareas.
    eliminar() {
    throw new Error('Método debe ser Implementado por la Subclase');
    }
}