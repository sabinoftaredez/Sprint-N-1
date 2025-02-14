import express from 'express';
// Crear una instancia de express
const app = express ();
// Configurar el Puerto en el que el Servidor Conectara
const port = 3000;
// Ruta Básica de Ubicación del Servidor
app.get('/', (req, res) => {
    res.send('Hola Universo');
});
// Iniciar el servidor en el puerto especificado
app.listen(port, () => {
    console.log(`Servidor Iniciado en http://localhost:${port}`);
});