import express from 'express';
import básicoRouter from './routes-básico.mjs';
import parámetrosRouter from './routes-parámetros.mjs';
import consultaRouter from './routes-consulta.mjs';
// Crear una instancia de express
const app = express ();
// Configurar el Puerto en el que el Servidor Conectara
const port = 3001;
// Usar las Rutas Importadas
app.use('/', básicoRouter);
app.use('/', parámetrosRouter);
app.use('/', consultaRouter);

/*
-------------------------------------------------------
// Ruta Básica de Ubicación del Servidor
app.get('/', (req, res) => {
    res.send('Hola Universo');
});
*/

/*
-------------------------------------------------------
// RU'TEO BÁSICO
// Ruta GET para el Home
    // Solicitud: http://localhost:3001
app.get('/saludo', (req, res) => {
    res.send('Pagina de Inicio');
});
// Ruta GET para Recibir Datos Simples
    // Solicitud: https://localhots:3001/data
app.get('/data', (req, res) => {
    res.send('Datos Recibidos');
});
*/

/*
-------------------------------------------------------
// RU'TEO CON PARÁMETROS
// Ruta GET con Parámetro de Ruta
    // Solicitud: http://localhost:3001/parametro/123
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`Perfil de Usuario con ID: ${userId}`);
});
// Ruta GET con Múltiples Parámetros
    // Solicitud: http://localhost:3001/product/electronics/456
app.get('/product/:category/:id', (req, res) => {
    const {category, id} = req.params;
    res.send(`Categoría: ${category}, ID: ${id}`);
});
*/

/*
-------------------------------------------------------
// RU'TEO CON CONSULTA
// Ruta GET con Parámetros de Consulta
    // Solicitud: http://localhost:3001/search?q=javascript
app.get('/search', (req, res) => {
    const {query} = req.query.q;
    res.send(`Resultado: ${query}`);
});
// Ruta GET con Múltiples Parámetros de Consulta
    // Solicitud: http://localhost:3001/filter?type=book&minPrice=10&maxPrince=50
app.get('/filter', (req, res) => {
    const {type, minPrice, maxPrice} = req.query;
    res.send(`Tipo: ${type}, Rango de Precio: ${minPrice} - ${maxPrice}`);
});
*/

// Iniciar el servidor en el puerto especificado
app.listen(port, () => {
    console.log(`Servidor Iniciado en http://localhost:${port}`);
});