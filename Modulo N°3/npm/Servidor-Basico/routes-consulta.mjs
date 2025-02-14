import express from 'express';
const router = express.Router();
// Ruta GET con Parámetros de Consulta
    // Solicitud: http://localhost:3001/search?q=javascript
    router.get('/search', (req, res) => {
        const {query} = req.query.q;
        res.send(`Resultado: ${query}`);
    });
    // Ruta GET con Múltiples Parámetros de Consulta
        // Solicitud: http://localhost:3001/filter?type=book&minPrice=10&maxPrince=50
    router.get('/filter', (req, res) => {
        const {type, minPrice, maxPrice} = req.query;
        res.send(`Tipo: ${type}, Rango de Precio: ${minPrice} - ${maxPrice}`);
    });
export default router