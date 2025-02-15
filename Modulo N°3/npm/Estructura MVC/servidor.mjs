// Importamos el Framework Express
import express from 'express';
// Importamos los Controladores
import {listarControlador,
        listarTareasCompletadasControlador,
        crearTareaControlador,
        completarTareaControlador,
        eliminarTareaControlador } from './Controllers/controlador.mjs';
// Inicializamos una Aplicación de Express.
const app = express();
// Definimos el Puerto en el que Escuchara el servidor.
const PORT = 3010;
// Middleware para permitir el manejo de Solicitudes con cuerpo  en Formato JSON.
app.use(express.json())
// Rutas
    // Ruta para Obtener Todas las Tareas.
    app.get('/tareas', listarControlador);
    // Ruta para Obtener las Tareas Completadas.
    app.get('/tareas/completadas', listarTareasCompletadasControlador);
    // Ruta para Crear Nueva Tarea.
    app.post('/tareas', crearTareaControlador);
    // Ruta para Marcar una Tarea como Completada.
    app.put('/tareas/:id/completar', completarTareaControlador);
    // Ruta Eliminar una Tarea.
    app.delete('/tareas/:id', eliminarTareaControlador);
// Inicializamos el Servidor.
app.listen(PORT, () => {
    console.log(`Servidor Iniciado en http://localhost:${PORT}`);
});