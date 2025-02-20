import express from 'express';
// Crear la Instancia del Ru'teo
const router = express.Router();
// Ruta GET con Parámetro de Ruta
    // Solicitud: http://localhost:3001/user/123
    router.get('/user/:id', (req, res) => {
        const userId = req.params.id;
        res.send(`Perfil de Usuario con ID: ${userId}`);
    });
    // Ruta GET con Múltiples Parámetros
        // Solicitud: http://localhost:3001/product/electronics/456
    router.get('/product/:category/:id', (req, res) => {
        const {category, id} = req.params;
        res.send(`Categoría: ${category}, ID: ${id}`);
    });
export default router;